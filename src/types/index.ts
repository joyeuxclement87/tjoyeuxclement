export interface Project {
  title: string;
  category?: string;
  displayCategory?: string;
  image: string;
  aspect?: string;
  line: string;
  type?: 'web' | 'pdf' | 'image' | 'branding' | 'poster' | 'logo' | string;
  liveUrl?: string;
  caseStudyUrl?: string;
  tools?: string[];
  bgColor?: string;
  pdfUrl?: string;
  featured?: boolean;
}
