import { z } from "zod"

export const userFormSchema = z.object({
  name: z.string().min(5, {
    message: "O nome de usuário deve ter pelo menos 5 caracteres.",
  }).trim(),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }).trim(),
  password: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }).trim(),
  passwordConfirmation: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }).trim()
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "As senhas não coincidem",
  path: ["passwordConfirmation"],
})

export type UserForm = z.infer<typeof userFormSchema>
