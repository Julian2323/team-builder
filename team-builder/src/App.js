import logo from './logo.svg';
import './App.css';
import Data from './Data';
import React, { useState } from "react";
import Members from './components/Members';
import Form from './components/Form';

function App() {

  const [members, setMembers] = useState(Data);

  const addNewMember = member => {
    setMembers([...members, member]);
  }
  
  
  return (
    <div className="App">
      <h1>My Team</h1>
      <Members memberList = {members} /> 
      <Form addNewMember={addNewMember} />

    </div>
  );
}

export default App;
