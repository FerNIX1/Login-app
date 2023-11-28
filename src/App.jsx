import Logout from './components/Logout';
import Login from './components/login';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {useUserContext } from './hooks/useUserContext';

function App() {
  const {user}=useUserContext()
  return(
    <div>
      {user.LoggedIn?
      <div>
      <Logout/>
    </div>
    :<Login/>}
    </div>
  )
}

export default App;

