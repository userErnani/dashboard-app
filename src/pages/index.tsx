'use client';

import { useForm } from 'react-hook-form';
import { SearchUserSchema, searchUserSchemaResolver } from '@/schemas/searchUserSchema';

import Button from '@/components/ui/Button';
import Table, { Column } from '@/components/ui/Table';
import { useEffect, useState } from 'react';
import { UserSearchForm } from '../components/forms/UserSearchForm';
import { PageHeader } from '../components/PageHeader';
import { UserRegistrationModal } from '../components/UserRegistrationModal';

interface Customer {
  code: string;
  name: string;
  nickname: string;
  email: string;
  status: 'Active' | 'Inactive'; // ou apenas string, se for mais genérico
}

const columns: Column<Customer & { actions?: unknown }>[] = [
  { label: 'Código', accessor: 'code' },
  { label: 'Nome', accessor: 'name' },
  { label: 'Apelido', accessor: 'nickname' },
  { label: 'Email', accessor: 'email' },
  {
    label: 'Status',
    accessor: 'status',
    render: (value: string) => (
      <span
        className={`px-3 py-1 text-xs font-medium rounded-md border ${
          value === 'Active'
            ? 'text-green-700 bg-green-100 border-green-400'
            : 'text-red-600 bg-red-100 border-red-400'
        }`}
      >
        {value}
      </span>
    ),
  },
];

export default function Home() {
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [users, setUsers] = useState<Customer[]>([]);

  const fetchUsers = async () => {
  try {
    const res = await fetch('http://localhost:3001/user'); // ajuste porta e URL conforme seu backend
    const data = await res.json();
    setUsers(data);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
};

useEffect(() => {
  fetchUsers();
}, []);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchUserSchema>({
    resolver: searchUserSchemaResolver,
  });

  const onSubmit = (data: SearchUserSchema) => {
    console.log(data);
  };

  useEffect(() => {}, [page]);

  return (
    <main className="min-h-screen flex flex-col items-center py-10">
      <div className="w-full max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 bg-white shadow-2xl rounded-2xl p-6">
          <PageHeader title="Usuários" subtitle="Todos os usuários cadastrados" />

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto items-end">
            <UserSearchForm onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} />
            <Button
              type="button"
              className="h-11 bg-primary text-white font-bold hover:bg-primary-hover transition-colors px-6 rounded-md"
              onClick={() => setIsModalOpen(true)}
            >
              Novo Usuário
            </Button>
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl p-6 mt-10">
          <Table
            columns={columns}
            data={users}
            page={page}
            pageSize={5}
            total={users.length}
            onPageChange={(newPage) => setPage(newPage)}
            hasViewer
            hasEdit
            hasDeleted
          />
        </div>
      </div>

      <UserRegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
