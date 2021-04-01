import React, { useState, useEffect } from 'react'
import '../App.css'

export default function CreatePost() {
    const [userName, setUserName] = useState("")
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")

    const submitPost = () => {

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
