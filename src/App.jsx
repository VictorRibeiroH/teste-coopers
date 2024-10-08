import './App.css'
import Home from './components/Home'
import TaskList from './components/TaskList'
import ToDoList from './components/ToDoList'
import GoodThings from './components/GoodsThings'

function App() {
  return (
    <div>
      <Home />
      <ToDoList />
      <TaskList />
      <GoodThings />
    </div>
  )
}

export default App
