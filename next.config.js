require("dotenv").config({ debug: process.env.DEBUG });

module.exports = {
  env: {
    AppName: process.env.AppName || "Memo",
  },
};
