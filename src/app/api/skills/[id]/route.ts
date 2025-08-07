// src/app/api/skills/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SkillSectionModel from "@/models/Skils";

  export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
      await connectDB();
      const body = await req.json();
      const { title, description } = body;
  
      const updatedSkill = await SkillSectionModel.findOneAndUpdate(
        { _id: params.id},
        {
          $set: {
            "title": title,
            "description": description,
          },
        },
        { new: true }
      );
  
      return NextResponse.json(updatedSkill);
    } catch (error) {
      return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 });
    }
  }