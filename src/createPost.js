import React from 'react';
import './createPost.css';
function CreatePost({ userId, title, body, onChange, onCreate}){
    return(
        <div className="box">
            <input 
                className="User"
                name="userId"
                placeholder="User"
                onChange ={onChange}
                value={userId}
            />
            <input 
                className="Tittle"
                name="title"
                placeholder="Title"
                onChange ={onChange}
                value={title}
            />
             <button 
            className="btn"
            onClick={onCreate}>+</button>
            <input 
                className="Body"
                name="body"
                placeholder="Body"
                onChange ={onChange}
                value={body}
            />
           
        </div>
    )
}

export default CreatePost;