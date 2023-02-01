import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './Login.css';

function Login() {

  const formik = useFormik({
    initialValues: {
      nickName: '',
      password: '',
    },
    onSubmit: values => {
    },
  });

  let schema = yup.object().shape({
    nickName: yup.string().required(),
    password: yup.string().required()
  });

  schema
  .isValid(formik.values)
  .then((valid) => {
    console.log('valid', valid)
  });

  return (
    <Form onSubmit={formik.handleSubmit} className='login-form'>
      <Form.Group className="mb-3">
        <Form.Label>Ваш ник</Form.Label>
        <Form.Control
          id="nickName"
          name="nickName"
          type="text"
          placeholder="Ваш ник"
          onChange={formik.handleChange}
          value={formik.values.nickName}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
}

export default Login;