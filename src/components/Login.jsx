import { useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';
const users = [
    { email: 'fer@gmail.com', password: 'LZ123' },
  ];

export default function Login() {
    const {login}=useUserContext(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const form = () => {
      if (!validateEmail(email)) {
        alert('Formato de correo incorrecto');
        if(email===null){
        alert('llena por favor el email')
        }
        return;
      }
  
      
      const foundUser = users.find(user => user.email === email && user.password === password);
       
      if (foundUser) {
        login(email,password)
      } else {
        alert('Credenciales incorrectas');
      }
    };
  
   
  
    return (
      <div className="background">
        <div className="container-fluid">
          <div className="row justify-content-center back col-md-6 ">
            <div className="col-sm-10 col-md-6 col-lg-12 mt-5 mb-5">
                <form className='mt-4'>
                  <h2>Login</h2>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Ingrese su correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="button" className="btn btn-primary mt-4" onClick={form}>Iniciar sesión</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
