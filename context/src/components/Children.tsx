import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

export default function Children() {
  const userContext = useContext(UserContext);
  const [userName, setUserName] = useState('');

  function updateUser() {
    if (userContext.setUser) {
      userContext.setUser({
        name: userName
      });
    }
  }

  return (
    <>
      <div>
        <p>{userContext.user.name}</p>
        <input type="text" value={userName} onChange={(event) => { setUserName(event?.target.value) }} />
        <button onClick={updateUser}>Set new user</button>
      </div>
    </>
  )
}