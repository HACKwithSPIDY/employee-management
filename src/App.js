import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import UserProfile from './components/UserProfile';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/profile" element={<UserProfile user={user} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
