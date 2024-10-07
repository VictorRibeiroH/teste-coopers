import {
    MainContainer,
    TaskSection,
    TaskTitle,
    TaskDescription
} from './style'

const ToDoList = () => {
  return (
    <MainContainer as="main">
        <TaskSection as="section">
            <TaskTitle as="h1">To-do list</TaskTitle>
            <TaskDescription as="p">Drag and drop to set your main priorities, check when done and create what´s new.</TaskDescription>
        </TaskSection>
    </MainContainer>
  )
}

export default ToDoList