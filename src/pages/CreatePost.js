import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../App.css'

export default function CreatePost() {
    const [userName, setUserName] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const submitPost = () => {
        Axios.post('http://localhost:3001/api/create', {
            userName: userName,
            title: title,
            text: text
        })
    }

    return (
        <div className="CreatePost">
            <div className="uploadPost">
                <label>Username</label>
                <input type="text" onChange={(e) => { setUserName(e.target.value) }} />
                <label>Title</label>
                <input type="text" onChange={(e) => { setUserName(e.target.value) }} />
                <label>Post Text</label>
                <textarea onChange={(e) => { setUserName(e.target.value) }} />
                <button onClick={submitPost}>Submit Post</button>
            </div>
        </div>
    )
}
