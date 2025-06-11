import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { SearchUserSchema } from '../../schemas/searchUserSchema';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface UserSearchFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<SearchUserSchema>;
  errors: FieldErrors<SearchUserSchema>;
}

export function UserSearchForm({ onSubmit, register, errors }: UserSearchFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-end"
    >
      <Input
        label="Pesquisar"
        type="text"
        id="query"
        registration={register('query')}
        placeholder="Cliente, fornecedor ou transportadora"
        className="w-full md:w-80"
        error={errors.query}
      />
      <Button
        type="submit"
        className="h-11 border border-gray-400 bg-transparent text-gray-700 hover:bg-gray-200 transition-colors px-6 rounded-md"
      >
        Filtrar
      </Button>
    </form>
  );
}
