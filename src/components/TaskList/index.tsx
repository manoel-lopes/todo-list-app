import React from 'react'
import { Check, ClipboardText, Trash } from 'phosphor-react'

import { Task, UpdateTaskListFn } from '../TaskSubmitForm'

import styles from './styles.module.css'

type TaskSubmitFormProps = {
  tasks: Task[]
  setTasks: UpdateTaskListFn
}

export function TaskList({ tasks, setTasks }: TaskSubmitFormProps) {
  function handleTaskComplete(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isComplete = !task.isComplete
        }
        return task
      }),
    )
  }

  function handleTaskDelete(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const taskCount = tasks.length
  const taskCompleteCount = tasks.filter((task) => task.isComplete).length
  return (
    <>
      <div className={styles.stats}>
        <p>
          Tarefas criadas <span>{taskCount}</span>
        </p>
        <p>
          Concluídas{' '}
          {taskCount ? (
            <span>
              {taskCompleteCount} de {taskCount}
            </span>
          ) : (
            <span>{taskCount}</span>
          )}
        </p>
      </div>
      {taskCount ? (
        <ul className="grid gap-4">
          {tasks.map((task) => (
            <li key={task.id} className={styles.task}>
              <button
                onClick={() => handleTaskComplete(task.id)}
                className={
                  task.isComplete ? styles.btnComplete : styles.btnIncomplete
                }
              >
                <Check
                  className={`${!task.isComplete && 'opacity-0'}`}
                  weight="bold"
                />
              </button>
              <span
                className={
                  task.isComplete ? styles.taskComplete : styles.taskIncomplete
                }
              >
                {task.title}
              </span>
              <button
                onClick={() => handleTaskDelete(task.id)}
                className={styles.deleteTaskButton}
              >
                <Trash className="text-2xl" weight="light" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.emptyTaskList}>
          <ClipboardText className="text-6xl opacity-50" weight="light" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  )
}
