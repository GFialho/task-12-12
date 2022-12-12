// Sequelize model
const { Albumn } = require("../../../models");

export const main = async (event) => {
  const { title, year } = JSON.parse(event.body);

  const albumn = await Albumn.create({ title, year });
  return { statusCode: 201, body: JSON.stringify(albumn) };
};
