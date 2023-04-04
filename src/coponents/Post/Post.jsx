import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
  const {id, title, body} = post;
  const navigate = useNavigate();
  const handleNavigation = () =>{
    navigate(`/post/${id}`);
  }
  return (
    <div className='post'>
      <h5>ID: {id}</h5>
      <h5>{title}+</h5>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
      <button onClick={handleNavigation}>Show Post Details way 2</button>
    </div>
  );
};

export default Post;