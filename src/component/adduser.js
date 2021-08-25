import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom'


const Adduser = () => {
  let history=useHistory();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  
    onSubmit: values => {
      
      addUserData(values);
      history.push("/");
    },
  });


  async function addUserData(values) {
  
    const data = values;
    console.log(data);

    await fetch('http://localhost:3004/users', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   
  }
  
  return (
    <div className="card mx-auto card-width border-info" >
  <div className="card-header">
    <h4>Add User</h4>
  </div>
  <div className="card-body">
  <form onSubmit={formik.handleSubmit}>
  <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <input
         id="firstName"
         name="firstName"
         type="text"
         placeholder="First Name"
         className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
      
    </div>
    <div className="form-group">
      <label htmlFor="inputPassword4">Last Name</label>
  
      <input
         id="lastName"
         name="lastName"
         type="text"
         placeholder="LastName"
         className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
    </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
         id="email"
         name="email"
         type="email"
         placeholder="Enter Email"
         className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 </div>
 <button type="submit" className="btn btn-primary btn-block">Add User</button>
 </form>
  </div>
</div>
  );
};
export default Adduser;
