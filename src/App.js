import React from 'react';
import './App.css';
import PersonContextProvider from './context/PersonContext';
import NavBar from './components/NavBar';
import AddPerson from './components/AddPerson';
import PersonList from './components/PersonList';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <PersonContextProvider>
          <NavBar />
          <div className="container">

          <Route exact path="/" component={PersonList}>

          </Route>
          <Route path="/addPerson" component={AddPerson}>

          </Route>
          </div>

        </PersonContextProvider>
      </BrowserRouter>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
