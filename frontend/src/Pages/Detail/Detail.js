import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
    const [datam, setDatam] = useState([]);

   const {_id}=useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/${_id}`).then((response) => {
            setDatam(response.data);
        });
    },[_id]);

    return (
       
           
                <div>
                    <img alt='foto' src={datam.img}/>
                <p>{datam.categories}</p>
                <p>{datam.name}</p>
                <p>{datam.price}</p>
                </div>

           
        
    )
}

export default Detail