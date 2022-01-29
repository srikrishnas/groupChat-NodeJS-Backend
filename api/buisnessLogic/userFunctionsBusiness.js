var uniqid = require('uniqid');
const userFunctionsBuisness = require("../service/userFunctionsService.js");

const getAllGroups = async () => {
  const allGroups = await userFunctionsBuisness.getAllGroups();
  return {
    status: 200,
    groups: allGroups,
  };
};

const createGroup = async (data) => {
  data.group_admin = data.name;
  data.group_id = uniqid('GID');
  const createGroupResponse = await userFunctionsBuisness.createGroup(data);
  console.log("createGroupResponse",createGroupResponse)
  return {
    status: 200,
    message: createGroupResponse,
  };
};

const deleteGroup = async (data) => {
  const response = await userFunctionsBuisness.deleteGroup(data);
  return {
    status: 200,
    message: response,
  };
};

const addMembers = async (data) => {
  const response = await userFunctionsBuisness.addMembers(data);
  return {
    status: 200,
    message: response,
  };
};

const sendMessage = async (data) => {
  data.message_id = uniqid(`${data.group_name}`);
  const response = await userFunctionsBuisness.sendMessage(data);
  return {
    status: 200,
    message: `${response}`,
  };
};

const likeMessage = async (data) => {
  const response = await userFunctionsBuisness.likeMessage(data);
  return {
    status: 200,
    message: response,
  };
};

module.exports = { getAllGroups, createGroup, deleteGroup, addMembers, sendMessage, likeMessage };
