module.exports = (sequelize, DataTypes) => {
  const Albumn = sequelize.define(
    "Albumn",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      year: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );

  return Albumn;
};
