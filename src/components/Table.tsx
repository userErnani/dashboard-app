// components/CustomerTable.tsx

import { useState } from 'react';

const customers = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  // ...adicione mais dados conforme necessário
];

const CustomerTable = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="shadow-2xl rounded-2xl p-6 w-full max-w-7xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-black">All Customers</h2>
          <p className="text-sm text-emerald-500">Active Members</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              className="bg-[#F9FBFF] rounded-lg px-10 py-2 text-sm border border-gray-200"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          <select className="bg-[#F9FBFF] rounded-lg px-4 py-2 text-sm border border-gray-200">
            <option>Sort by: Newest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      <table className="w-full table-auto text-left text-sm">
        <thead>
          <tr className="text-gray-400 border-b border-gray-200">
            <th className="pb-3">Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers
            .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
            .map((customer, i) => (
              <tr key={i} className="border-b border-gray-100">
                <td className="py-4 text-gray-800">{customer.name}</td>
                <td>{customer.company}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>{customer.country}</td>
                <td>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-md border ${
                      customer.status === 'Active'
                        ? 'text-green-700 bg-green-100 border-green-400'
                        : 'text-red-600 bg-red-100 border-red-400'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
        <span>Showing data 1 to 8 of 256K entries</span>
        <div className="flex space-x-1">
          <button className="px-2 py-1 rounded border border-gray-200">&lt;</button>
          {[1, 2, 3, 4, '...', 40].map((p, i) => (
            <button
              key={i}
              className={`px-2 py-1 rounded border ${
                p === 1 ? 'bg-purple-600 text-white border-purple-600' : 'border-gray-200'
              }`}
            >
              {p}
            </button>
          ))}
          <button className="px-2 py-1 rounded border border-gray-200">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
