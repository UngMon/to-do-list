import React, { Fragment, useEffect, useState } from "react";
import AddList from "./AddList";
import TodayList from "./TodayList";

const Today = () => {
  const [toDoList, setToDoList] = useState(
    () => JSON.parse(localStorage.getItem("toDoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const addListHandler = (inputlist) => {
    console.log('렌더링 여부')
    setToDoList((prevInputList) => [
      ...prevInputList,
      { name: inputlist, id: Math.random().toString(), isChecked: false },
    ]);
  };

  return (
    <Fragment>
      <AddList onAddList={addListHandler} toDoList={toDoList} />
      <TodayList toDoList={toDoList} setToDoList={setToDoList} />
    </Fragment>
  );
};

export default Today;
