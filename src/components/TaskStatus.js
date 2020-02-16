import React from 'react';
import TaskStatusList from './TaskStatusList';

const TaskStatus = (props) => {
  const taskStatusTitle = props.taskStatusTitle ? props.taskStatusTitle : `-`;

  return (
    <article className={`panel`}>
      <p className="panel-heading has-text-centered">{taskStatusTitle}</p>
      <div className="panel-block">
        <TaskStatusList taskLists={props.taskStatusLists} selectedTask={props.selectedTask} onClick={(idx, action) => props.onClick(idx, action)}></TaskStatusList>
      </div>
    </article> 
  )
}

export default TaskStatus;