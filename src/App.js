
import {Route , Routes} from 'react-router-dom'
import {UserListOne} from './Pages/UserListOne'
import {UserListTwo} from './Pages/UserListTwo'
import {UserListTres} from './Pages/UserListTres'
import {NavBar} from './component/NavBar'




function App() {
  return (
    <>
      <NavBar />
      <div className=" text-bg-dark p-0">
        <Routes>
          <Route index element={<UserListOne />} />
          <Route path=':prueba' element={<UserListTwo />} />
          <Route path='/3/ :prueba' element={<UserListTres />} />
         
          
        </Routes>
      </div>
    </>
  );
}

export default App;
