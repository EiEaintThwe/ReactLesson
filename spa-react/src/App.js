
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
      title: 'First Post',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Second Post',
      status: 'dropped'
    },
  ]);

  let addPost = (post) => {
    setPosts((prevState => [...prevState,post]));
    setShowModal(false);
  }



  return (
    <>
      <Navbar setShowModal = {setShowModal} />
      <PostsList posts = {posts} />

    { showModal && <Modal setShowModal={setShowModal} >
     <PostForm addPost={addPost} />
     
    </Modal>}
    </>

  );
}

export default App;
