import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';import './main.css'
// import { makeStyles } from '@mui/styles';


function MatUi() {
    
// const useStyles = makeStyles({
//     customDialogContent: {
//       paddingTop: '16px', 
//     },
//   });
  
    const[details, setDetails] = useState({
        firstName:"",
        lastName :"",
        university:""
    })
    const [rows, setRows] =useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'university', headerName: 'University', width: 130},
        {
            field:"action",
            headerName:"Actions",
            width: 130,
            sortable:false,
                // <div>
                //     <Button onClick={()=> handleDelete(row)}>Delete</Button>
                //     <Button onClick={()=> handleEdit(row)}>Edit</Button>
                // </div>

            renderCell: ({ row }) => (
                <div>
                    <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
                            <DeleteIcon />
                        </IconButton>
                        
                        <IconButton aria-label="delete" onClick={() => handleEdit(row)}>
                        <ModeEditIcon />
                    </IconButton>
                </div>
                )
    
        }

    ];
    
    const handleDelete = (row) => {
        setRows(rows.filter(x => x.id !== row.id));
        console.log(rows)
    }

    const handleEdit = (rowToEdit) => {
        setSelectedRow(rowToEdit);
        setDetails({
            firstName: rowToEdit.firstName,
            lastName: rowToEdit.lastName,
            university: rowToEdit.university
        });
        setOpenDialog(true);
    };


    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedRow(null);
        setDetails({
            firstName: "",
            lastName: "",
            university: ""
        });
    };

    const handleSaveChanges = () => {
        const updatedRows = rows.map(row => {
            if (row.id === selectedRow.id) {
                return {
                    ...row,
                    firstName: details.firstName,
                    lastName: details.lastName,
                    university: details.university
                };
            }
            return row;
        });
        setRows(updatedRows);
        handleCloseDialog();
    };

    const handleClick = () => {
        const newRow = {
            id:rows.length + 1,
            firstName: details.firstName,
            lastName:details.lastName,
            university:details.university
        };
        setRows([...rows, newRow]);
        setDetails({
            firstName:"",
            lastName :"",
            university:""
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDetails(prevDetails => ({
            ...prevDetails, [name]:value
        }))
    }


  return (
    <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
       
    
            <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    value={details.firstName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    value={details.lastName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="university"
                    name="university"
                    label="University"
                    variant="outlined"
                    value={details.university}
                    onChange={handleChange}
                    required
                />
          <Button color="secondary" variant='contained' size='large' onClick={handleClick}>Add</Button>
    
          <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
    
        <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Edit Details</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="editFirstName"
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            value={details.firstName}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            id="editLastName"
                            name="lastName"
                            label="Last Name"
                            variant="outlined"
                            value={details.lastName}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            id="editUniversity"
                            name="university"
                            label="University"
                            variant="outlined"
                            value={details.university}
                            onChange={handleChange}
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={handleSaveChanges} color="primary">Save Changes</Button>
                    </DialogActions>
                </Dialog>
              
        </Box>
          {/* <svg data-testid="DeleteIcon"></svg>
          <svg data-testid="ModeEditIcon"></svg>
     */}
    </div>

  );
}

export default MatUi;
























// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// function MatUi() {




//   return (
//     <div>
//        <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="First Name" variant="outlined" required />
//       <TextField id="outlined-basic" label="Last Name" variant="outlined" required />
//       <TextField id="outlined-basic" label="University" variant="outlined" required/>
    
//     </Box>
//     </div>
//   )
// }

// export default MatUi
