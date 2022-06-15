import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Auth from './container/Auth/Auth';
import Home from './container/home/Home';
import Department from './container/Department/Department';
import Doctor from './container/Doctor/Doctor';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import Footer from './component/footer/Footer';
import Medicine from './container/Medicine/Medicine';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/Auth"} exact component={Auth}></Route>
        <Route path={"/Department"} exact component={Department}></Route>
        <Route path={"/Doctor"} exact component={Doctor}></Route>
        <Route path={"/About"} exact component={About}></Route>
        <Route path={"/Contact"} exact component={Contact}></Route>
        <Route path={"/Medicine"} exact component={Medicine}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
