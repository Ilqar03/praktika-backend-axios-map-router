import axios from 'axios';
import { Field, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const [data, setData] = useState([]);
    

    const allData = () => {
        axios.get("http://localhost:3000/").then((response) => {
            setData(response.data);
        });
    }

    useEffect(() => {
        allData()
    }, []);

    const handleDelete = (_id) => {
        axios.delete(`http://localhost:3000/${_id}`).then(() => {
            allData()
        })
    }
   const increase=()=>{
    setData([...data.sort((a,b)=>(a.price>b.price)? 1 : (b.price>a.price)? -1 :0)])
   }

   const decrease= ()=>{
    setData([...data.sort((a,b)=>(b.price>a.price)? 1 : (a.price>b.price)? -1: 0)])
   }

   const [search,setSearch]=useState("")

    return (
        <div>
            <Formik>
                <Field placeholder="serch" onChange={(x)=>setSearch(x.target.value)}/>
            </Formik>
            
            <button onClick={()=>(increase())}>increase</button>
            <button onClick={()=>(decrease())}>decrease</button>

            {data.filter(data=>data.name.toLowerCase().includes(search.toLowerCase())).map((x) => (
                <div>
                    <img alt='foto' src={x.img} />
                    <p>{x.categories}</p>
                    <p>{x.name}</p>
                    <p>{x.price}</p>
                    <Link to={`/detailpage/${x._id}`}><button>detail</button></Link>
                    <button onClick={() => (handleDelete(x._id))}>Delete</button>
                </div>

            ))}
        </div>
    )
}

export default Home