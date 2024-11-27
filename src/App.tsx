import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import styles from './styles/App.module.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
    setCompletedTasks([...completedTasks, false]);
  };

  const completeTask = (index: number) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  // Função para reabrir uma tarefa concluída
  const reopenTask = (index: number) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = false; // Marca como pendente novamente
    setCompletedTasks(updatedCompletedTasks);
  };

  // Separando tarefas pendentes e concluídas
  const pendingTasks = tasks.filter((_, index) => !completedTasks[index]);
  const completedTasksList = tasks.filter((_, index) => completedTasks[index]);

  return (
    <div className={styles.container}>
      <TaskInput onAddTask={addTask} />

      {/* Tarefas Pendentes */}
      <div>
        <h2>Tarefas a Fazer - {pendingTasks.length}</h2>
        {pendingTasks.map((task, index) => (
          <TaskItem
            key={`pending-${index}`}
            task={task}
            onComplete={() => completeTask(index)} // Passando o index diretamente
            onDelete={() => deleteTask(index)} // Passando o index diretamente
            isCompleted={completedTasks[index]} // Estado de completada da tarefa
            onReopen={() => reopenTask(index)} // Função para reabrir a tarefa
          />
        ))}
      </div>

      {/* Tarefas Concluídas */}
      {completedTasksList.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h2>Tarefas Feitas - {completedTasksList.length}</h2>
          {completedTasksList.map((task, index) => (
            <TaskItem
              key={`completed-${index}`}
              task={task}
              onComplete={() => completeTask(index)} // Passando o index diretamente
              onDelete={() => deleteTask(index)} // Passando o index diretamente
              isCompleted={completedTasks[index]} // Estado de completada da tarefa
              onReopen={() => reopenTask(index)} // Função para reabrir a tarefa
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
