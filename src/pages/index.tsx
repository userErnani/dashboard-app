import CustomerTable from '@/components/Table';

export default function Home() {
  return (
    <main className="w-full h-screen bg-gray-100 p-10">
      <div className="flex items-center justify-between mb-6">
        <CustomerTable />
      </div>
    </main>
  );
}
