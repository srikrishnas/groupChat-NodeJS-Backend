const { group, group_user, users_main, group_message } = require("../../models");

const getAllGroups = () => {
  console.log("getAllGroups SERVICE");
  return group
    .findAll()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("getAllGroups ERROR::::::", error);
      throw error;
    });
};

const createGroup = (data) => {
  console.log("createGroup SERVICE", data);
  return group
    .findOne({
      where: {
        group_name: data.group_name,
      },
    })
    .then((logData) => {
      if (!logData) {
        return group
          .create(data)
          .then((result) => {
            return `Group Created ${result.group_name}`;
          })
          .catch((error) => {
            console.log("createGroup ERROR::::::", error);
            throw error;
          });
      } else {
        return "User Exists";
      }
    })
    .catch((error) => {
      throw error;
    });
};

const deleteGroup = async (data) => {
  console.log("createGroup SERVICE", data);

  return group
    .destroy({
      where: {
        group_name: data.group_name,
      },
    })
    .then((result) => {
      if (result && result === 1) {
        return `deleted Group ${data.group_name}`;
      }
      return `Group ${data.group_name} Not Found`;
    })
    .catch((error) => {
      console.log("DELETE ERROR::::::", error);
      throw error;
    });
};

const addMembers = async (data) => {
  console.log("addMembers SERVICE", data);

  return group
    .findOne({
      where: {
        group_name: data.group_name,
      },
    })
    .then(async (logData) => {
      if (!logData) {
        return "group not found";
      }
      data.group_id = logData.group_id;
      return await users_main
      .findOne({
      where: {
        user_name: data.user_name,
      },
    })
    })
    .then((logData2) => {
      if (logData2) {
        return group_user
          .create(data)
          .then((result) => {
            return `Added ${result.user_name} to ${data.group_name}`;
          })
          .catch((error) => {
            console.log("createGroup ERROR::::::", error);
            throw error;
          });
      } else {
        return "USER NOT FOUND";
      }
    })
    .catch((error) => {
      throw error;
    });
};

const sendMessage = async (data) => {
  console.log("createGroup SERVICE", data);
  return group
    .findOne({
      where: {
        group_name: data.group_name,
      },
    })
    .then((logData) => {
      if (!logData) {
        throw "group not found";
      }
      
      data.group_id = logData.dataValues.group_id;
      data.msg_sent_user_name = data.name;
      return users_main
      .findOne({
      where: {
        user_name: data.name,
      },
    })
    })
    .then((logData2) => {
      if (logData2) {
        console.log("MESSAGE DATA",data)
        return group_message
          .create(data)
          .then((result) => {
            return `message sent to group ${data.group_name}`;
          })
          .catch((error) => {
            console.log("sendMessage ERROR::::::", error);
            throw error;
          });
      } else {
        throw "USER NOT FOUND";
      }
    })
    .catch((error) => {
      throw error;
    });
};

const likeMessage = async (data) => {
  console.log("likeMessage SERVICE", data);

  return group_message
    .findOne({
      where: {
        message_id: data.message_id,
      },
    }).then((respData) => {
      data.likes = respData.dataValues.likes + 1;
      return group_message
        .update(
          data,{
          where: {
            id: respData.dataValues.id,
          }}
        ).then((resp) => {
          return `Liked Message!!`
        })
    }).catch((err) => {
      throw err
    })
};

module.exports = {
  getAllGroups,
  createGroup,
  deleteGroup,
  addMembers,
  sendMessage,
  likeMessage,
};
