import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SectionProject from "@/models/Project";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { sectionId: string; projectId: string } }
) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, description, date, src, item } = body;

    const updatedSection = await SectionProject.findOneAndUpdate(
      { _id: params.sectionId },
      {
        $set: {
          "project.$[elem].title": title,
          "project.$[elem].description": description,
          "project.$[elem].date": date,
          "project.$[elem].src": src,
          "project.$[elem].item": item,
        },
      },
      {
        new: true,
        arrayFilters: [{ "elem._id": params.projectId }],
      }
    );

    if (!updatedSection) {
      return NextResponse.json({ error: "Projet ou section introuvable" }, { status: 404 });
    }

    return NextResponse.json(updatedSection);
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
