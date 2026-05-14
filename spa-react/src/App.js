
import './App.css';
import { useState } from 'react';
import Navbar from './assets/components/Navbar';
import PostsList from './assets/components/PostsList';
import Modal from './assets/components/Modal';

function App() {



  let [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post'
    },
    {
      id: 2,
      title: 'Second Post'
    },
    {
      id: 3,
      title: 'Third Post'
    }
  ]);



  return (
    <>
      <Navbar />
      <PostsList posts = {posts} />
      {/* <Modal>
            <h1>Zoom class is Available</h1>
            <p>feel free to <a href=''>join</a>here</p>
      
    </Modal> */}

    <Modal>
      <h1>Terms & Conditions</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Modal>
    </>

  );
}

export default App;
