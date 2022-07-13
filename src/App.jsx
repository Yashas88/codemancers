import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Tab,
  Tabs,
} from 'react-bootstrap';

import Post from './Components/Post';
function App() {
  return (
    <div className='App'>
      <Container>
        <Tabs
          defaultActiveKey='ComposePost'
          transition={false}
          className='mb-3'
        >
          <Tab eventKey='ComposePost' title='Compose Post'>
            <Post />
          </Tab>
          <Tab eventKey='profile' title='Photo/Video Album'></Tab>
          <Tab eventKey='contact' title='Live Video'></Tab>
        </Tabs>
      </Container>

     
    </div>
  );
}

export default App;
