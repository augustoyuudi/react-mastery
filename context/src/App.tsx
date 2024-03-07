import { useState } from 'react';
import { UserContext } from './UserContext';
import Children from './components/Children';

import type { User } from './UserContext';

function App() {
  const [user, setUser] = useState({
    name: 'Augusto',
  });

  function updateUser(data: User) {
    setUser(data)
  }

  return (
    <>
      <main>
        <UserContext.Provider value={{ user, setUser: updateUser }}>
          <Children />
        </UserContext.Provider>
      </main>
    </>
  )
}

export default App
