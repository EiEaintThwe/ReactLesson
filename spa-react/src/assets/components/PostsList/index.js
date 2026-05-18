import React from 'react';
import './index.css';
import styles from './single_post.module.css';

export default function PostsList({posts}) {
  return (
    <div className='postList container'>
        {posts.map(post => (
            <div key={post.id} className={`single-post ${styles.card}`}>
              <h3>{post.title}</h3>
              <h4>status - {post.status}</h4>
              </div>
        ))}
      </div>
  )
}
