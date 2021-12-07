import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    {user && <Dashboard />}
                    {!user && <Navigate to='/login' />}
                  </>
                }
              />
              <Route
                path='/create'
                element={
                  <>
                    {user && <Create />}
                    {!user && <Navigate to='/login' />}
                  </>
                }
              />
              <Route
                path='/projects/:id'
                element={
                  <>
                    {user && <Project />}
                    {!user && <Navigate to='/login' />}
                  </>
                }
              />
              <Route
                path='/login'
                element={
                  <>
                    {!user && <Login />}
                    {user && <Navigate to='/' />}
                  </>
                }
              />
              <Route
                path='/signup'
                element={
                  <>
                    {!user && <Signup />}
                    {user && <Navigate to='/' />}
                  </>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
