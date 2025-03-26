"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UserService } from "@/services/UserService"
import { pageTypes } from "@/utils/pageTypes"
import { usePageType } from "@/utils/usePageType"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams } from "@tanstack/react-router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { userAddSchema, userEditSchema } from "./userSchema"

export function UserForm() {
  const { id } = useParams({ strict: false })

  const [typeForm] = useState(pageTypes[usePageType()]);
  const isCadastro = typeForm === "Cadastro";

  type CurrentFormType = z.infer<typeof userAddSchema> | z.infer<typeof userEditSchema>;
  const currentSchema: z.ZodType<CurrentFormType> = isCadastro ? userAddSchema : userEditSchema;

  const form = useForm<CurrentFormType>({
    resolver: zodResolver(currentSchema),
  });


  function onSubmit(values: CurrentFormType) {
    console.log(values);

    const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

    toast.promise(promise, {
      loading: 'Carregando...',
      success: () => {
        return `Usuário foi salvo com sucesso`;
      },
      error: 'Não foi possível salvar o usuário',
    });
  }

  return (
    <Card>
      <CardHeader>
        <h1>Esse é o id: {id}</h1>
        <CardTitle>Formulário de {typeForm}</CardTitle>
        <CardDescription>{typeForm} de colaborador</CardDescription>
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
              name={isCadastro ? "passwordConfirmation" : "newPassword"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isCadastro ? "Confirmar Senha" : "Nova Senha"}</FormLabel>
                  <FormControl>
                    <Input type="password"
                      placeholder={isCadastro ? "Confirmar Senha" : "insira sua nova Senha"} {...field} />
                  </FormControl>
                  <FormDescription>Por favor, insira sua senha  para confirmar.</FormDescription>
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
