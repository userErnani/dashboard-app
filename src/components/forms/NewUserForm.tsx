import { useForm } from 'react-hook-form';
import Input from '../ui/Input';

export interface NewUserFormProps {
  onCancel: () => void;
  onSave: (data: { name: string; email: string }) => void;
}

export function NewUserForm({ onCancel, onSave }: NewUserFormProps) {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div className="flex items-center justify-between gap-5">
        <Input
          label="Codigo"
          id="code"
          type="text"
          placeholder="Código"
          className="border p-2 rounded w-full"
          registration={register('code', { required: 'Código é obrigatório' })}
        />

        <Input
          label="Nome"
          id="name"
          type="text"
          placeholder="Nome"
          className="border p-2 rounded w-full"
          registration={register('name', { required: 'Nome é obrigatório' })}
        />
      </div>

      <Input
        label="Apelido"
        id="nickname"
        type="text"
        placeholder="Apelido"
        className="border p-2 rounded w-10"
        registration={register('nickname', { required: 'Apelido é obrigatório' })}
      />
    </form>
  );
}
