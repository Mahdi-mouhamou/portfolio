import mongoose, { Schema } from "mongoose";
import { Project, SectionProject } from "@/types/Project";

const ProjectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date:{type:String , required:true},
  item:{type:[String],required:true},
  src: { type: String ,required:true },
  
});

const SectionProjectSchema= new Schema<SectionProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  project:{type:[ProjectSchema]}
});

export default mongoose.models.SectionProject || mongoose.model<SectionProject>("SectionProject", SectionProjectSchema);
