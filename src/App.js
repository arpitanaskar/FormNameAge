import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const fetchData = (data) => {
    setUserList((prevData) => [...prevData, data]);
  };
  return (
    <div>
      <AddUser fetchData={fetchData} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
