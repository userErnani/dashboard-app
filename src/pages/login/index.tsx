import Image from 'next/image';
import { useRouter } from 'next/router';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { LoginSchema, loginSchemaResolver } from '../../schemas/loginSchema';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: loginSchemaResolver,
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    router.push('/dashboard');
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 h-screen flex items-center justify-center p-20">
        <div>
          <h2 className="text-md font-bold">Welcome to</h2>
          <Image src="/images/logo.png" alt="Logo" width={300} height={300} />
          <p className="text-xs mb-4 text-gray">
            Que bom ter você de volta! É um novo dia para gerenciar seus projetos. Faça login e
            comece agora mesmo.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="email"
              label="Email"
              type="email"
              registration={register('email', { required: 'Email é obrigatório' })}
              error={errors.email}
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              registration={register('password', { required: 'Senha é obrigatória' })}
              error={errors.password}
            />
            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </div>

      <div className="w-1/2  h-screen relative">
        <Image src="/images/back-login.png" alt="Login background" fill />
      </div>
    </div>
  );
}
