import zod from 'zod';

export const CreateQuestionSchema = zod.object({
    title: zod.string().min(10).max(200),
    body: zod.string().min(10),
});

export type CreateQuestionSchema = zod.infer<typeof CreateQuestionSchema>;

export const CreateQuestionShape = {
    title: 'title',
    body: 'body',
} as const satisfies CreateQuestionSchema;

export type CreateQuestionShapeKeys = keyof typeof CreateQuestionShape;
