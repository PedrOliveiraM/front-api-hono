"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { userFormSchema } from "./userSchem"

export function UserForm() {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  })

  function onSubmit(values: z.infer<typeof userFormSchema>) {
    console.log(values)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulário de cadastro</CardTitle>
        <CardDescription>Cadastre um novo colaborador</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>Este é o seu nome público exibido.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormDescription>Nunca compartilharemos seu email com ninguém.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Insira sua senha" {...field} />
                  </FormControl>
                  <FormDescription>Sua senha deve ter pelo menos 6 caracteres.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirmar senha" {...field} />
                  </FormControl>
                  <FormDescription>Por favor, insira sua senha novamente para confirmar.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className="w-full flex justify-between">
              <Button type="reset" variant={"outline"} onClick={() => form.reset()}>Limpar</Button>
              <Button type="submit">Salvar</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
