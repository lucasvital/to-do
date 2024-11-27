import React, { useState } from 'react';
import { ReactComponent as AddIcon } from '../assets/add-icon.svg';
import styles from '../styles/TaskInput.module.css';

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.input}
        value={task}
        onChange={handleChange}
        placeholder="Add a new task"
      />
      <button className={styles.addButton} onClick={handleAddTask}>
        <AddIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default TaskInput;
