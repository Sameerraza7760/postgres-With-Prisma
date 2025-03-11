import vine from "@vinejs/vine";

export const postSchema = vine.object({
    title: vine.string().minLength(3).maxLength(100).trim().required(),
    content: vine.string().minLength(10).required(),
    imageUrl: vine.string().url().optional(),
    userId: vine.string().uuid().required(), // Assuming UUID for user reference
});


export const postDetail = vine.object({
    title: vine.string().minLength(3).maxLength(100).trim().required(),
    content: vine.string().minLength(10).required(),
    imageUrl: vine.string().url().optional(),
    userId: vine.string().uuid().required(), // Assuming UUID for user reference
});


export const postDetailf= vine.object({
    title: vine.string().minLength(3).maxLength(100).trim().required(),
    content: vine.string().minLength(10).required(),
    imageUrl: vine.string().url().optional(),
    userId: vine.string().uuid().required(), // Assuming UUID for user reference
});

