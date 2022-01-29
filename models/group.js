module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define("group", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    group_id: DataTypes.STRING,
    group_name: DataTypes.STRING,
    group_admin: DataTypes.STRING,
  });
  return group;
};
