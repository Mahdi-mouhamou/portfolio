import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SkillSectionModel from "@/models/Skils";

export async function POST(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        const body = await req.json();
        const { title, items } = body;

        // Vérifier si une catégorie avec le même titre existe déjà
        const existingSection = await SkillSectionModel.findOne({
            _id: params.id,
            "categories.title": title,
        });

        if (existingSection) {
            return NextResponse.json(
                { error: "La catégorie existe déjà" },
                { status: 400 }
            );
        }

        // Ajouter la nouvelle catégorie
        const updatedSection = await SkillSectionModel.findByIdAndUpdate(
            params.id,
            {
                $push: {
                    categories: {
                        title,
                        items,
                    },
                },
            },
            { new: true }
        );

        if (!updatedSection) {
            return NextResponse.json(
                { error: "Section non trouvée" },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedSection, { status: 201 });
    } catch (error) {
        console.error("Erreur lors de l'ajout de la catégorie :", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

// DELETE /api/skills/:id/categories?title=Frontend
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();

        // Récupérer le titre depuis l’URL
        const { searchParams } = new URL(req.url);
        const title = searchParams.get("title");

        if (!title) {
            return NextResponse.json(
                { error: "Titre de la catégorie requis" },
                { status: 400 }
            );
        }

        const updatedSection = await SkillSectionModel.findByIdAndUpdate(
            params.id,
            {
                $pull: {
                    categories: { title },
                },
            },
            { new: true }
        );

        if (!updatedSection) {
            return NextResponse.json(
                { error: "Section non trouvée" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Catégorie supprimée avec succès", updatedSection },
            { status: 200 }
        );
    } catch (error) {
        console.error("Erreur lors de la suppression de la catégorie :", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}
