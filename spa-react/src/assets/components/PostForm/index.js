import React, { useRef, useState } from 'react'
import './index.css';

export default function Index({addPost}) {

  // let [title, setTitle] = useState("");
  // let onChangeHandler = (e) => {
  //   setTitle(e.target.value);
  let title = useRef();

  // }
  let resetForm = () => {
    // setTitle("");
    title.current.value = "";
    console.log('updated successfully');
    
  }

  let upload_post = (e) => {
    e.preventDefault();
  
    let post = {
      id: Math.floor(Math.random() * 10000),
      // title: title
      title: title.current.value
    }

    resetForm();
    addPost(post);
  }
  return (
    <form className='post-form' onSubmit={upload_post}>
        <h1>Create A Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            {/* <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}/> */}
              <input type='text'  ref={title}/>
        </div>
        {/* <p>{title}</p>
        <button type='button' onClick={resetForm}>Reset Form</button> */}

        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
