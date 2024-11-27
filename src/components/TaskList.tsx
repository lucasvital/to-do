import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  text: string;
  isCompleted: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (index: number) => void;
  onDelete: (index: number) => void;
  onReopen: (index: number) => void;  // Função para reabrir a tarefa
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete, onReopen }) => {
  // Separar as tarefas pendentes e concluídas
  const pendingTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <div>
      {/* Tarefas Pendentes */}
      <h2>Tarefas a Fazer - {pendingTasks.length}</h2>
      <div className="tasks-container">
        {pendingTasks.map((task, index) => (
          <TaskItem
            key={`pending-${index}`}
            task={task.text}
            onComplete={() => onComplete(tasks.indexOf(task))}
            onDelete={() => onDelete(tasks.indexOf(task))}
            onReopen={() => onReopen(tasks.indexOf(task))}
            isCompleted={task.isCompleted}
          />
        ))}
      </div>

      {/* Tarefas Concluídas */}
      {completedTasks.length > 0 && (
        <>
          <h2 style={{ marginTop: '30px' }}>Tarefas Feitas - {completedTasks.length}</h2>
          <div className="completed-container">
            {completedTasks.map((task, index) => (
              <TaskItem
                key={`completed-${index}`}
                task={task.text}
                onComplete={() => onComplete(tasks.indexOf(task))}
                onDelete={() => onDelete(tasks.indexOf(task))}
                onReopen={() => onReopen(tasks.indexOf(task))}  // Passa a função de reabertura
                isCompleted={task.isCompleted}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskList;
