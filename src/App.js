import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css'
import './App.css'
import TaskStatus from './components/TaskStatus';

const App = () => {
  const TASK_PRIORITY_LOW = 'L';
  const TASK_PRIORITY_MEDIUM = 'M';
  const TASK_PRIORITY_HARD = 'H';

  const TASK_STATUS_NEW = 'N';
  const TASK_STATUS_INPROGRESS = 'I';
  const TASK_STATUS_DONE = 'D';

  const INIT_FORM_STATE = 'CREATE';

  const [task, setTask] = useState({ taskId: '', taskName: '', taskPriority: TASK_PRIORITY_LOW, taskStatus: TASK_STATUS_NEW });
  const [taskLists, setTaskList] = useState([]);
  const [formState, setFormState] = useState(INIT_FORM_STATE);

  const generateUniqId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  const getTaskPriorities = (key) => {
    const taskPriorities = [
      { priorityKey: TASK_PRIORITY_LOW, priorityName: 'Low', priorityIndicator: 'is-primary' },
      { priorityKey: TASK_PRIORITY_MEDIUM, priorityName: 'Medium', priorityIndicator: 'is-warning' },
      { priorityKey: TASK_PRIORITY_HARD, priorityName: 'Hard', priorityIndicator: 'is-danger' },
    ];

    if (key == null) {
      return taskPriorities;
    }

    return taskPriorities.find(obj => {
      return obj.priorityKey === key;
    });
  };

  const getTaskStatuses = (key) => {
    const taskStatuses = [
      { statusKey: TASK_STATUS_NEW, statusName: 'New' },
      { statusKey: TASK_STATUS_INPROGRESS, statusName: 'Inprogress' },
      { statusKey: TASK_STATUS_DONE, statusName: 'Done' },
    ];

    if (key == null) {
      return taskStatuses;
    }

    return taskStatuses.find(obj => {
      return obj.statusKey === key;
    });
  }

  const handleSetTask = (e) => {
    setTask({ 
      ...task, [e.target.name]: e.target.value 
    })
  };

  const resetTask = (e) => {
    setTask({ taskId: '', taskName: '', taskPriority: TASK_PRIORITY_LOW, taskStatus: TASK_STATUS_NEW })
  }

  const handleSetTaskList = (e) => {
    e.preventDefault();
    if (formState === INIT_FORM_STATE) {
      setTaskList([...taskLists, { taskId: generateUniqId(), taskName: task.taskName, taskPriority: task.taskPriority, taskStatus: task.taskStatus }]);
      resetTask();
    } else {
      let taskTemp = [...taskLists];
      const taskIdTemp = taskTemp.findIndex((obj) => {
        return obj.taskId === formState;
      })

      taskTemp[taskIdTemp].taskName = task.taskName;
      taskTemp[taskIdTemp].taskPriority = task.taskPriority;
      taskTemp[taskIdTemp].taskStatus = task.taskStatus;

      setTaskList(taskTemp);
      resetTask();
      setFormState(INIT_FORM_STATE);
    }
  }

  const clickTaskItem = (taskId, action) => {
    switch (action) {
      case 'edit':
        editTask(taskId);
        break;

      case 'delete':
        deleteTask(taskId);
        break;
    
      default:
        // do nothing
        break;
    }
  }

  const deleteTask = (taskId) => {
    const taskListsTemp = taskLists.filter((obj, idx) => {
      return obj.taskId !== taskId;
    });

    setTaskList(taskListsTemp);
    setFormState(INIT_FORM_STATE);
  }

  const editTask = (taskId) => {
    setFormState(taskId);
    const taskTemp = taskLists.find((obj, idx) => {
      return obj.taskId === taskId;
    })

    setTask({ taskId: taskTemp.taskId, taskName: taskTemp.taskName, taskPriority: taskTemp.taskPriority, taskStatus: taskTemp.taskStatus })
  }

  const getTaskListsBy = (filterBy, filterValue) => {
    let taskPriority = null;
    return taskLists.filter((obj) => {
      taskPriority = getTaskPriorities(obj.taskPriority);
      obj.taskPriorityName = taskPriority.priorityName;
      obj.taskPriorityIndicator = taskPriority.priorityIndicator;
      return obj[filterBy] === filterValue;
    })
  }

  useEffect(() => {
    document.title = `New (${getTaskListsBy('taskStatus', TASK_STATUS_NEW).length}) | 
      Inprogress (${getTaskListsBy('taskStatus', TASK_STATUS_INPROGRESS).length}) | 
      Done (${getTaskListsBy('taskStatus', TASK_STATUS_DONE).length})`;
  });
  
  return (
    <div className="container">
      <form onSubmit={handleSetTaskList}>
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Task Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input type="text" className="input" value={task.taskName} name="taskName" onChange={handleSetTask} />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Priority</label>
              </div>
              <div className="field-body">
                <div className="field">
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
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Status</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select name="taskStatus" value={task.taskStatus} onChange={handleSetTask}>
                        {
                          getTaskStatuses().map((val, idx) =>
                            <option key={val.statusKey} value={val.statusKey}>{val.statusName}</option>
                          )
                        }
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <button className="button is-primary" onClick={handleSetTaskList}>Save</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>
          </div>
        </div>
      </form>
      <div className="columns">
        <div className="column">
          <TaskStatus 
            taskStatusLists={getTaskListsBy(`taskStatus`, TASK_STATUS_NEW)} 
            taskStatusTitle={getTaskStatuses(TASK_STATUS_NEW).statusName} 
            onClick={(idx, action) => clickTaskItem(idx, action)} />
        </div>
        <div className="column">
          <TaskStatus 
            taskStatusLists={getTaskListsBy(`taskStatus`, TASK_STATUS_INPROGRESS)} 
            taskStatusTitle={getTaskStatuses(TASK_STATUS_INPROGRESS).statusName} 
            onClick={(idx, action) => clickTaskItem(idx, action)} />
        </div>
        <div className="column">
          <TaskStatus 
            taskStatusLists={getTaskListsBy(`taskStatus`, TASK_STATUS_DONE)} 
            taskStatusTitle={getTaskStatuses(TASK_STATUS_DONE).statusName}
            onClick={(idx, action) => clickTaskItem(idx, action)} />
        </div>
      </div>
    </div>
  );
}

export default App;
