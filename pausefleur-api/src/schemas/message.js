import joi from "@hapi/joi";

export const message = joi.object().keys({
  message: joi.string().required(),
  name: joi
    .string()
    .optional()
    .allow("")
});
