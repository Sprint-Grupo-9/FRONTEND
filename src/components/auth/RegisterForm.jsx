import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaKey, FaIdCard, FaPhone, FaEnvelope, FaLock, FaHome, FaBuilding, FaHashtag } from 'react-icons/fa';
import Swal from 'sweetalert2';
import api from '../../services/api';
import './authStyles.css';
import * as Yup from 'yup';

// Esquemas de validação
const validationSchemas = [
  Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    cpf: Yup.string().required('CPF é obrigatório'),
    phoneNumber: Yup.string().required('Telefone é obrigatório'),
  }),
  Yup.object().shape({
    cep: Yup.string().required('CEP é obrigatório'),
    street: Yup.string().required('Logradouro é obrigatório'),
    neighborhood: Yup.string().required('Bairro é obrigatório'),
    number: Yup.string().required('Número é obrigatório'),
  }),
  Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  })
];

const RegisterForm = () => {
  const [step, setStep] = useState(0); // Inicialmente no primeiro passo
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    phoneNumber: '',
    email: '',
    password: '',
    cep: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAddress(cep) {
      if (cep.length !== 8) return;
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            street: data.logradouro,
            neighborhood: data.bairro,
          }));
        } else {
          setError('CEP não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        setError('CEP não encontrado');
      }
    }

    fetchAddress(formData.cep);
  }, [formData.cep]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = async () => {
    const schema = validationSchemas[step];
    try {
      await schema.validate(formData, { abortEarly: false });
      setError('');
      setStep(prevStep => prevStep + 1); // Avança para o próximo passo
    } catch (validationError) {
      setError(validationError.inner.map(err => err.message).join('\n'));
      Swal.fire({
        icon: 'error',
        title: 'Campos inválidos',
        text: validationError.inner.map(err => err.message).join('\n'),
        confirmButtonColor: '#E52472'
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const schema = validationSchemas[step];
    try {
      await schema.validate(formData, { abortEarly: false });

      const dataToSend = {
        ...formData,
        cpf: formData.cpf.replace(/\D/g, ''),
        phoneNumber: formData.phoneNumber.replace(/\D/g, ''),
        cep: formData.cep.replace(/\D/g, '')
      };

      const response = await api.post('/owners', dataToSend);
      console.log('Resposta do servidor:', response.data);

      const loginResponse = await api.post('/owners/login', {
        email: dataToSend.email,
        password: dataToSend.password
      });

      if (loginResponse.data && loginResponse.data.token) {
        localStorage.setItem('token', loginResponse.data.token);
        Swal.fire({
          icon: 'success',
          title: 'Cadastro realizado com sucesso!',
          text: 'Você será redirecionado para a página inicial.',
          confirmButtonColor: '#E52472',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          navigate('/index');
        });
      } else {
        throw new Error('Token não recebido');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Erro ao realizar cadastro. Tente novamente.';
      Swal.fire({
        icon: 'error',
        title: 'Erro no cadastro',
        text: errorMessage,
        confirmButtonColor: '#E52472'
      });
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="auth-step">
            <h3 className="auth-step-title">Dados Pessoais</h3>
            <div className="auth-input-group">
              <label htmlFor="name" className="auth-label">Nome Completo</label>
              <div className="auth-input-wrapper">
                <FaUser className="auth-input-icon" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="auth-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu Nome"
                />
              </div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="cpf" className="auth-label">CPF</label>
              <div className="auth-input-wrapper">
                <FaIdCard className="auth-input-icon" />
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  className="auth-input"
                  value={formData.cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')}
                  onChange={(e) => handleChange({ target: { name: 'cpf', value: e.target.value.replace(/\D/g, '') } })}
                  placeholder="000.000.000-00"
                />
              </div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="phoneNumber" className="auth-label">Telefone</label>
              <div className="auth-input-wrapper">
                <FaPhone className="auth-input-icon" />
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  className="auth-input"
                  value={formData.phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')}
                  onChange={(e) => handleChange({ target: { name: 'phoneNumber', value: e.target.value.replace(/\D/g, '') } })}
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="auth-step">
            <h3 className="auth-step-title">Endereço</h3>
            <div className="auth-input-group">
              <label htmlFor="cep" className="auth-label">CEP</label>
              <div className="auth-input-wrapper">
                <FaMapMarkerAlt className="auth-input-icon" />
                <input
                  id="cep"
                  name="cep"
                  type="text"
                  className="auth-input"
                  value={formData.cep.replace(/^(\d{5})(\d{3})$/, '$1-$2')}
                  onChange={(e) => handleChange({ target: { name: 'cep', value: e.target.value.replace(/\D/g, '') } })}
                  placeholder="00000-000"
                />
              </div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="street" className="auth-label">Logradouro</label>
              <div className="auth-input-wrapper">
                <FaHome className="auth-input-icon" />
                <input
                  id="street"
                  name="street"
                  type="text"
                  className="auth-input"
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="Seu Endereço"
                />
              </div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="neighborhood" className="auth-label">Bairro</label>
              <div className="auth-input-wrapper">
                <FaBuilding className="auth-input-icon" />
                <input
                  id="neighborhood"
                  name="neighborhood"
                  type="text"
                  className="auth-input"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  placeholder="Seu Bairro"
                />
              </div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="number" className="auth-label">Número</label>
              <div className="auth-input-wrapper">
                <FaHashtag className="auth-input-icon" />
                <input
                  id="number"
                  name="number"
                  type="text"
                  className="auth-input"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Número"
                />
              </div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="complement" className="auth-label">Complemento</label>
              <div className="auth-input-wrapper">
                <FaHome className="auth-input-icon" />
                <input
                  id="complement"
                  name="complement"
                  type="text"
                  className="auth-input"
                  value={formData.complement}
                  onChange={handleChange}
                  placeholder="Complemento"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="auth-step">
            <h3 className="auth-step-title">Credenciais</h3>
            <div className="auth-input-group">
              <label htmlFor="email" className="auth-label">Email</label>
              <div className="auth-input-wrapper">
                <FaEnvelope className="auth-input-icon" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="auth-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu Email"
                />
              </div>
            </div>
            <div className="auth-input-group">
              <label htmlFor="password" className="auth-label">Senha</label>
              <div className="auth-input-wrapper">
                <FaLock className="auth-input-icon" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="auth-input"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Sua Senha"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="auth-title">Criar Conta</h2>
        <div className="auth-steps">
          <div className={`auth-step-indicator ${step >= 0 ? 'active' : ''}`}>
            <FaUser className="auth-step-icon" />
          </div>
          <div className={`auth-step-indicator ${step >= 1 ? 'active' : ''}`}>
            <FaMapMarkerAlt className="auth-step-icon" />
          </div>
          <div className={`auth-step-indicator ${step >= 2 ? 'active' : ''}`}>
            <FaKey className="auth-step-icon" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {renderStep()}
          {error && <div className="auth-error">{error}</div>}
          <div className="auth-buttons">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(prevStep => prevStep - 1)}
                className="auth-button secondary"
              >
                Voltar
              </button>
            )}
            {step < 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="auth-button"
              >
                Próximo
              </button>
            ) : (
              <button type="submit" className="auth-button">
                Finalizar Cadastro
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;