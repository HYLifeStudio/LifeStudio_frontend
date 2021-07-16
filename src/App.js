
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import {UserContextProvider} from "./context/user";
function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>

      </Switch>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
