// src/models/Skill.ts
import mongoose, { Schema } from 'mongoose';
import { SkillSection, SkillCategory, SkillItem } from '@/types/Skils';

// Définir le schéma pour un item de compétence
const SkillItemSchema = new Schema<SkillItem>({
  title: { type: String, required: true },
  image: { type: String, required: true },
});

// Définir le schéma pour une catégorie de compétence
const SkillCategorySchema = new Schema<SkillCategory>({
  title: { type: String, required: true },
  items: { type: [SkillItemSchema], required: true },
});

// Définir le schéma pour la section des compétences
const SkillSectionSchema = new Schema<SkillSection>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  categories: { type: [SkillCategorySchema], required: true },
});

// Créer et exporter le modèle
const SkillSectionModel = mongoose.models.SkillSection || mongoose.model<SkillSection>('SkillSection', SkillSectionSchema);

export default SkillSectionModel;
