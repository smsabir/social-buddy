import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState([]);
    const {title, userId, body} = post;
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res =>  res.json())
        .then(data => setComments(data))
    }, [id])
    return (
        <div>
            <h3>Post ID: {id}</h3>
            <p>User ID: {userId}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Details:</strong>  {body}</p>
            <p>Number of Comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;