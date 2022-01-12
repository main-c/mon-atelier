
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const Post = () => {
  const { id } = useParams();
  
  const [post, SetPost] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        SetPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <br />
      <button>Go back</button>
    </article>
  );
};

export default Post;