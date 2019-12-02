import React from 'react';
import { Row, Col } from 'antd';
import { Formik, Form, useField } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';

const StyledInput = styled.input`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  padding: 19px;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  border-color: #FFF;
  width: 100%;

  @media (min-width: 768px) { 
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
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
  font-size: 16px;
  font-weight: 800;
  color: #000;
  background-color: #FF9A00;
  cursor: pointer;
  padding: 22px;
  border-radius: 6px;
  border: none;
  display: inline-block;
  width: 100%;
  margin-top: 12px;

  @media (min-width: 768px) { 
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-top: 0;
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
        {props => props.submitCount && props.isValid ? (
          <StyledSuccessMessage>Thank you! We'll be in touch soon</StyledSuccessMessage>
        ) : (
        <Form>
          <Col xs={24} md={13}>
            <MyTextInput
              name="email"
              type="email"
              placeholder="Your e-mail address..."
            />
          </Col>
          <Col xs={24} md={8}>
            <BtnPrimary type="submit">Request access</BtnPrimary>
          </Col>
        </Form>
        )}
      </Formik>
    </>
  );
};

export default EmailForm