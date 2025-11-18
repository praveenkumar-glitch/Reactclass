import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const FromVal = () => {

    const initialValues={
        'name':'',
        'phno':'',
        'email':'',
        'password':''
    }

    const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must have at least 2 characters")
    .max(100, 'Name is too long'),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  phno: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits"),
});
    const formik=useFormik({
        initialValues,
        validationSchema,
        onSubmit:values=>console.log(values)
    })

    console.log(formik);


    
  return (
    <div>
      <h1>form validation</h1>

      <form onSubmit={formik.handleSubmit}>
        <input placeholder='name' name='name' value={formik.values.name} onChange={formik.handleChange} />

        {formik.errors.name && <p className='text-danger'>{formik.errors.name}</p>}
                <input placeholder='email' name='email'  value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && <p className='text-danger'>{formik.errors.email}</p>}


        <input placeholder='phno' name='phno' value={formik.values.phno} onChange={formik.handleChange} />
                        {formik.errors.phno && <p className='text-danger'>{formik.errors.phno}</p>}


        <input placeholder='password' name='password' value={formik.values.password} onChange={formik.handleChange} />
                        {formik.errors.password && <p className='text-danger'>{formik.errors.password}</p>}

<button>submit</button>

      </form>
    </div>
  )
}

export default FromVal


//npm i formik
//npm i yup