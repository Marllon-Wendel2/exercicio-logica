import crypto from 'crypto';
import axios from 'axios';

// Suas chaves
const publicKey = '74e99808fa3d0e434a8015f0522ba677';
const privateKey = 'a3d69d7ff1d34d8a7c5d11e1bf388a4c886092bd';

// Gera o timestamp
const timestamp = Date.now().toString();

const id = "1011010"

// Gera o hash MD5
const hash = crypto
  .createHash('md5')
  .update(timestamp + privateKey + publicKey)
  .digest('hex');

// Monta a URL
const baseURL = `https://gateway.marvel.com/v1/public/characters`;
const url = `${baseURL}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=10`;

// Faz a requisição
axios
  .get(url)
  .then(response => {
    console.log('Dados da API:', response.data.data.results);
  })
  .catch(error => {
    console.error('Erro:', error.response.data);
  });