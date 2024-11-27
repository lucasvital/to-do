// TaskList.tsx

import React from 'react';
import TaskItem from '../components/TaskItem';

interface Task {
  text: string;
  isCompleted: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (index: number) => void;
  onDelete: (index: number) => void;
  onReopen: (index: number) => void; // Adicionando a propriedade onReopen
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete, onReopen }) => {
  const pendingTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <div>
      {/* Tarefas Pendentes */}
      <div>
        <h2>Tarefas a Fazer - {pendingTasks.length}</h2>
        {pendingTasks.map((task, index) => (
          <TaskItem
            key={`pending-${index}`}
            task={task.text}
            onComplete={() => onComplete(index)}
            onDelete={() => onDelete(index)}
            isCompleted={task.isCompleted}
            onReopen={() => onReopen(index)}  // Passando onReopen aqui
          />
        ))}
      </div>

      {/* Tarefas Concluídas */}
      {completedTasks.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h2>Tarefas Feitas - {completedTasks.length}</h2>
          {completedTasks.map((task, index) => (
            <TaskItem
              key={`completed-${index}`}
              task={task.text}
              onComplete={() => onComplete(index)}
              onDelete={() => onDelete(index)}
              isCompleted={task.isCompleted}
              onReopen={() => onReopen(index)}  // Passando onReopen aqui
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
