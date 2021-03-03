import React from "react";
import "./App.css";
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'
import Header from './components/Header'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
function App() {
 
const user=useSelector(selectUser)
  return (
    <div className="App">
     {user&&<Header/>}
     <Router>
<Switch>
<Route path="/project1">
  <Project1/>
 </Route>
 <Route path="/project2">
  <Project2/>
  </Route>
  <Route path="/project3">
  <Project3/>
  </Route>
 <Route path="/">
   <Home/>
 </Route>

  </Switch>


</Router>
    </div>
  );
}

export default App;
