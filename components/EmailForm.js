import React from 'react';
import { Row, Col } from 'antd';
import { Formik, Form, useField } from 'formik';
import styled from '@emotion/styled';
import Confetti from 'react-confetti'
import * as Yup from 'yup';

const StyledInput = styled.input`
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 12px;
  border-style: none;
  box-shadow: rgba(0,0,0,.09) 0 10px 20px 0;
  color: #000;
  font-family: Colfax,"Neue Helvetica W02","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 18px;
  height: 100%;
  letter-spacing: -.3px;
  margin: 0;
  outline: 0;
  padding: 19px 18px 18px;
  text-align: left;
  transition: box-shadow .2s, color .2s;
  width: 100%;
`;

const ButtonPrimary = styled.button`
  background-color: #FF9A00;
  border-radius: 12px;
  border-style: none;
  box-shadow: rgba(0,0,0,.1) 0 -1px 0 inset,rgba(0,85,255,.3) 0 1px 3px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: Colfax,"Neue Helvetica W02","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 18px;
  font-weight: 500;
  height: 100%;
  letter-spacing: -.3px;
  line-height: 1;
  margin: 0;
  outline: 0;
  padding: 18px 17px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translateZ(0);
  transition: box-shadow .3s, background-color .2s, color .2s;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    height: 56px;
    width: auto;
    margin-left: 12px;
  }
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  width: 200px;
  margin-top: 0.25rem;
  color: #FFF;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
`;

const StyledSuccessMessage = styled.div`
  font-size: 24px;
  color: #00C800;
  &:before {
    content: "🔥 ";
    font-size: 24px;
  }
`;

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
const EmailForm = () => {
  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          })
          setSubmitting(false);
        }, 400);
      }}
    >
      {props => props.submitCount && props.isValid ? (
        <>
          <StyledSuccessMessage>Thank you! We'll be in touch soon</StyledSuccessMessage>
          <Confetti
            numberOfPieces={500}
            recycle={false}
          />
        </>
      ) : (
      <Form>
        <Row type="flex" justify="center" align="middle">
          <Col xs={24} md={12}>
            <MyTextInput
              name="email"
              type="email"
              placeholder="Votre addresse e-mail..."
            />
          </Col>
          <Col xs={24} md={8}>
            <ButtonPrimary type="submit">S'incrire à la Beta </ButtonPrimary>
          </Col>
        </Row>
      </Form>
      )}
    </Formik>
  );
};

export default EmailForm