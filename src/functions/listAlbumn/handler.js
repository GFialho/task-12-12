const { Albumn } = require("../../../models");

export const main = async () => {
  const albumns = await Albumn.findAll();
  return { statusCode: 200, body: JSON.stringify(albumns) };
};
