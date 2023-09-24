const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

app.listen(3002, (req, res) => console.log("running on 3002"));
