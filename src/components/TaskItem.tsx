import React, { useState } from 'react';
import styles from '../styles/TaskItem.module.css';
import { ReactComponent as CheckIcon } from '../assets/check-icon.svg';
import { ReactComponent as DeleteIcon } from '../assets/delete-icon.svg';
import { ReactComponent as DeleteHoverIcon } from '../assets/delete_selected-icon.svg'; // Novo ícone de hover
import { ReactComponent as CheckIconHoverIcon } from '../assets/check_selected-icon.svg'; // Novo ícone de hover do check
import { ReactComponent as EllipsisIcon } from '../assets/ellipsis-icon.svg'; // Ícone de três pontinhos

interface TaskItemProps {
  task: string;
  onComplete: () => void;
  onDelete: () => void;
  onReopen: () => void;
  isCompleted: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete, onDelete, onReopen, isCompleted }) => {
  const [isCheckHovered, setIsCheckHovered] = useState(false);  // Estado de hover para o ícone de check
  const [isDeleteHovered, setIsDeleteHovered] = useState(false);  // Estado de hover para o ícone de delete
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado do menu de opções

  return (
    <div
      className="Rectangle2"
      style={{
        width: 432,
        height: 75,
        background: '#15101C',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <div
        className={styles.taskText}
        style={{ 
          textDecoration: isCompleted ? 'line-through' : 'none',
          color: isCompleted ? '#78CFB0' : '#9E78CF',
        }}
      >
        {task}
      </div>
      <div className={styles.icons}>
        {isCompleted ? (
          // Exibe os três pontinhos quando a tarefa está concluída
          <div
            className={styles.ellipsisIcon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}  // Toggle para abrir/fechar o menu
          >
            <EllipsisIcon />
          </div>
        ) : (
          <>
            <div
              className={styles.checkIcon}
              onClick={onComplete}
              onMouseEnter={() => setIsCheckHovered(true)}
              onMouseLeave={() => setIsCheckHovered(false)}
            >
              {isCheckHovered ? <CheckIconHoverIcon /> : <CheckIcon />}
            </div>

            <div
              className={styles.deleteIcon}
              onClick={onDelete}
              onMouseEnter={() => setIsDeleteHovered(true)}
              onMouseLeave={() => setIsDeleteHovered(false)}
            >
              {isDeleteHovered ? <DeleteHoverIcon /> : <DeleteIcon />}
            </div>
          </>
        )}
      </div>

      {/* Menu de opções para tarefas concluídas */}
      {isMenuOpen && isCompleted && (
        <div className={styles.menu}>
          <div onClick={onReopen}>Reabrir</div>
          <div onClick={onDelete}>Excluir</div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
