import React, {useState} from 'react';

export default function Todo(props) {
  const [isComplete, setIsComplete] = useState(props.completed);
  const {id, name} = props;

  function toggleCompleted(e) {
    setIsComplete(!isComplete);
  }

  return (
      <li id={id} className={isComplete ? "completed" : ""}
          onClick={toggleCompleted}>{name}</li>
  );
}
