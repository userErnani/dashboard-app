import React from 'react';

type PermissionType = 'create' | 'read' | 'update' | 'delete';

interface Permission {
  label: string;
  description: string;
  key: string;
}

interface PermissionMatrixProps {
  value: Record<string, Record<PermissionType, boolean>>;
  onChange: (section: string, action: PermissionType, checked: boolean) => void;
}

const permissions: Permission[] = [
  {
    key: 'clientes',
    label: 'Clientes',
    description: 'Cliente pode atualizar planilhas.',
  },
  {
    key: 'transportadoras',
    label: 'Transportadoras',
    description: 'Transportadoras com prazo de 20 dias de entrega.',
  },
  {
    key: 'vendedores',
    label: 'Vendedores',
    description: 'Vendedor atualizado na base de cadastro.',
  },
  {
    key: 'fornecedores',
    label: 'Fornecedores',
    description: 'Fornecedor de rolos de papel.',
  },
];

const actions: { label: string; key: PermissionType }[] = [
  { key: 'create', label: 'Cadastrar' },
  { key: 'read', label: 'Exibir' },
  { key: 'update', label: 'Atualizar' },
  { key: 'delete', label: 'Deletar' },
];

export const PermissionMatrix: React.FC<PermissionMatrixProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {permissions.map((perm) => (
          <div key={perm.key} className="flex items-start gap-4 flex-wrap">
            <div className="w-[160px] shrink-0 font-semibold">{perm.label}</div>

            <div className="flex gap-4 shrink-0">
              {actions.map((action) => (
                <label key={action.key} className="flex items-center gap-2 w-[120px]">
                  <input
                    type="checkbox"
                    checked={value?.[perm.key]?.[action.key] || false}
                    onChange={(e) => onChange(perm.key, action.key, e.target.checked)}
                  />
                  <span>{action.label}</span>
                </label>
              ))}
            </div>

            <div className="flex-1 text-sm text-gray-500 break-words">{perm.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
