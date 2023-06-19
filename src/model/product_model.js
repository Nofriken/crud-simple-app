import mongoose from "mongoose";

const Product = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  expired: {
    type: String,
    require: true,
  },
});

export default mongoose.model("product", Product);
