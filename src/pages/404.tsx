import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <Image src="/images/logo.png" alt="Logo" width={200} height={100} />

      <Image
        src="/images/404-illustration.png"
        alt="Página não encontrada"
        width={300}
        height={200}
        className="mb-8"
      />

      <h1 className="text-3xl font-bold mb-2 text-gray-800">Página não encontrada</h1>
      <p className="text-gray-500 mb-6">
        Ops! A página que você está procurando não existe ou foi movida.
      </p>

      <Link
        href="/"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-hover transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
