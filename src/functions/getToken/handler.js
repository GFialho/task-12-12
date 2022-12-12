/* Idea to get user token endpoint */
const googleOauth = require("google-sdk");

export const main = async () => {
  const token = await googleOauth.createToken();

  return { statusCode: 302, url: "" };
};
