import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
  createBrowserRouter,
  useNavigate,
  RouterProvider
} from 'react-router-dom';

import ButtonBootstrap from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import FormBootstrap from 'react-bootstrap/Form';
import { Button, Navbar, Nav } from 'react-bootstrap';

import { logoUrl } from '../../logoUrl'
import { postRequest, href } from '../../utils.js'
import useAuth from '../../hooks/index';

import './Login.css';

function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const schema = yup.object().shape({
    username: yup.string().min(3, 'от 3 до 20 символов').max(20, 'от 3 до 20 символов').required('обязательное поле'),
    password: yup.string().min(5, 'от 5 символов').required('обязательное поле')
  });

  const initialUserValues = {
    username: '',
    password: '',
  }

  const handleOnSubmit = async (values, formikBag) => {
    const response = await postRequest(values)
    if (response.token){
      auth.logIn()
      localStorage.setItem('token', response.token)
      navigate('/', { replace: false });
    }



    if (response.statusCode === 401) {
      const error = {
        username: 'неверный логин или пароль',
        password: 'неверный логин или пароль',
      }
      formikBag.setSubmitting(false);
      formikBag.setErrors(error)
    }
  }

  return (
    <>
      <Card className="text-center Login-card">

        <Row>
          <Col>
            <img src={logoUrl} />
          </Col>

          <Col>
            <Row><Card.Title>Авторизация</Card.Title></Row>
            <Formik
              validationSchema={schema}
              onSubmit={handleOnSubmit}
              initialValues={initialUserValues}

            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <FormBootstrap onSubmit={handleSubmit}>
                    <FormBootstrap.Group as={Col} md="11" className='Login-input-item'>
                      <FormBootstrap.Label>Ваш ник</FormBootstrap.Label>
                      <FormBootstrap.Control
                        required
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isValid={touched.username && !errors.username}
                        isInvalid={!!errors.username}
                      />
                      <FormBootstrap.Control.Feedback type="valid">Looks good!</FormBootstrap.Control.Feedback>
                      <FormBootstrap.Control.Feedback type="invalid">{errors.username}</FormBootstrap.Control.Feedback>
                    </FormBootstrap.Group>

                    <FormBootstrap.Group as={Col} md="11" className='Login-input-item'>
                      <FormBootstrap.Label>Пароль</FormBootstrap.Label>
                      <FormBootstrap.Control
                        required
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isValid={touched.password && !errors.password}
                        isInvalid={!!errors.password}
                      />
                      <FormBootstrap.Control.Feedback type="valid">Looks good!</FormBootstrap.Control.Feedback>
                      <FormBootstrap.Control.Feedback type="invalid">{errors.password}</FormBootstrap.Control.Feedback>
                    </FormBootstrap.Group>
                    {errors.authNotCorrect && (<div>not correct</div>)}
                    <FormBootstrap.Group as={Col} md="11">
                      <ButtonBootstrap variant="outline-primary" className='Login-button' type="submit">Войти</ButtonBootstrap>
                    </ FormBootstrap.Group>
                </FormBootstrap>
              )}
            </Formik>
          </Col>
        </Row>    
        <Card.Footer className="text-muted">Нет аккаунта? <Nav.Link as={Link} to="/signup">авторизация</Nav.Link></Card.Footer>   
      </Card>
         
    </>
  );
}

export default Login;

