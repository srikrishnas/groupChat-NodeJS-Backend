module.exports = (sequelize, DataTypes) => {
  const group_user = sequelize.define("group_user", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    group_id: DataTypes.STRING,
    user_name: DataTypes.STRING,
  });
  return group_user;
};
