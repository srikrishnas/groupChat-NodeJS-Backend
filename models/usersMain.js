module.exports = (sequelize, DataTypes) => {
  const users_main = sequelize.define("users_main", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_name: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_role: DataTypes.STRING,
  });
  return users_main;
};
