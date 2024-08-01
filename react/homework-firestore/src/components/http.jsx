import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Http() {
    const [data, setData] = useState(null);

    useEffect(()=> {
        // fetch('https://restcountries.com/v3.1/name/Romania')
        // .then(response => response.json()).then(data =>{setData(data[0])
        //     console.log(data)

        // })
        // .catch(error => {console.log(error)})

        axios.get('https://restcountries.com/v3.1/name/Romania')
        .then(response => {
            setData(response.data[0])
            console.log(data)
        })
        .catch(error=> {
            console.log(error)
        })

    },[])

  return (
    <div>
        {data ? data.capital[0] : "Data is loading..."}
    </div>
  )
}

export default Http;
