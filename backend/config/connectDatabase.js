const mongoose = require("mongoose");

const connnectDatabse = () => {
  mongoose.connect(process.env.DB_url).then((con) => {
    console.log("MongoDB connected to host :" + con.connection.host);
  });
};

module.exports = connnectDatabse;
