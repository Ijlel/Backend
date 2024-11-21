import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Empty fields at the beginning of the string
    unique: true,
    minlength: 3, // At least 1 character
    maxlength: 100, // Maximum length for name
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 500,
  },
});

export default mongoose.model("Category", categorySchema);
