import './App.css'
import Home from './components/Home'
import TaskList from './components/TaskList'
import ToDoList from './components/ToDoList'
import GoodThings from './components/GoodsThings'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Home />
      <ToDoList />
      <TaskList />
      <GoodThings />
      <Contact />
    </div>
  )
}

export default App
