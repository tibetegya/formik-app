import React, { useState } from "react";
import styled from "styled-components";
import { useFormik } from "formik";

const Screen = styled.div`
  width: 411px;
  height: 768px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 3rem;
  /* border: 1px solid red; */
  background: white;
  /* background: linear-gradient(180deg, #fdb837 0%, #fe7600 100%); */
  span {
    color: tomato;
    font-size: 12px;
  }
`;

const Screen1 = () => {
  const [error, setError] = useState({
    username: "",
    email: "",
    password: ""
  });
  // const handleSubmit = e => {
  //   alert("submission in progresss");
  // };
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    onSubmit: values => {
      // alert("submission in progresss");
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Screen>
      Screen 1
      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" />
        <br />
        {error.username !== "" && <span>{error.username}</span>}
        <br /> */}
        <label htmlFor="email">email</label>
        <br />
        <input
          type="email"
          id="email",
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        {error.email !== "" && <span>{error.email}</span>}
        {/* <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" />
        <br />
        {error.password !== "" && <span>{error.password}</span>}
        <br /> */}
        <button>submit</button>
      </form>
    </Screen>
  );
};

export default Screen1;
