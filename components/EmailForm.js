import React from 'react';
import { Row, Col, Button } from 'antd';
import { Formik, Form, useField } from 'formik';
import styled from 'styled-components';
import Confetti from 'react-confetti'
import * as Yup from 'yup';

const SignupGroup = styled.div`
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 60px;
  margin: 0px auto 15px;
`
const InputGroup = styled.div`
  @media only screen and (min-width: 768px) {
    width: 400px;
  }
  width: 100%;
`

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

const ButtonGroup = styled.div`
  @media only screen and (min-width: 768px) {
    margin-left: 12px;
    margin-top: 0;
    width: auto;
  }
  width: 100%;
  margin-top: 12px;
`

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

const EmailForm = ({ email_placeholder, button }) => {
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
        <SignupGroup>
          <InputGroup>
            <MyTextInput
              name="email"
              type="email"
              placeholder={email_placeholder}
            />
          </InputGroup>
          <ButtonGroup>
            <Button type={button.type} htmlType="submit" size="large" block>{button.text}</Button>
          </ButtonGroup>
        </SignupGroup>
      </Form>
      )}
    </Formik>
  );
};

export default EmailForm