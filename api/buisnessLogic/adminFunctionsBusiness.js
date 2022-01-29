const adminFunctionsService = require("../service/adminFunctionsService");

// ADMIN
const createUser = async (data) => {
    const { user_role, user_password, user_name } = data;
    if(user_role && user_password && user_name){
        const loginData = await adminFunctionsService.createUser(data);
        return { status:200, message: `Created New User ${loginData.dataValues.user_name}`}
    } else {
        return { status:200, message: `Inadequate Data`}
    }
};

const deleteUser = async (data) => {
    const { user_name } = data;
    console.log("DATA:::::::::",data)
    if(user_name){
        const deleteData = await adminFunctionsService.deleteUser(data);
        console.log("deleteData",deleteData)
        return { status:200, message: `DELETED User`}
    } else {
        return { status:200, message: `Inadequate Data`}
    }
};

const updateUser = async (data) => {
    // const { user_role, user_password, user_name } = data;
    if(data){
        const updatedData = await adminFunctionsService.updateUser(data);
        console.log("updateData",updatedData)
        return { status:200, message: `Updated User`}
    } else {
        return { status:200, message: `Inadequate Data`}
    }
};

const getAllUsers = async () => {
        const allUsers = await adminFunctionsService.getAllUsers();
        console.log("updateData",allUsers)
        return { status:200, users: allUsers }
};


module.exports = { createUser, deleteUser, updateUser, getAllUsers };
