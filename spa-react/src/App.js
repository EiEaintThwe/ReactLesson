
import './App.css';
import { useState } from 'react';
import Navbar from './assets/components/Navbar/index';
import PostsList from './assets/components/PostsList/index';
import Modal from './assets/components/Modal/index';
import PostForm from './assets/components/PostForm/index';

function App() {
  let [showModal, setShowModal] = useState(false);
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
      <Navbar setShowModal = {setShowModal} />
      <PostsList posts = {posts} />

    { showModal && <Modal setShowModal={setShowModal} >
     <PostForm />
     
    </Modal>}
    </>

  );
}

export default App;
