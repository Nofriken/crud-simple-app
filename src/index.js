import express from "express";
import env from "dotenv";
import mongoose from "mongoose";
import product_route from "./routes/product_route";

const app = express();
env.config();

// make a connection database
const db_url = process.env.MONGO_URL;
mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.info(err));
db.once("open", () => console.info("Database Connected.."));

// middleware
app.use(express.json());

// routes
app.use(product_route);

const port = process.env.PORT;
app.listen(port, () => {
  console.info(`Server Is Runnning in ${port}`);
});
