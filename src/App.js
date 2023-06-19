import './App.css';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import Index from './components/Index/Index';
import Login from './components/Authentication/login';
import { useEffect } from 'react';
import { auth } from './components/firebase/firebase';
import { useStateValue } from './components/Context API/StateProvider';
import Checkout from './components/Shopping Cart/Checkout';


function App() {
  const [{}, dispatch]=useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    
    <div className="app">      
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login/>} />
        <Route path="/checkout" element={ <Checkout/>} />
        <Route path="/" element={ <Index/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
