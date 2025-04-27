import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para adicionar o token JWT em todas as requisições
api.interceptors.request.use(
  (config) => {
    // Não adiciona o token para requisições de login
    if (config.url === '/owners/login') {
      return config;
    }

    const token = localStorage.getItem('token');
    if (token) {
      console.log('Adicionando token à requisição:', token);
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log('Nenhum token encontrado no localStorage');
    }
    return config;
  },
  (error) => {
    console.error('Erro no interceptor de requisição:', error);
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros
api.interceptors.response.use(
  (response) => {
    console.log('Resposta recebida:', response.status, response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      // O servidor respondeu com um status de erro
      console.error('Erro na resposta:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
      
      // Se for erro 401, remove o token inválido
      if (error.response.status === 401) {
        console.log('Token inválido ou expirado, removendo do localStorage');
        localStorage.removeItem('token');
      }
    } else if (error.request) {
      // A requisição foi feita mas não houve resposta
      console.error('Erro na requisição:', error.request);
    } else {
      // Algo aconteceu na configuração da requisição
      console.error('Erro:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api; 