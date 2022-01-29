const express = require("express");
const app = express();
const swaggerTools = require("swagger-tools");
const fs = require("fs");
const path = require("path");
const jsyaml = require("js-yaml");
const http = require("http");
const db = require("./models/index.js");
const jwtCalls = require("./utils/jwt.js");
const bodyParser = require('body-parser')

serverPort = 3099;

// The Swagger document
const spec = fs.readFileSync(path.join(__dirname, "api/swagger.yaml"), "utf8");
const swaggerDoc = jsyaml.safeLoad(spec);

// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, "/swagger.json"),
  controllers: path.join(__dirname, "./api/controllers"),
  useStubs: process.env.NODE_ENV === "development",
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
  const { url } = req;

  if (
    !url.includes('/groupChat/docs/')
    && !url.includes('/api-docs')
    && !url.includes('/login')
  ) {
    console.log("VERIFY JWT::",url)
    jwtCalls.jwtVerify(req, res, next);
  } else {
    console.log("SKIP JWT::",url)
    next();
  }
});

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  // Interpret Swagger resources and attach metadata to request - must be first in
  // swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use("/groupChat", middleware.swaggerUi());

  // Start the server
  const server = http.createServer(app).listen(serverPort, () => {
    const checkDate = new Date();
    console.log(
      `Your server is listening on port %d (http://localhost:%d) date time ${checkDate}`,
      serverPort,
      serverPort
    );
    console.log(
      "Swagger-ui is available on http://localhost:%d/groupChat/docs/#",
      serverPort
    );
  });

  server.keepAliveTimeout = 310 * 10000;
  server.headersTimeout = 320 * 10000;
  server.timeout = 320 * 10000;
});
