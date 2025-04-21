// import axios from "axios";

// const API_BASE_URL = "http://localhost:3000/api"; // Change this to your backend URL

// // Signup API Call
// export const signupUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/signup`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || "An error occurred";
//   }
// };

// // Login API Call
// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/login`, credentials);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || "An error occurred";
//   }
// };

// // Forgot Password API Call
// export const forgotPassword = async (email) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || "An error occurred";
//   }
// };

// // Reset Password API Call
// export const resetPassword = async (token, newPassword) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/reset-password`, { token, newPassword });
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || "An error occurred";
//   }
// };

// // Social Login API Call (Google, Facebook, GitHub)
// export const socialLogin = async (provider) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/auth/${provider}`);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data || "An error occurred";
//   }
// };
import axios from "axios";
 
const API_URL = "https://jsonplaceholder.typicode.com/posts"; 
 
export const getCars = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching car data", error);
    return [];
  }
};