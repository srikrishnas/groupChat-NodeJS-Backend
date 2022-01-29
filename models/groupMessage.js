module.exports = (sequelize, DataTypes) => {
  const group_message = sequelize.define("group_message", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    group_id: DataTypes.STRING,
    message_id: DataTypes.STRING,
    msg_sent_user_name: DataTypes.STRING,
    message: DataTypes.STRING,
    likes: DataTypes.INTEGER,
  });
  return group_message;
};
