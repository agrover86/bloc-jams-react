import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <nav>
             <img src="assets/images/bloc_jams_logo.png" alt="bloc jams logo"/>
             <div className='page-nav' >
               <Link className='page-link' to='/'>Landing |</Link>
               <Link className='page-link' to='/library'> Library </Link>
             </div>
        </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
<<<<<<< HEAD
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,800,600,700,300"/>
          <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css"/>
        </main>
      </div>
    );
  }
}

export default App;
