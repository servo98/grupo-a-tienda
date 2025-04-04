import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  user: {
    unique: true,
    required: true,
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },
    },
  ],
});

export default model("Cart", cartSchema);
