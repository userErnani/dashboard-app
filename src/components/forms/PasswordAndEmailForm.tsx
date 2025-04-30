import React from 'react';

import Input from '../ui/Input';
import { useForm } from 'react-hook-form';

interface PasswordAndEmailFormProps {}

export const PasswordAndEmailForm: React.FC<
  PasswordAndEmailFormProps
> = ({}: PasswordAndEmailFormProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="space-y-6">
      <div>
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          registration={register('email', {
            required: 'Email é obrigatório',
          })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Senha"
          id="password"
          type="password"
          placeholder="Senha"
          className="border p-2 rounded w-full"
          registration={register('password', {
            required: 'Senha é obrigatória',
          })}
        />
        <Input
          label="Confirmar Senha"
          id="confirmPassword"
          type="password"
          placeholder="Confirmar Senha"
          className="border p-2 rounded w-full"
          registration={register('confirmPassword', {
            required: 'Confirmação de senha é obrigatória',
          })}
        />
      </div>
    </form>
  );
};
