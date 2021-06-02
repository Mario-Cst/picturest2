import './App.css';
import BoardList from './components/Board/boardList';
import NavBar from './components/navbar/navbar';
import PinsList from './components/PinsList/PinsList';
import UserCard from './components/usercard/usercard';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginModal from './components/loginmodal/loginmodal';
import LoginList from './components/loginlist/loginlist.';
import SignInModal from './components/loginmodal copy/loginmodal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/user">
            <UserCard/>
          </Route>
          <Route path="/board">
            <BoardList />
          </Route>
          <Route path="/pins">
            <PinsList />
          </Route>
          <Route path="/login">
            <LoginModal/>
            <SignInModal/>
          </Route>
          <Route path="/">
            <UserCard/>
            <BoardList />
            <PinsList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
