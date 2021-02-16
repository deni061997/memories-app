import express from "express";
import cors from "cors";
import "dotenv/config.js";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
    await mongoose.connect(process.env._DB_URL, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connection success");
  } catch (error) {}
};

start();
