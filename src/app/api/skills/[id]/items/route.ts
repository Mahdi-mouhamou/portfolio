import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SkillSectionModel from "@/models/Skils";

// src/app/api/skills/[id]/categories/items/route.ts

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const body = await req.json();
    const { categoryTitle, item } = body;

    // Ajoute un item dans la bonne catégorie
    const updatedSection = await SkillSectionModel.findOneAndUpdate(
      {
        _id: params.id,
        "categories.title": categoryTitle, // On trouve la bonne catégorie
      },
      {
        $push: {
          "categories.$.items": item, // On ajoute l'item dans le tableau items
        },
      },
      { new: true }
    );

    if (!updatedSection) {
      return NextResponse.json(
        { error: "Section ou catégorie non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedSection, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'item :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await req.json();
    const { categoryTitle, itemId, updatedItem } = body;

    // Mise à jour d’un item dans une catégorie spécifique
    const updatedSection = await SkillSectionModel.findOneAndUpdate(
      {
        _id: params.id,
        "categories.title": categoryTitle,
      },
      {
        $set: {
          "categories.$.items.$[item].title": updatedItem.title,
          "categories.$.items.$[item].image": updatedItem.image,
        },
      },
      {
        arrayFilters: [{ "item._id": itemId }],
        new: true,
      }
    );

    if (!updatedSection) {
      return NextResponse.json(
        { error: "Section ou catégorie non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedSection, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'item :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const categoryTitle = searchParams.get("categoryTitle");
    const itemId = searchParams.get("itemId");

    if (!categoryTitle || !itemId) {
      return NextResponse.json(
        { error: "Paramètres manquants (categoryTitle ou itemId)" },
        { status: 400 }
      );
    }

    const updatedSection = await SkillSectionModel.findOneAndUpdate(
      {
        _id: params.id,
        "categories.title": categoryTitle,
      },
      {
        $pull: {
          "categories.$.items": { _id: itemId },
        },
      },
      { new: true }
    );

    if (!updatedSection) {
      return NextResponse.json(
        { error: "Section ou catégorie non trouvée" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedSection, { status: 200 });
  } catch (error) {
    console.error("Erreur DELETE item :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
