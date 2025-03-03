import vine from "@vinejs/vine";

export const registerSchema = vine.object({
  name: vine.string().minLength(2).maxLength(191).required(),
  email: vine
    .string()
    .email()
    .maxLength(191)
    .required(),
  password: vine.string().minLength(6).maxLength(128).required(),
  profile: vine.string().optional(),
  created_at: vine.date().default(() => new Date()).optional(),
  updated_at: vine.date().default(() => new Date()).optional(),
});
git fetch 