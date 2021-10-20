import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import styled from "styled-components";

const EventContainer = styled.div`
  font-family: "Lato", sans-serif;
  margin: 1rem auto;
  width: 100%;
  text-align: left;
`;

const ShadowSegment = styled.div`
  margin: 1.5rem 0;
  padding: 1em 1em;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(50, 50, 50, 0.55);
  -moz-box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.55);
  box-shadow: 0px 5px 15px 1px rgba(50, 50, 50, 0.55);
`;

const EventCard = styled(ShadowSegment)`
  ${"" /* grid-column-gap: 0.5rem; */}

  background: white;
  padding: 1rem 1px;
  overflow: auto;
  width: 100%;
  text-align: left;
  .wrapper {
    width: 90%;
    margin: 0 auto;
  }
  input {
    width: 90%;
    margin: 0.5em auto;
    display: block;
  }
  input.error {
    border-color: red;
  }
  .error-wrapper {
    width: 95%;
    margin: 0.5em auto;
    height: 1rem;
  }

  .input-feedback {
    color: rgb(235, 54, 54);
    font-size: 14px;
    width: 100%;
    margin: 0 auto;
    height: 2em;
  }
`;

const Title = styled.div`
  width: 100%;
  margin: 0;
  padding: 20px 0;
  color: #000000;
  text-align: center;

  font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
`;
const GetStartedButton = styled.button`
  background: #39abe1;
  width: 61%;
  color: white;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: inherit;
  padding: 1rem 1rem 1rem;

  font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  color: white;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  &:disabled {
    background: #bbb;
  }
`;
const Body = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  justify-self: center;
  width: 100%;
  margin: 0;
  padding: 0;
  text-color: #6a2a00;

  font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
`;

const FirstNameInput = styled.input`
  border-radius: 0px;
  outline: none;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  color: ${(props) => props.inputColor || "brown"};
  border-radius: 3px;
  margin: 0 0.4em;
  height: 2em;
  padding: 0.3em 1em;
  border: 1px solid #cfcfcf;
  background: #fffcdf;
  color: #242424;

  input::placeholder {
    font-size: 3em;
    font-weight: lighter;
    color: #999;
  }
`;
const FirstNameError = styled.div``;

const SurnameInput = styled.input`
  padding: 7px;
  border-radius: 0px;
  outline: none;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  border-radius: 3px;
  margin: 0 0.4em;
  height: 2em;
  padding: 0.3em 1em;
  border: 1px solid #cfcfcf;
  background: #fffcdf;
  color: #242424;

  input::placeholder {
    font-size: 3em;
    font-weight: lighter;
    color: #999;
  }
`;
const SurnameError = styled.div``;
const EmailAddressInput = styled.input`
  padding: 7px;
  border-radius: 0px;
  outline: none;
  background-color: #fff;
  border: 1px solid #cfcfcf;
  color: ${(props) => props.inputColor || "brown"};
  border-radius: 3px;
  margin: 0 5px;
  height: 2em;
  padding: 0.3em 1em;
  border: 1px solid #cfcfcf;
  background: #fffcdf;
  color: #242424;

  input::placeholder {
    font-size: 3em;
    font-weight: lighter;
    color: #999;
  }
`;
const EmailError = styled.div``;
const PasswordInput = styled.input`
  padding: 0.3em 1em;
  border-radius: 0px;
  outline: none;
  background: #fffcdf;
  border: 1px solid #cfcfcf;
  color: ${(props) => props.inputColor || "brown"};
  border-radius: 3px;

  margin: 0 5px;
  height: 2em;
  border: 1px solid #cfcfcf;
  color: #242424;

  input::placeholder {
    font-size: 3em;
    font-weight: lighter;
    color: #999;
  }
`;

const PwdError = styled.div``;

const SignupForm = (props) => {
  const { feedItem } = props;
  return (
    <Formik
      initialValues={{ firstName: "", surname: "", email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
      //********Handling validation messages yourself*******/
      // validate={values => {
      //   let errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (!EmailValidator.validate(values.email)) {
      //     errors.email = "Invalid email address";
      //   }

      //   const passwordRegex = /(?=.*[0-9])/;
      //   if (!values.password) {
      //     errors.password = "Required";
      //   } else if (values.password.length < 8) {
      //     errors.password = "Password must be 8 characters long.";
      //   } else if (!passwordRegex.test(values.password)) {
      //     errors.password = "Invalida password. Must contain one number";
      //   }

      //   return errors;
      // }}
      //********Using Yum for validation********/

      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        surname: Yup.string().required("Surname is required"),
        email: Yup.string()
          .email("Email must be a valid email.")
          .required("Enter a valid email address")
          .matches(
            /^([^_][a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            "enter valid email."
          ),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isValid,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <EventContainer>
              <EventCard>
                <div class="wrapper">
                  <Title>{feedItem.title}</Title>
                  {/* 
                  <FirstNameInput
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.firstName && touched.firstName && "error"}
                  /> */}
                  <div className="error-wrapper">
                    {errors.firstName && touched.firstName && (
                      <FirstNameError
                        className="input-feedback"
                        data-ref="firstname-error"
                      >
                        {errors.firstName}
                      </FirstNameError>
                    )}
                  </div>
                  {/* <SurnameInput
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.surname && touched.surname && "error"}
                  /> */}
                  <div className="error-wrapper">
                    {errors.surname && touched.surname && (
                      <SurnameError
                        className="input-feedback"
                        data-ref="surname-error"
                      >
                        {errors.surname}
                      </SurnameError>
                    )}
                  </div>
                  <EmailAddressInput
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                  />
                  <div className="error-wrapper">
                    {errors.email && touched.email && (
                      <EmailError
                        className="input-feedback"
                        data-ref="email-error"
                      >
                        {errors.email}
                      </EmailError>
                    )}
                  </div>
                  <PasswordInput
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />
                  <div className="error-wrapper">
                    {errors.password && touched.password && (
                      <PwdError className="input-feedback" data-ref="pwd-error">
                        {errors.password}
                      </PwdError>
                    )}
                  </div>

                  <GetStartedButton
                    type="submit"
                    disabled={!(isValid && touched)}
                  >
                    Login
                  </GetStartedButton>
                </div>
              </EventCard>
            </EventContainer>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
