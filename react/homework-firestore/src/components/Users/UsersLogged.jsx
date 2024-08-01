import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../contexts/authContext';
import { Pagination } from '@mui/material';


function UsersLogged() {
    // const { currentUser } = useAuth();
    // const [rows, setRows] = useState([]);
    
    // const handleDelete = async (row) => {
    //     try {
    //         await deleteDoc(doc(db, "users", row.id));
    //         setRows(rows.filter(x => x.id !== row.id));
    //     } catch (error) {
    //         console.error("Error deleting user: ", error);
    //     }
    // };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const usersCollection = collection(db, "users");
    //             const data = await getDocs(usersCollection);
    //             const rowsData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //             setRows(rowsData);
    //         } catch (error) {
    //             console.error("Error fetching data: ", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const columns = [
    //     { field: "id", headerName: "ID", width: 170 },
    //     { field: 'firstname', headerName: 'First name', width: 150 },
    //     { field: 'lastname', headerName: 'Last name', width: 150 },
    //     { field: 'age', headerName: 'Age', width: 100 },
    //     { field: 'email', headerName: 'Email', width: 150 },
    //     { field: 'role', headerName: 'Role', width: 100 },
    //     {
    //         field: "action", headerName: "Actions", width: 130, sortable: false,
    //         renderCell: ({ row }) => (
    //             currentUser.role === 'admin' && row.id !== currentUser.uid && (
    //                 <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
    //                     <DeleteIcon />
    //                 </IconButton>
    //             )
    //         )
    //     }
    // ];

    // return (
    //     <div style={{ height: 400, width: '100%' }}>
    //         <DataGrid
    //             rows={rows}
    //             columns={columns}
    //             initialState={{
    //                 pagination: {
    //                     paginationModel: { page: 0, pageSize: 5 },
    //                 },
    //             }}
    //             pageSizeOptions={[5, 10]}
    //             checkboxSelection
    //         />
    //     </div>
    // );

    const {currentUser} = useAuth();
    const [rows, setRows] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
        try {
            const usersCollection = collection(db, "users");
            const data = await getDocs(usersCollection);
            const rowsData = data.docs.map(doc => ({
                id:doc.id, 
                ...doc.data()
            }));
            setRows(rowsData);

        } catch(error) {
        console.log(error);
        }}
        fetchData();
    },[])
3
    const handleDelete = async (row) => {
        try {
            await deleteDoc(doc(db,"users", row.id));
            setRows(rows.filter(x => x.id !== row.id))

        } catch(error) {
            console.log(error)
        }
    }


    const columns = [
        {field:"firstname", headerName:"First Name", width:130},
        {field:"lastname", headerName:"last Name", width:130},
        {field:"age", headerName:"Age", width:130},
        {field:"email", headerName:"email", width:130},
        {field:"role", headerName:"role", width:130},
        {field:"action", headerName:"Action", width:130, sortable:false,
            renderCell: ({row}) => (
            currentUser.role =="admin" && row.id !==currentUser.uid && (
                <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
                    <DeleteIcon />
                </IconButton>

            )
        )
        }
    ]

    return (
                <div style={{ height: 400, width: '100%' }}>

        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
            pagination: {
                paginationModel: {page:0, pageSize:5},
            }
        }}
        pageSizeOptions={[5,10]}
        checkboxSelection
        >
        </DataGrid>
        </div>
    )
}

export default UsersLogged;
