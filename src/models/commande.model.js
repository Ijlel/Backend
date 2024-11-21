import mongoose from "mongoose";
const commandeSchema = new mongoose.Schema({
  commandeDate: {
    type: Date,
    default: Date.now, // Définit automatiquement la date de la commande
    required: true,
    trim: true, // Empty fields at the beginning of the string
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId, // Référence à l'ID d'un produit
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1, // Une commande doit contenir au moins 1 produit
      },
    },
  ],
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"], // États possibles de la commande
    default: "Pending",
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0, // Le prix total doit être un nombre positif
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Référence à l'ID de l'utilisateur
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Commande", commandeSchema);
