// src/app/api/skills/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SkillSectionModel from "@/models/Skils";

export async function GET() {
  try {
    await connectDB();
    const skills = await SkillSectionModel.find(); // Récupérer toutes les sections de compétences
    return NextResponse.json(skills);
  } catch (error) {
    console.error("Erreur lors de la récupération des compétences :", error);
    return NextResponse.json({ error: "Erreur de récupération des compétences" }, { status: 500 });
  }
}
export async function POST(req: NextRequest) {
    try {
      await connectDB();
      const body = await req.json();  // Récupérer les données envoyées dans la requête
      
      // Créer un nouveau document basé sur les données
      const newSkillSection = new SkillSectionModel(body);
      
      // Sauvegarder dans la base de données
      await newSkillSection.save();
      
      // Retourner la réponse avec le nouvel objet ajouté
      return NextResponse.json(newSkillSection, { status: 201 });
    } catch (error) {
      console.error("Erreur lors de l'insertion des compétences :", error);
      return NextResponse.json({ error: "Erreur lors de l'insertion des compétences" }, { status: 500 });
    }
  }
