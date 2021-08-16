import './App.css';
import { useState,useEffect } from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {

  const [user, setUser] = useState({});
  const [isFecthing, setIsFetching] = useState(false);
  // function handleChange({newValue}) {
  //   setUser({newValue});
  // }
  
  useEffect(() => {
     console.log(user);
    // console.log(isFecthing);
    setIsFetching(Object.keys(user).length === 0 && user.constructor === Object ? false : true);
    
  }, [user]); 
  
  
console.log(isFecthing);
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          {isFecthing ? <Home/> : <Login setUser={setUser}/>}
        </Route>
        <Route path="/login">
          {isFecthing ? <Redirect to="/"/> : <Login setUser={setUser}/> }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
