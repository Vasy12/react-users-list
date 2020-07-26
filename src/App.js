import React, { useState, useEffect } from 'react';
import { List } from 'immutable';
import { getUsers } from './api';
import './App.css';
import UsersList from './components/UsersList';

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
      <hr />
      <h2>
        {'Selected users: '}
        {users
          .filter(u => u.isSelected)
          .map(u => `${u.firstName ?? ''} ${u.lastName ?? ''}`.trim())
          .filter(fullName => fullName)
          .join(', ')}
      </h2>
      <hr />
      <UsersList users={users} setUsers={setUsers} />;
    </>
  );
}

export default App;
