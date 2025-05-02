/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import Input from '../ui/Input';
import { CreateUserSchema } from '../../schemas/createUserSchema';

interface PasswordAndEmailFormProps {
  register: UseFormRegister<any>;
  error?: FieldErrors<CreateUserSchema>;
}

export const PasswordAndEmailForm: React.FC<PasswordAndEmailFormProps> = ({
  register,
}: PasswordAndEmailFormProps) => {
  return (
    <>
      <div className="">
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full mb-4"
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
    </>
  );
};
