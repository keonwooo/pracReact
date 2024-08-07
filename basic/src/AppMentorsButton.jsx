import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  // const [person, setPerson] = useState(initPerson);
  const [person, dispatch] = useReducer(personReducer, initPerson);
  
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    dispatch({type: 'updated', prev, current});
  };

  const handleAdd = () => {
    const name = prompt(`추가할 멘토의 이름을 입력하세요`);
    const title = prompt(`추가할 멘토의 타이틀을 입력하세요`);
    
    dispatch({type: 'added', name, title});
  };

  const handleDel = () => {
    const name = prompt(`삭제할 멘토의 이름을 입력하세요`);
    
    dispatch({type: 'deleted', name});
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
      <Button text='멘토 삭제하기' onClick={handleDel} />
      <Button text='멘토 추가하기' onClick={handleAdd} />
    </div>
  )
}

function Button({ text, onClick }) {
  console.log('Button', text, 're-rendering ');
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: 'black'
        ,color: 'white'
        ,borderRadius: '20px'
        ,margin: '0.4rem'
      }}>
        {text}
    </button>
  )
}

const initPerson = {
  name: '엘리'
  ,title: '개발자'
  ,mentors: [
    {
      id: 1
      ,name: '밥'
      ,title: '시니어개발자'
    }
    ,{
      id: 2
      ,name: '제임스'
      ,title: '시니어개발자'
    }
  ]
};