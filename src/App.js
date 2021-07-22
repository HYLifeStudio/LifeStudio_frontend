
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/detail';
import NotFound from "./pages/notfound";
import Landing from "./pages/landing";

import {UserContextProvider} from "./context/user";
function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/landing" component={Landing}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
