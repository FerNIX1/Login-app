import { useUserContext } from '../hooks/useUserContext';
import '../index.css';
export default function Logout() {
    const {user,logout}=useUserContext(); 
  return (
    <div className='background'>
        <div className="container-fluid">
        <div className="row justify-content-center back">
            <div className="col-sm-10 col-md-12 mt-5 mb-5">
                  <h1>Hola,{user.email}</h1>
                  <div className="dropdown mt-4">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menú
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" onClick={logout}>
                          Salir
                        </button>
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
                </div>
                </div>
  )
}
