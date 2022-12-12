// const googleOauth = require("google-sdk");

// Help function to generate an IAM policy
const generatePolicy = function (principalId, effect, resource) {
  const authResponse = {};

  authResponse.principalId = principalId;
  if (effect && resource) {
    const policyDocument = {};
    policyDocument.Version = "2012-10-17";
    policyDocument.Statement = [];
    const statementOne = {};
    statementOne.Action = "execute-api:Invoke";
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }

  return authResponse;
};

export const main = async (event) => {
  const token = event.headers.Authorization;

  /* Idea to verify the token */
  // const isTokenValid = googleOauth.validateToken(token);
  // const user = await googleOauth.getUser(token);
  // const permission = isTokenValid ? "Allow" : "Deny";

  const policy = generatePolicy("user", "Allow", event.methodArn);
  return policy;
};
