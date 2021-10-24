import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Authentication from './components/Authentication';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  console.log('rendering App...');
  const [currUser, setCurrUser] = useState(
    localStorage.getItem('user') 
      ? JSON.parse(localStorage.getItem('user'))
      : null
  );
  const [postList, setPostList] = useState([]);

  const apiURL = 'http://localhost:3000';

  //data fetching after paint ok? show 'Loading...'?
  useEffect(function getAllPosts() {
    console.log('running getAllPosts effect...');

    fetch(apiURL + '/posts', { method: 'GET', mode: 'cors' })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error: Server responded with ' + res.status);
        }
      })
      .then(res => setPostList(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [currUser]);

  // var postList = [
  //   {
  //     _id: 0,
  //     author: {
  //       first_name: 'John',
  //       last_name: 'Doe',
  //       username: 'jDoe'
  //     },
  //     timestamp: Date.now(),
  //     title: 'First Post',
  //     content: 'This is my first post.',
  //     is_published: true
  //   },
  //   {
  //     _id: 1,
  //     author: {
  //       first_name: 'John',
  //       last_name: 'Doe',
  //       username: 'jDoe'
  //     },
  //     timestamp: Date.now(),
  //     title: 'Second Post',
  //     content: 'This is my second post.',
  //     is_published: true
  //   },
  //   {
  //     _id: 2,
  //     author: {
  //       first_name: 'John',
  //       last_name: 'Doe',
  //       username: 'jDoe'
  //     },
  //     timestamp: Date.now(),
  //     title: 'Third Post',
  //     content: 'This is my third post.',
  //     is_published: true
  //   }
  // ];
  // var commentList = [
  //   {
  //     _id: 0,
  //     author: {
  //       first_name: 'John',
  //       last_name: 'Doe',
  //       username: 'jDoe'
  //     },
  //     timestamp: Date.now(),
  //     content: 'I commented on my own post!',
  //   },
  //   {
  //     _id: 1,
  //     author: {
  //       first_name: 'User',
  //       last_name: 'One',
  //       username: 'user1'
  //     },
  //     timestamp: Date.now(),
  //     content: 'This is a great post.',
  //   },
  //   {
  //     _id: 2,
  //     author: {
  //       first_name: 'Anonymous',
  //       last_name: 'Doe',
  //       username: 'AnonD'
  //     },
  //     timestamp: Date.now(),
  //     content: 'This is an interesting post...',
  //   }
  // ];

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