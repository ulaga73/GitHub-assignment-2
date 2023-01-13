const express = require("express");
const bodyParser = require("body-parser");
const dbServer = require("./db/mongoose");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const postRouter = require("./routes/post");

dbServer()
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/posts", postRouter);

app.listen(3000, () => console.log("PORT 3000 is running successfully..."));