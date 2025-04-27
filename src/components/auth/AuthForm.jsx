import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Entrar na sua conta' : 'Criar uma nova conta'}
          </h2>
        </div>

        {!isLogin && (
          <div className="mt-8">
            <Stepper activeStep={0} alternativeLabel>
              <Step>
                <StepLabel>Dados Pessoais</StepLabel>
              </Step>
              <Step>
                <StepLabel>Endereço</StepLabel>
              </Step>
              <Step>
                <StepLabel>Credenciais</StepLabel>
              </Step>
            </Stepper>
          </div>
        )}

        {isLogin ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-500"
          >
            {isLogin
              ? 'Não tem uma conta? Cadastre-se'
              : 'Já tem uma conta? Faça login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm; 