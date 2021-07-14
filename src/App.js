
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
