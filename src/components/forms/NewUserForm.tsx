import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Input from '../ui/Input';
import { CreateUserSchema } from '../../schemas/createUserSchema';

export interface NewUserFormProps {
  register: UseFormRegister<CreateUserSchema>;
  error?: FieldErrors<CreateUserSchema>;
}

export function NewUserForm({ register, error }: NewUserFormProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-5">
        <Input
          label="Codigo"
          id="code"
          type="text"
          placeholder="Código"
          className="border p-2 rounded w-full"
          registration={register('code')}
          error={error?.code}
        />

        <Input
          label="Nome"
          id="name"
          type="text"
          placeholder="Nome"
          className="border p-2 rounded w-full"
          registration={register('name')}
          error={error?.name}
        />
      </div>

      <Input
        label="Apelido"
        id="nickname"
        type="text"
        placeholder="Apelido"
        className="border p-2 rounded w-10"
        registration={register('nickname')}
        error={error?.nickname}
      />
    </div>
  );
}
