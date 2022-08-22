const express = require("express");
const app = express();

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

// api Routes
app.use("/api", apiRoutes);

// html Routes
app.use("/", htmlRoutes);



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));