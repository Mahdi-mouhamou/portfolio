export interface Project {
  title: string;
  description: string;
  item: string [];
  date: string;
  src: string;
}

export interface SectionProject{
  title:string;
  description:string;
  project:Project[];
}