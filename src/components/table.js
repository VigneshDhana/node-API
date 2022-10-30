import React from "react";

function Print({ item }) {
  let { id, title, body } = { ...item };
  return (
    <div className="item">
      <p>ID : {id}</p>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Print;
