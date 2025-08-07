    // src/app/api/skills/route.ts
    import { NextRequest, NextResponse } from "next/server";
    import { connectDB } from "@/lib/mongodb";
    import SectionProject from "@/models/Project";

    export async function PATCH(req: Request, { params }: { params: { id: string } }) {
        try {
        await connectDB();
        const body = await req.json();
        const { title, description} = body;
    
        const updatedProject = await SectionProject.findOneAndUpdate(
            { _id: params.id},
            {
            $set: {
                "title":title,
                "description":description,
            },
            },
            { new: true }
        );
    
        return NextResponse.json(updatedProject);
        } catch (error) {
        return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 });
        }
    }