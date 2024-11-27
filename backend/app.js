const express = require("express");
const app = express();
const dontenv = require("dotenv");
const path = require("path"); //for configure the config path in dotenv
const connnectDatabse = require("./config/connectDatabase");
dontenv.config({ path: path.join(__dirname, ".env") });

connnectDatabse();

//reqluire routers
const products = require("./routes/product");
const orders = require("./routes/order");

// creating url for api call

app.use(express.json());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(PORT, () => {
  console.log(`server listening to port ${PORT} in ${NODE_ENV}`);
});
