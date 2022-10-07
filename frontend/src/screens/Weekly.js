import React from 'react'

import { useState, useEffect } from 'react';
import axios from "axios";


import '../App.css'
import Item from '../components/Item';

const Weekly = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(() => {
    axios.get("https://rocky-taiga-67615.herokuapp.com/get-weekly")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  })

  const addUpdateTodo = () => {

    if (isUpdating === "") {
      axios.post("https://rocky-taiga-67615.herokuapp.com/save-weekly", { text })
        .then((res) => {
          console.log(res.data);
          setText("");
        })
        .catch((err) => console.log(err));
    }else{
      axios.post("https://rocky-taiga-67615.herokuapp.com/update-weekly", { _id: isUpdating, text })
        .then((res) => {
          console.log(res.data);
          setText("");
          setUpdating("");
        })
        .catch((err) => console.log(err));
    }
  }

  const deleteTodo = (_id) => {
    axios.post("https://rocky-taiga-67615.herokuapp.com/delete-weekly", { _id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  const updateTodo = (_id, text) => {
    setUpdating(_id);
    setText(text);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Weekend</h1>
        <div className="top">
          <input
            type="text"
            placeholder='Write Something...'
            value={text}
            onChange={(e) => setText(e.target.value)} />
          <div className="add"
            onClick={addUpdateTodo}>{isUpdating ? "Update" : "Add"}</div>
        </div>

        <div className="list">
          {todo.map(item => <Item
            key={item._id}
            text={item.text}
            remove={() => deleteTodo(item._id)}
            update={() => updateTodo(item._id, item.text)} />)}
            
        </div>

      </div>
    </div>
  )
}

export default Weekly