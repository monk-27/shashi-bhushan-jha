export const postType = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Shashi Bhushan Jha',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 15,
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
    },
  ],
};
