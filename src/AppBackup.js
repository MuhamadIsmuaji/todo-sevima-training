import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css'
import TaskStatus from './components/TaskStatus';
// import styled from 'styled-components';

// const ButtonCustom = styled(Button)`
//   border-color: 1px black solid;
// `;

const App = () => {
  const TASK_LOW = 'L';
  const TASK_MEDIUM = 'M';
  const TASK_HARD = 'H';

  const INIT_FORM_STATE = 'CREATE';
  
  const getTaskPriorities = (key) => {
    const taskPriorities = [
      { priorityKey: TASK_LOW, priorityName: 'Low' },
      { priorityKey: TASK_MEDIUM, priorityName: 'Medium' },
      { priorityKey: TASK_HARD, priorityName: 'Hard' },
    ];

    if (key == null) {
      return taskPriorities;
    }

    return taskPriorities.find(obj => {
      return obj.priorityKey === key;
    });
  };
  
  const [task, setTask] = useState({ taskName: '', taskPriority: TASK_LOW });
  const [taskLists, setTaskList] = useState([]);
  const [formState, setFormState] = useState(INIT_FORM_STATE);

  const handleSetTask = (e) => {
    setTask({ 
      ...task, [e.target.name]: e.target.value 
    })
  };

  const handleSetTaskList = (e) => {
    e.preventDefault();
    if (formState === INIT_FORM_STATE) {
      setTaskList([...taskLists, { taskName: task.taskName, taskPriority: task.taskPriority }]);
      setTask({ taskName: '', taskPriority: TASK_LOW })
    } else {
      let taskTemp = [...taskLists];
      taskTemp[formState].taskName = task.taskName;
      taskTemp[formState].taskPriority = task.taskPriority;

      setTaskList(taskTemp);

      setTask({ taskName: '', taskPriority: TASK_LOW })
      setFormState(INIT_FORM_STATE);
    }
  }

  const deleteTask = (taskId) => {
    const taskListsTemp = taskLists.filter((obj, idx) => {
      return idx !== taskId;
    });

    setTaskList(taskListsTemp);
    setFormState(INIT_FORM_STATE);
  }

  const editTask = (taskId) => {
    setFormState(taskId);
    const taskTemp = taskLists.find((obj, idx) => {
      return idx === taskId;
    })

    setTask({ taskName: taskTemp.taskName, taskPriority: taskTemp.taskPriority })
  }

  useEffect(() => {
    document.title = `Number of task(s): ${taskLists.length}`;
  });
  
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <form onSubmit={handleSetTaskList}>
            <div className="field">
              <label className="label">Task Name</label>
              <div className="control">
                <input type="text" className="input" value={task.taskName} name="taskName" onChange={handleSetTask} />
              </div>
            </div>
            <div className="field">
              <label className="label">Task Priority</label>
              <div className="control">
                <div className="select">
                  <select name="taskPriority" value={task.taskPriority} onChange={handleSetTask}>
                    {
                      getTaskPriorities().map((val, idx) =>
                        <option key={val.priorityKey} value={val.priorityKey}>{val.priorityName}</option>
                      )
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" onClick={handleSetTaskList}>Submit</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </form>
        </div>
        <div className="column">
          <ul>
            {
              taskLists.map((val, idx) => 
                <li key={idx}>
                  {`${val.taskName} (${getTaskPriorities(val.taskPriority).priorityName})`}
                  <button className="button is-danger" onClick={() => deleteTask(idx)}>Delete</button>
                  <button className="button is-link" onClick={() => editTask(idx)}>Edit</button>
                </li>
              )
            }
          </ul>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <TaskStatus taskStatusTitle="Task New"/>
        </div>
        <div className="column">
          <TaskStatus taskStatusClass="is-link" taskStatusTitle="Task Inprogress" />
        </div>
        <div className="column">
          <TaskStatus taskStatusClass="is-success" taskStatusTitle="Task Done" />
        </div>
      </div>
    </div>
  );
}

export default App;