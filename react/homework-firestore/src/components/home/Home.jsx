import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../header/Header';
import UsersLogged from '../Users/UsersLogged';

// function Home() {
//   const navigate = useNavigate();
//   const { currentUser } = useAuth();
//   const [showUsers, setShowUsers] = useState(false);

//   useEffect(() => {
//     console.log(currentUser);
//     if (!currentUser) {
//       navigate('/login');
//     }
//   }, [currentUser, navigate]);

//   return (
//     <div>
//       <Header />
//       <div>Hello
//         {
//           currentUser ?
//           currentUser.email :
//           "Placeholder"
//         }
//       </div>
//       <br />
//       <div className='table__display'>
//         <Link to="#" onClick={() => setShowUsers(true)}>View Users</Link> 
//         <Link to="#" onClick={() => setShowUsers(false)}>Hide Users</Link>
//       </div>
//       {showUsers && <UsersLogged />}
//     </div>
//   );
// }

// export default Home;


function Home() {
  const {currentUser} = useAuth();
  const navigate = useNavigate();
  const [showUsers, setShowUsers] = useState(false)

  useEffect(()=> {
    if(!currentUser) {
      navigate("/login")
    }
  },[currentUser, navigate])

  return(
    <div>
    <Header/>
    <div> Hello {currentUser ? currentUser.email : ""}</div>
    <div>
      <Link to="#" onClick={() => {setShowUsers(true)}}>Show Users</Link>
      <Link to="#" onClick={() => {setShowUsers(false)}}>Hide Users</Link>
    </div>
    {showUsers && <UsersLogged/>}
    </div>
  )
}

export default Home;