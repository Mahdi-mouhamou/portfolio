import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SectionProject from "@/models/Project";

export async function GET() {
  try {
    await connectDB();
    const projects = await SectionProject.find();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Erreur lors de la récupération de projects :", error);
    return NextResponse.json(
      { error: "Erreur de récupération de projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const newProject = new SectionProject(body);
    await newProject.save();

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la récupération de projects :", error);
    return NextResponse.json(
      { error: "Erreur de récupération de projects" },
      { status: 500 }
    );
  }
}
