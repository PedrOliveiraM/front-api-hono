import { z } from "zod";

const baseUserSchema = z.object({
  name: z.string({ message: "O campo é obrigatório" }).min(5, {
    message: "O nome de usuário deve ter pelo menos 5 caracteres.",
  }).trim(),
  email: z.string({ message: "O campo é obrigatório" }).email({
    message: "Por favor, insira um e-mail válido.",
  }).trim(),
  password: z.string({ message: "O campo é obrigatório" }).min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }).trim(),
  passwordConfirmation: z.string({ message: "O campo é obrigatório" }).min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }).trim(),
});

export const userAddSchema = baseUserSchema.refine(
  (data) => data.password === data.passwordConfirmation,
  {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  }
);

export const userEditSchema = baseUserSchema
  .omit({ passwordConfirmation: true })
  .extend({
    newPassword: z.string().min(6, {
      message: "A nova senha deve ter pelo menos 6 caracteres.",
    }).trim().optional(),
  })
  .partial();

export type UserAddForm = z.infer<typeof userAddSchema>;
export type UserEditForm = z.infer<typeof userEditSchema>;
