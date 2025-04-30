import { model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    user: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          required: true,
          type: Number,
          default: 1,
          min: 1,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Order", orderSchema);
