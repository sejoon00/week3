import React, { useState, useRef } from 'react';
import UserList from './UserList';
import CreatePost from './createPost';

 function App() {

  const [inputs,setInputs]=useState(
    {
      userId : '',
      title : '',
      body : '',
    }

  )

  const { userId, title, body} = inputs;
  const onChange = e =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const [users, setUsers] = useState(
    [
      {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
       
  ]
  )

  const nextId = useRef(0);
  const onCreate = () =>{
    
    const user = {
      id: nextId.current,
      userId,
      title,
      body
    }

    setUsers([...users, user])

    setInputs({
      userId : '',
      title : '',
      body : '',
    })

    nextId.current -=1;
  }

  console.log(users);
  return (
    <>
    <CreatePost 
      userId={userId} 
      title={title} 
      body={body} 
      onChange={onChange} 
      onCreate={onCreate}/>
    <UserList users={users}/>
    
    </>
    
  )


}

export default App;
