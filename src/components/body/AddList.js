import React, { useRef } from "react";
import classes from "./AddList.module.css";

const AddList = (props) => {
  const inputListRef = useRef("");

  const addListHandler = (event) => {
    event.preventDefault();
    const enteredList = inputListRef.current.value;
    if (enteredList.trim() === '') {
      alert('공백은 안 돼요!')
      return;
    }
    props.onAddList(enteredList);
    inputListRef.current.value = "";
  };

  return (
    <section className={classes.addList}>
      <form onSubmit={addListHandler}>
        <label htmlFor="userlist">오늘 할 일!!</label>
        <input id="userlist" type="text" ref={inputListRef} />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddList;
