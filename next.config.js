require("dotenv").config({ debug: process.env.DEBUG });

module.exports = {
  env: {
    AppName: process.env.AppName || "Memo",
    FBAPIKey: process.env.FBAPIKey,
    FBAuthDomain: process.env.FBAuthDomain,
    FBProjectID: process.env.FBProjectID,
  },
};
