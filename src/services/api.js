import axios from 'axios';

// Criando uma instância do axios com a baseURL configurada para o seu backend
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // URL do backend
    headers: {
        'Content-Type': 'application/json', // Cabeçalhos padrão para o backend
    },
});

// Função para pegar todos os posts
export const getAllPosts = async () => {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar os posts:', error);
        throw error;
    }
};

// Função para criar um novo post
export const createPost = async (postData) => {
    try {
        const response = await api.post('/posts', postData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar o post:', error);
        throw error;
    }
};

// Função para editar um post
export const editPost = async (id, postData) => {
    try {
        const response = await api.put(`/posts/${id}`, postData);
        return response.data;
    } catch (error) {
        console.error('Erro ao editar o post:', error);
        throw error;
    }
};

// Função para excluir um post
export const deletePost = async (id) => {
    try {
        const response = await api.delete(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao excluir o post:', error);
        throw error;
    }
};

// Função para buscar posts por palavra-chave
export const searchPosts = async (query) => {
    try {
        const response = await api.post('/posts/search', { query });
        return response.data;
    } catch (error) {
        console.error('Erro na busca de posts:', error);
        throw error;
    }
};

export default api;
