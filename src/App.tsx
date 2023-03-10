import { useLocalStorage } from './hooks/use-local-storage'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TaskSubmitForm, Task } from './components/TaskSubmitForm'

export function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])
  return (
    <>
      <Header />
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 px-2 sm:px-6 lg:px-8 pb-4">
        <TaskSubmitForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  )
}
