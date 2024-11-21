import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Le champ name est obligatoire
    trim: true, // Supprime les espaces inutiles
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    default: "https://via.placeholder.com/150", // Default image URL
  },
  price: {
    type: Number,
    required: true, // Le champ price est obligatoire
    min: 0, // Prix minimal (0 ou plus)
  },
  store: {
    type: String,
    default: 0,
  },
  available: {
    type: Boolean,
    default: function () {
      return this.store > 0;
    },
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, // Référence à la collection Category
    ref: "Category", // Nom du modèle de catégorie
    required: true, // La catégorie est obligatoire
  }

});


export default mongoose.model("Product", productSchema);
