import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SkillSectionModel from "@/models/Skils";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string; CatId: string } }
) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, items } = body;

    const updatedSection = await SkillSectionModel.findOneAndUpdate(
      { _id: params.id },
      {
        $set: {
          "categories.$[elem].title": title,
          "categories.$[elem].items": items,
        },
      },
      {
        new: true,
        arrayFilters: [{ "elem._id": params.CatId }],
      }
    );

    if (!updatedSection) {
      return NextResponse.json({ error: "Catégorie ou section introuvable" }, { status: 404 });
    }

    return NextResponse.json(updatedSection);
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
// src/app/api/skills/[idSection]/category/[idCategory]/route.ts

export async function GET(
  req: NextRequest,
  { params }: { params: { idSection: string; idCategory: string } }
) {
  try {
    await connectDB();

    // Récupérer la section et la catégorie par leurs IDs
    const section = await SkillSectionModel.findOne(
      {
        _id: params.idSection,
        "categories._id": params.idCategory,
      },
      { "categories.$": 1 } // On récupère seulement la catégorie correspondante
    );

    if (!section) {
      return NextResponse.json(
        { error: "Section ou catégorie introuvable" },
        { status: 404 }
      );
    }

    // Renvoi de la catégorie trouvée
    return NextResponse.json(section.categories[0], { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération de la catégorie :", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

