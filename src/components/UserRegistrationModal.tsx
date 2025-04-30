import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { StepTabs } from './ui/StepTabs';
import { NewUserForm } from './forms/NewUserForm';
import { PasswordAndEmailForm } from './forms/PasswordAndEmailForm';
import { PermissionMatrix } from './PermissionMatrix';

interface UserRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEP_TITLES = ['Informações Pessoais', 'Email/Senha', 'Permissões'];

export const UserRegistrationModal: React.FC<UserRegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleCancelForm = () => {
    onClose();
    setCurrentStep(0);
  };

  const handleSaveForm = (data: any) => {
    console.log('Dados do formulário:', data);
    onClose();
    setCurrentStep(0);
  };

  const handleNextStep = () => {
    if (currentStep < STEP_TITLES.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log('Salvar (última etapa)');
      onClose();
      setCurrentStep(0);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const [permissions, setPermissions] = useState<
    Record<string, Record<'create' | 'read' | 'update' | 'delete', boolean>>
  >({});

  const handlePermissionChange = (section: string, action: string, checked: boolean) => {
    setPermissions((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [action]: checked,
      },
    }));
  };

  const renderStepForm = () => {
    switch (currentStep) {
      case 0:
        return <NewUserForm onCancel={handleCancelForm} onSave={handleSaveForm} />;
      case 1:
        return <PasswordAndEmailForm />;
      case 2:
        return <PermissionMatrix value={permissions} onChange={handlePermissionChange} />;
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Cadastro de usuário / ${STEP_TITLES[currentStep]}`}
    >
      <div className="p-6">
        <StepTabs steps={STEP_TITLES} currentStep={currentStep} onChange={setCurrentStep} />

        <h2 className="text-xl font-bold text-gray-800 mt-5 mb-2">{STEP_TITLES[currentStep]}</h2>

        <hr className="border-gray-300 mb-5" />

        {renderStepForm()}

        <div className="flex items-center justify-between mt-6">
          <Button
            type="button"
            className="bg-red-400 text-white px-4 py-2 rounded"
            onClick={handleCancelForm}
          >
            Cancelar
          </Button>

          <div className="flex gap-4">
            {currentStep > 0 && (
              <Button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={handlePreviousStep}
              >
                Voltar
              </Button>
            )}

            <Button
              type="button"
              className="bg-primary text-white px-4 py-2 rounded"
              onClick={handleNextStep}
            >
              {currentStep === STEP_TITLES.length - 1 ? 'Salvar' : 'Próximo'}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
