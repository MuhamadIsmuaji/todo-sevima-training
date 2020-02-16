import React from 'react';

const TaskStatusListEmpty = () => {
  return (
    <div>Task empty</div>
  )
}

const TaskStatusListItem = (props) => {
  const taskName = props.taskName ? props.taskName : `-` ;

  return (
    <div className="columns">
      <div className="column is-12">
        <div className="notification">
          <div className="columns">
            <div className="column is-12">{taskName}</div>
          </div>
          <div className="columns">
            <div className="column is-12">
              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <button className="button is-small is-warning is-fullwidth" onClick={() => props.onClick(props.taskIdx, 'edit')}>Edit</button>
                </p>
                <p className="control">
                  <button className="button is-small is-danger is-fullwidth" onClick={() => props.onClick(props.taskIdx, 'delete')}>Delete</button>
                </p>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div> 
  )
}

const TaskStatusList = (props) => {
  const taskLists = props.taskLists ? props.taskLists : [];

  if (taskLists.length === 0) {
    return (<div className="container"><TaskStatusListEmpty /></div>)
  }

  return (
    <div className="container">
      {
        taskLists.map((val, idx) =>
          <TaskStatusListItem  key={idx} taskIdx={idx} taskName={val.taskName} onClick={(id, action) => props.onClick(id, action)}></TaskStatusListItem>
        )
      }
    </div>
  )
}

export default TaskStatusList;