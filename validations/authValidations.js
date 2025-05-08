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


export const signinSchema = vine.object({
    email: vine.string().email().trim().toLowerCase().required(),
    password: vine.string().minLength(6).maxLength(50).required(),
});
export const logoutScheama = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutpostSchemaScheama = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});


export const logoutpostSchemaScheamas = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutpostSchemaScheamaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutpostSchemaScheamaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutpostsSchemaScheamaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutpostsSchemaSscheamaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutpostsSchemaSscheamaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});


export const logoutpostsSchemaSsacheamaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutpostsSchemaSsacheamaaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});
export const logoutpostsSchemaSsacheamaaaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});
export const logoutposttsSchemaSsacheamaaaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutposttsSchemaSsacheamaaaaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});
export const logoutposttsSchemaSsacheamaaaaaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});

export const logoutposttsSchemaSsacheamaaaaaaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});


export const logoutposttsSchemaSsacheamaaaaaaaaaa = vine.object({
  email: vine.string().email().trim().toLowerCase().required(),
  password: vine.string().minLength(6).maxLength(50).required(),
});



ashfhjkasffjsldjghsjkh




ashfhjkasffjsldj

mfksdf

kdasdncnkls