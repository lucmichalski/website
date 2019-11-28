import React from 'react';
import { Row, Col } from 'antd';
import { Formik, Form, useField } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';

const StyledInput = styled.input`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  padding: 12px;
  margin-right: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: #c5c9e0;
  width: 100%;

  @media (min-width: 768px) { 
    width: 300px;
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

const BtnPrimary = styled.button`
  background-color: rgb(0, 85, 255);
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
    <>
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
        <Form>
          <Col xs={24} md={12}>
            <MyTextInput
              name="email"
              type="email"
              placeholder="Your e-mail address..."
            />
          </Col>
          <Col xs={24} md={12}>
            <BtnPrimary type="submit">Request access</BtnPrimary>
          </Col>
        </Form>
      </Formik>
    </>
  );
};

export default EmailForm