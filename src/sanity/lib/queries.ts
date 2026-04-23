import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  title,
  category,
  displayCategory,
  "image": image.asset->url,
  aspect,
  line,
  type,
  "pdfUrl": pdfFile.asset->url,
  liveUrl,
  caseStudyUrl,
  tools,
  bgColor,
  featured
}`
