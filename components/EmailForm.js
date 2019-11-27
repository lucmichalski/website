import React from 'react';
import { Formik, Form, useField } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';

const StyledInput = styled.input`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  padding: 12px;
  margin-bottom: 12px;
  margin-right: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: #c5c9e0;
  flex: 1 1 auto;
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
`;

const BtnPrimary = styled.button`
  color: #575962;
  text-shadow: 0 1px 0 rgba(255,255,255,0.29);
  display: inline-block;
  line-height: 84px;
  cursor: pointer;
  transition: all ease-in-out 100ms;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(-179deg, #F4F4F4 0%, #C0C0C0 100%);
  box-shadow: 0 5px 6px -4px rgba(0,0,0,0.22), 0 10px 13px -4px rgba(0,0,0,0.34), inset 0 30px 30px 0 rgba(255,255,255,0.35), inset 0 -30px 30px 0 rgba(0,0,0,0.10);
  border-radius: 140px;
  transform-origin:center left;
  -ms-transform: scale(0.5); /* IE 9 */
  -webkit-transform: scale(0.5); /* Safari */
  -moz-transition:scale(0.5); /* Mozilla */
  transform: scale(0.5);
  padding: .8rem 4.2rem;
  font-size: 28px;
  font-weight: 600;

  &:hover {
    box-shadow: 0 5px 10px 0px rgba(0,0,0,0.22), 0 10px 13px 0px rgba(0,0,0,0.34), inset 0 18px 18px 0 rgba(255,255,255,0.35), inset 0 -18px 18px 0 rgba(0,0,0,0.10);
    transform: translate(0px, -4px);
    backface-visibility: hidden;
    color: #575962;
    text-decoration: none;
    transform-origin:center left;
    -ms-transform: scale(0.5); /* IE 9 */
    -webkit-transform: scale(0.5); /* Safari */
    -moz-transition:scale(0.5); /* Mozilla */
    transform: scale(0.5);
  }

  &:active {
    box-shadow: 0 5px 10px 0px rgba(0,0,0,0.22), 0 10px 13px 0px rgba(0,0,0,0.34), inset 0 3px 3px 0 rgba(255,255,255,0.35), inset 0 -3px 3px 0 rgba(0,0,0,0.10);
    backface-visibility: hidden;
    transform-origin:center left;
    -ms-transform: scale(0.5); /* IE 9 */
    -webkit-transform: scale(0.5); /* Safari */
    -moz-transition:scale(0.5); /* Mozilla */
    transform: scale(0.5);
  }
`;

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledInput className="text-input" {...field} {...props} />
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
          <MyTextInput
            name="email"
            type="email"
            placeholder="Your e-mail address..."
          />
          <BtnPrimary type="submit">Request access</BtnPrimary>
        </Form>
      </Formik>
    </>
  );
};

export default EmailForm