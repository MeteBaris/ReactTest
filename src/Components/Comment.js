import React from 'react'
function formatDate(date) {
    return date.toLocaleDateString();
  }
function Comment(props){
    return( <div className="Comment">
            <div className="Comment">
                 <img   src={props.author.avatarUrl}
                        alt={props.author.name}/>
            <div className="UserInfo-name">
                {props.author.name}
            </div>
            </div>
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>


    </div>
    );

}
const comment ={
    date: new Date(),
    text: 'i hope you enjoy learning React',
    author: {
        name: 'sak suka',
        avatarUrl:"C:\Users\benutzer\my-app\public\PPT 2020-03-08 12.15.18.jpg"},
    
};

    
export default Comment