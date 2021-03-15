import React, { useEffect, useState } from "react";

export default function TodoListItem(props) {
  const onItemClick = () => {
    props.onToggle(props.item.id);
  };

  const onDeleteBtnClick = (e) => {
    e.stopPropagation();
    props.onDelete(props.item.id);
  };

  const { item } = props;

  return (
    <li onClick={onItemClick} style={getItemStyle(item)}>
      {item.title}
      <span onClick={onDeleteBtnClick}>X</span>
    </li>
  );
}

function getItemStyle({ completed }) {
  return {
    cursor: "pointer",
    backgroundColor: completed ? "green" : "yellow",
  };
}
