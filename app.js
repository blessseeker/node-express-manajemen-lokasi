const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(bodyParser.json());
app.use("/api/places/", placesRoutes);
app.use("/api/users/", usersRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ pesan: error.message || "Terjadi sebuah kesalahan" });
});

app.listen(5000);
