
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/detail';
import NotFound from "./pages/notfound";
import Landing from "./pages/landing";

import {UserContextProvider} from "./context/user";
import Register from './pages/register';
import StudioRegister from './pages/studioRegister';
import EditUser from './pages/editUser';
import StudioEdit from './pages/studioEdit';
import UserReserveList from './pages/userReserveList';
import { StudioContextProvider } from './context/studio';
import LikedList from './pages/likedList';

function App() {
  return (
    <UserContextProvider>
      <StudioContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/signup" component={Register}/>
            <Route path="/landing" component={Landing}/>
            <Route path="/studioregister" component={StudioRegister}/>
            <Route path="/studioEdit" component={StudioEdit}/>
            <Route path="/edituser" component={EditUser}/>
            <Route path="/userlist" component={UserReserveList}/>
            <Route path="/likedlist" component={LikedList}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
    </StudioContextProvider>
    </UserContextProvider>
  );
}

export default App;
