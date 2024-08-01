import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext';
import { doSignOut } from '../../../../firebase-auth/src/auth';
import { Button } from '@mui/material';


function Header() {
  // const navigate =useNavigate();
  // const {currentUser,userLoggedIn}=useAuth();
  // return (
  //   <nav>
  //       {
  //         userLoggedIn?
  //         <>
  //         <Button onClick={()=>{doSignOut().then(()=>{navigate('/login')})}}
  //           variant="contained">
  //             Logout
  //         </Button>
  //           {/* <p>Hello user:{currentUser.email}</p> */}
          
  //         </>
  //         :
  //         <>
  //         <Link to={'/login'}>Login</Link> <br />
  //         <Link to={'/register'}>Register</Link>
  //         </>
          
  //       }
  //   </nav>
  // )


  const navigate= useNavigate();
  const {currentUser, userLoggedIn} = useAuth();

  return(
    <>
    <nav>
      {userLoggedIn ? 
      <div>
        
        <Button onClick={() => {doSignOut().then(()=> {navigate("/login")})}} variant="contained">Logout</Button>
      </div>
      :
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>  
    }
    </nav>
    </>
  )
}
export default Header







// const {currentUser} = useAuth();
// const [rows, setRows] = useState([])

// useEffect(()=> {
//     const fetchData = async () => {
//     try {
//         const usersCollection = collection(db, "users");
//         const data = await getDocs(usersCollection);
//         const rowsData = data.docs.map(doc => ({
//             id:doc.id, 
//             ...doc.data()
//         }));
//     } catch(error) {
//     console.log(error);
//     }}
//     fetchData();
// },[])

// const handleDelete = async (row) => {
//     try {
//         await deleteDoc(doc(db,"users", row.id));
//         setRows(rows.filter(x => x.id !== row.id))

//     } catch(error) {
//         console.log(error)
//     }
// }


// const columns = [
//     {field:"firstname", headerName:"First Name", width:130},
//     {field:"lastname", headerName:"last Name", width:130},
//     {field:"age", headerName:"Age", width:130},
//     {field:"email", headerName:"email", width:130},
//     {field:"role", headerName:"role", width:130},
//     {field:"actions", headerName:"Actions", width:130, sortable:false,
//         renderCell: ({row}) => {
//         currentUser.role === 'admin' && row.id !==currentUser.uid && (
//             <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
//                 <DeleteIcon />
//             </IconButton>

//         )
//         }
//     }
// ]

// return (
//     <DataGrid
//     rows={rows}
//     columns={columns}
//     initialState={{
//         pagination: {
//             paginationModel: {page:0, pageSize:5},
//         }
//     }}
//     pageSizeOptions={[5,10]}
//     checkboxSelection
//     >
//     </DataGrid>
// )
