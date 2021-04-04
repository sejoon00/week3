import React from 'react';
import './UserList.css';

function UserId1({data}){

    
    return(
        <div className="container">
            <div >
            <b >User </b>
            <span >{data.userId}</span><br/>
            <b >Title  </b>
            <span >{data.title}</span><br/>
          </div>
          <div ></div>
          <div >
            <b >Body  </b>
            <span >{data.body}</span><br/><br/>
          </div>
        </div>
    )
}

function UserList({users}){

   

    return(
        <div>
            {
                users.map(user=>(
                    <UserId1 data={user}/>
                ))
            }
               
            
        </div>
       
    )

}

export default UserList;