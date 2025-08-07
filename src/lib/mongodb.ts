import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI n'est pas défini dans .env.local");
}

// Global cache (utile en développement pour éviter les multiples connexions)
let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Déjà connecté à MongoDB.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("✅ Connecté à MongoDB Atlas !");
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error);
    throw error;
  }
};
