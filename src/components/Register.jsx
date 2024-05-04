import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userServices from '../services/userServices';
import { Link } from 'react-router-dom';
import '../styles/Common.css'; // Assuming this contains global styles you may have

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const data = await userServices.register(values);
        alert('Registration successful');
        console.log(data);  // Process response data
      } catch (error) {
        alert('Failed to register');
        console.error(error);  // Handle errors
      }
    },
  });

  return (
    <div className="background-image">
      <div className="content-container">
        <h1>Register</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" {...formik.getFieldProps('username')} className="form-input"/>
            {formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...formik.getFieldProps('password')} className="form-input"/>
            {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...formik.getFieldProps('name')} className="form-input"/>
            {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...formik.getFieldProps('email')} className="form-input"/>
            {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
          </div>
          <div className="form-actions">
            <button type="submit" className="button">Register</button>
          </div>
        </form>
        <Link to="/" className="button">Back</Link>
      </div>
    </div>
  );
}

export default Register;
