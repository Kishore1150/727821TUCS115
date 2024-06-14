import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_BASE_URL,
});


api.interceptors.request.use(
  (config) => {


      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4MzUyNzA3LCJpYXQiOjE3MTgzNTI0MDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVhYWI2MjI3LWE5MmQtNGQyNC04YmJhLTAzZjdhYWYxZTk5YSIsInN1YiI6IjcyNzgyMXR1Y3MxMTVAc2tjdC5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJTcmkgS3Jpc2huYSBDb2xsZWdlIG9mIFRlY2hub2xvZ3kiLCJjbGllbnRJRCI6IjVhYWI2MjI3LWE5MmQtNGQyNC04YmJhLTAzZjdhYWYxZTk5YSIsImNsaWVudFNlY3JldCI6Ik5OUlNuUnpLVlFzcGhwSnYiLCJvd25lck5hbWUiOiJLaXNob3JlIEt1bWFyIEJhbGFzdWJyYW1hbmlhbSIsIm93bmVyRW1haWwiOiI3Mjc4MjF0dWNzMTE1QHNrY3QuZWR1LmluIiwicm9sbE5vIjoiNzI3ODIxdHVjczExNSJ9.sl3bdNMYmwJULUAuvnyBhl_stAuaUQahIemxYeM05os`;


    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;