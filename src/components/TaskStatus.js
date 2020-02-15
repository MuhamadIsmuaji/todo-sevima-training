import React from 'react';

const TaskStatus = (props) => {
  return (
    <article className={`panel ${props.taskStatusClass ? props.taskStatusClass : `is-primary`}`}>
      <p className="panel-heading has-text-centered">{props.taskStatusTitle ? props.taskStatusTitle : `-` }</p>
      <div className="panel-block">
        Hello World
      </div>
    </article> 
  )
}

export default TaskStatus;