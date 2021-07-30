
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/detail';
import NotFound from "./pages/notfound";
import Landing from "./pages/landing";

import {UserContextProvider} from "./context/user";
import Register from './pages/register';
import StudioRegister from './pages/studioRegister';

function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/signup" component={Register}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/studioregister" component={StudioRegister}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
