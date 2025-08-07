// types/skill.ts

export interface SkillItem {
    title: string;
    image: string;
  }
  
export interface SkillCategory {
    title: string;
    items: SkillItem[];
  }
  
export interface SkillSection {
    title: string;
    description: string;
    categories: SkillCategory[];
  }
  