import React from 'react'
import { useFormik } from 'formik';

const EmailForm = () => {

  const formik = useFormik({
    initialValues: {      
      email: '',
    },
    onSubmit: async values => {
      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
    },
  });

  return (
    <form onSubmit={formik.onSubmit}>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmailForm