// App.js
import { Routes, Route } from 'react-router-dom';
import Additem from './additem';
import NavBar from './NavBar';
import Home from './home';
import Login from './login';


const App = () => {
 return (


    <>
    <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/additem" element={<Additem />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </>
    
 );
};


export default App;