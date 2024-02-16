import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import { Fragment } from "react";
// import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  // const [enteredUserName, setEnteredUsername] = useState("");
  // const [enteredUserAge, setenteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value, ageInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const college = collegeInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "An Error Occured",
        message: "Please enter valid inputs",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "An Error Occured",
        message: "Please enter valid age ( > 0 )",
      });
      return;
    }

    // console.log(enteredUserName, enteredUserAge);
    // setenteredUserAge("");
    // setEnteredUsername("");

    props.fetchData({
      name: enteredName,
      age: enteredAge,
      college: college,
    });

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (In Years) </label>
          <input id="age" type="number" ref={ageInputRef} />
          <label htmlFor="college">College Name</label>
          <input id="college" type="text" ref={collegeInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
