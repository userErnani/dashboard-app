import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const createUserSchema = z
  .object({
    code: z.string().min(1, 'Código é obrigatório'),
    name: z.string().min(1, 'Nome é obrigatório'),
    nickname: z.string().min(1, 'Apelido é obrigatório'),
    email: z.string().email('Email inválido').min(1, 'Email é obrigatório'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string().min(6, 'Confirmação de senha é obrigatória'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'], // Mostra o erro no campo "confirmPassword"
  });

export type CreateUserSchema = z.infer<typeof createUserSchema>;

export const createUserSchemaResolver = zodResolver(createUserSchema);
