import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  phonenumber: Number,
});

export default mongoose.model("querySchema", contactSchema);
