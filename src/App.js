import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import MainPage from './pages/MainPage'

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/createpost">Create Post</a>
        </div>
      </div>

      <Router>
        <Route path="/" exact render={(props) => <MainPage />} />
        <Route path="/createpost" render={(props) => <CreatePost  />} />
        {/* <Route path="/" /> */}
      </Router>

    </>
  );
}

export default App;
