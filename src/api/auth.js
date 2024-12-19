import axios from "./axios.js";

export const registerRequest = async (user) =>
  axios.post(`/auth/register`, user);

export const loginRequest = async (user) => axios.post(`/auth/login`, user); // iniciar sesion con las credenciales del usuario

export const verifyTokenRequest = async () => axios.get(`/auth/verify`); // verifica el token de autenticación