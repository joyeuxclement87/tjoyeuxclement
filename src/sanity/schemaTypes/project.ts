import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category (for filtering)',
      type: 'string',
      options: {
        list: [
          { title: 'Branding', value: 'Branding' },
          { title: 'Posters', value: 'Posters' },
          { title: 'Print (PDF)', value: 'Print (PDF)' },
          { title: 'Web Projects', value: 'Web Projects' },
          { title: 'Logos', value: 'Logos' },
        ],
      },
    }),
    defineField({
      name: 'displayCategory',
      title: 'Display Category (Text shown on card)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aspect',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: 'Standard (4:3)', value: 'aspect-[4/3]' },
          { title: 'Tall (3:4)', value: 'aspect-[3/4]' },
          { title: 'Square (1:1)', value: 'aspect-[1/1]' },
          { title: 'Widescreen (16:9)', value: 'aspect-[16/9]' },
          { title: 'Portrait (4:5)', value: 'aspect-[4/5]' },
        ],
      },
    }),
    defineField({
      name: 'line',
      title: 'Description Line',
      type: 'text',
    }),
    defineField({
      name: 'type',
      title: 'Project Modal Layout Type',
      type: 'string',
      options: {
        list: [
          { title: 'Branding', value: 'branding' },
          { title: 'Poster', value: 'poster' },
          { title: 'Web', value: 'web' },
          { title: 'Logo', value: 'logo' },
          { title: 'PDF', value: 'pdf' },
        ],
      },
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File (If type is PDF)',
      type: 'file',
      hidden: ({ parent }) => parent?.type !== 'pdf',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL (If type is Web)',
      type: 'url',
      hidden: ({ parent }) => parent?.type !== 'web',
    }),
    defineField({
      name: 'caseStudyUrl',
      title: 'Case Study URL (If type is Web)',
      type: 'url',
      hidden: ({ parent }) => parent?.type !== 'web',
    }),
    defineField({
      name: 'tools',
      title: 'Tools Used (If type is Web)',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => parent?.type !== 'web',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color override (e.g. bg-[#f0ede5] for logos)',
      type: 'string',
      hidden: ({ parent }) => parent?.type !== 'logo',
    }),
  ],
});
