import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Authentication from './components/Authentication';
import NotFound from './components/NotFound';
import { apiURL } from './config.js';
import './App.css';

function App() {
  const [currUser, setCurrUser] = useState(
    localStorage.getItem('user') 
      ? JSON.parse(localStorage.getItem('user'))
      : null
  );
  const [postList, setPostList] = useState([]);

  useEffect(function getAllPosts() {
    fetch(apiURL + '/posts', { method: 'GET', mode: 'cors' })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Server responded with: ' + res.status);
        }
      })
      .then(res => setPostList(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [currUser]);

  return (
    <BrowserRouter>
      <Header currUser={currUser} setCurrUser={setCurrUser} />
      <Switch>
        <Route exact path={['/sign-up', '/log-in']}>
          <Authentication 
              currUser={currUser} setCurrUser={setCurrUser} 
              apiURL={apiURL}
          /> 
        </Route>
        <Route path='/posts/:id'>
          <PostDetail apiURL={apiURL} currUser={currUser} />
        </Route>
        <Route exact path='/'>
          <Home postList={postList} />
        </Route>
        <Route path='/'>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;