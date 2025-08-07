// src/app/api/skills/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SectionProject from "@/models/Project";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, description, date, src, item } = body;

    const AddProject = await SectionProject.findOneAndUpdate(
      { _id: params.id },
      {
        $push: {
          project: {
            title,
            description,
            date,
            src,
            item,
          },
        },
      },
      { new: true }
    );

    return NextResponse.json(AddProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}
