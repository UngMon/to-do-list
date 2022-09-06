import React from "react";
import "./TodayList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const TodayList = (props) => {
  const listDeleteHandler = (listObject) => {
    props.setToDoList(
      props.toDoList.filter((element) => element.id !== listObject.id)
    );
  };

  const checkedListHandler = (itemId) => {
    props.setToDoList(
      props.toDoList.map((todo) => {
        if (todo.id === itemId) {
          return { ...todo, isChecked: !todo.isChecked };
        } else {
          return { ...todo };
        }
      })
    );
  };

  return (
    <div className="today-list">
      <ul>
        {props.toDoList.map((item) => (
          <div className="list-box" key={item.id}>
            <li key={item.id} className={item.isChecked ? "checked" : ""}>
              {item.name}
            </li>
            <button onClick={() => checkedListHandler(item.id)}>
              <FontAwesomeIcon icon={faCheck} className={``} />
            </button>
            <button onClick={() => listDeleteHandler(item)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodayList;
