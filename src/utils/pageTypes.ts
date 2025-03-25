export const pageTypes = {
  update: "Alteração",
  create: "Cadastro",
  unknown: "Desconhecido",
} as const;

export type PageType = keyof typeof pageTypes;
