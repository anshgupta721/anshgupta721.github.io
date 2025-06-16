import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: z.object({
		inProgress: z.boolean(),
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		img_alt: z.string().optional(),
	}),
});

const blogsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()).optional(),
		draft: z.boolean().optional(),
		img_alt: z.string().optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
	blogs: blogsCollection,
};