import React, { useState, useEffect } from 'react';
import { List } from 'immutable';
import { getUsers } from './api';
import './App.css';
import UsersList from './components/UsersList';
import SelectedUsersList from './components/SelectedUsersList';

function App() {
  const [users, setUsers] = useState(new List([]));
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    getUsers()
      .then(data => void setUsers(users.push(...data)), setError)
      .finally(() => void setIsFetching(false));
  }, []);

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <>
      <SelectedUsersList users={users} setUsers={setUsers} />

      <UsersList users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
