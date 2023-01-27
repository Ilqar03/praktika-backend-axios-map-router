import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function Add() {
  return (
    <div>
        <Formik
       initialValues={{ img: '', categories: '', name: '', price: '' }}
       validationSchema={Yup.object({
        img: Yup.string()
           .required('Required'),
           categories: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
           price: Yup.string().required('Required'),
       })}
       onSubmit={(values) => {
         axios.post("http://localhost:3000/",values)
       }}
     >
       <Form>
         <label htmlFor="img">img</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />
 
         <label htmlFor="categories">categories</label>
         <Field name="categories" type="text" />
         <ErrorMessage name="categories" />

         <label htmlFor="name">name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add