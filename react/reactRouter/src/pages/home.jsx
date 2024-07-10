import React, { useState } from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';

function Home() {

    const handleDelete = (row) => {
        setRows(rows.filter(x => x.id !== row.id));
        console.log(rows)
      };

      
  const options = [
    { label: "Bucuresti" },
    { label: "Iasi" },
    { label: "Oradea" },
    { label: "Cluj" },
  ];

  const [newOptions, setNewOptions] = useState(options);
  const [nume, setNume] = useState("")


  const columns = [
    {field:'id', headerName: "ID", width:70},
    {field:'firstName', headerName: "First Name", width:150},
    {field:'lastName', headerName: "Last Name", width:150},
    {
        field:'fullName', 
        headerName:"Full Name", 
        description:"Description",
        width:300,
        valueGetter:(value, row) => `${row.firstName || ""} ${row.lastName || ""}` ,
        sortable:false
    },
    {
        field:"action",
        headerName:"Actions",
        sortable:false,
        renderCell: ({row}) => <Button onClick={()=> handleDelete(row)}>Test</Button>
    }
  ]

  const data = [
    { id:1, lastName:"Paula", firstName:"Madalina"}, 
    {id:2, lastName:"Ioana", firstName:"Popescu"},
    {id:3, lastName:"Roxana", firstName:"Havrici"},
    {id:4, lastName:"Roxana", firstName:"Havrici"},
    {id:5, lastName:"Roxana", firstName:"Havrici"},
  ]


  const [rows, setRows] = useState(data);


  const handleClick = () => {
    setNewOptions((options) => [...options, { label: nume }]);
  };

  return (
    <div>
      <Button color="secondary" variant='contained' size='large' onClick={handleClick}>
        Test
      </Button>

      <TextField 
        required
        error
        id='nume'
        label="Nume:"
        defaultValue={"Paula"}
        helperText="Introdu ceva"
        onChange={(e)=> {setNume(e.target.value)}}
      ></TextField>

      <Autocomplete
        disabledPortal
        id='combo-box'
        options={newOptions}
        sx={{ width: 300, marginTop: 2 }}
        renderInput={(params) => <TextField {...params} label="Orașe:" />}
      />

      <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination:{paginationModel:{page:0, pageSize:5}}
      }}
      checkboxSelection
      ></DataGrid>





    </div>
  );
}

export default Home;

// un formular cu nume prenume si facultate, de fiecare daca cand da pe add tree sa apara in tabel nume prenume si facultate, cu buton de delete
// folosind ,,un edit cu pop up