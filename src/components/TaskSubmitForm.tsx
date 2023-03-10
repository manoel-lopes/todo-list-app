import React, { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

export type TaskTypes = {
  id: string
  title: string
  isComplete: boolean
}

type TaskSubmitFormProps = {
  tasks: TaskTypes[]
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>
}

export function TaskSubmitForm({ tasks, setTasks }: TaskSubmitFormProps) {
  const [newTask, setNewTask] = useState('')

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault()

    setTasks([
      { id: crypto.randomUUID(), title: newTask, isComplete: false },
      ...tasks,
    ])
    setNewTask('')
  }

  function handleTaskInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return (
    <form
      onSubmit={handleTaskSubmit}
      className="flex justify-center items-center gap-2 mt-[-2rem]"
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa..."
        value={newTask}
        onChange={handleTaskInput}
        className="w-full h-full p-4 text-gray-100 bg-neutral-800 border border-neutral-900 rounded-md focus-visible:border-violet-700 focus:outline-none"
        required
      />
      <button
        type="submit"
        title="Criar nova tarefa"
        className="flex items-center p-4 gap-1 text-gray-50 border-none rounded-md bg-blue-500 transition-colors duration-150 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
      >
        Criar <PlusCircle className="text-2xl" />
      </button>
    </form>
  )
}
