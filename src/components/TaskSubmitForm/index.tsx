import React, { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css'

export type Task = {
  id: string
  title: string
  isComplete: boolean
}

export type UpdateTaskListFn = (value: Task[]) => void

type TaskSubmitFormProps = {
  tasks: Task[]
  setTasks: UpdateTaskListFn
}

export function TaskSubmitForm({ tasks, setTasks }: TaskSubmitFormProps) {
  const [newTask, setNewTask] = useState<{ title: string }>({ title: '' })

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault()
    setTasks([createNewTask(), ...tasks])
    setNewTask({ title: '' })
  }

  function createNewTask(): Task {
    return {
      id: crypto.randomUUID(),
      title: newTask.title,
      isComplete: false,
    }
  }

  function handleTaskInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTask({ title: event.target.value })
  }

  return (
    <form onSubmit={handleTaskSubmit} className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa..."
        value={newTask.title}
        onChange={handleTaskInput}
        className={styles.taskInput}
        required
      />
      <button
        type="submit"
        title="Criar nova tarefa"
        className={`bg-blue-500 ${styles.taskSubmitButton}`}
      >
        Criar <PlusCircle className="text-2xl" />
      </button>
    </form>
  )
}
