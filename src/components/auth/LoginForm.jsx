import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Swal from 'sweetalert2';
import api from '../../services/api';
import './authStyles.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value.trim() }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      Swal.fire({
        icon: 'error',
        title: 'Campos obrigatórios',
        text: 'Por favor, preencha todos os campos',
        confirmButtonColor: '#E52472'
      });
      return;
    }

    try {
      const response = await api.post('/owners/login', {
        email: formData.email,
        password: formData.password
      });

      console.log('Resposta completa do servidor:', response);
      
      if (response.data && response.data.token) {
        console.log('Token recebido:', response.data.token);
        localStorage.setItem('token', response.data.token);
        
        Swal.fire({
          icon: 'success',
          title: 'Login realizado com sucesso!',
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
      console.error('Erro detalhado:', error);
      let errorMessage = 'Erro ao realizar login. Tente novamente.';
      
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Email ou senha incorretos.';
        } else {
          errorMessage = error.response.data.message || errorMessage;
        }
      }
      
      Swal.fire({
        icon: 'error',
        title: 'Erro no login',
        text: errorMessage,
        confirmButtonColor: '#E52472'
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock /> Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Entrar
          </button>
        </form>
        <p className="auth-link">
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm; 