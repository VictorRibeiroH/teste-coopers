import FlexContainer from '../../utils/FlexContainer'
import {
    Page,
    Title,
    Box,
    Text,
    Content,
    CircleToDo,
    CircleDone,
    Label,
    Button,
    Delete
} from './style' 

const TaskList = () => {
  return (
    <Page id="todo"> 
        <Box color="#E88D39">
            <Title>To-do</Title>
            <div>
                <Text>Take a breath</Text>
                <Text>Start doing.</Text>
            </div>

            <Content mt="2rem" mb="2.5rem">
                <FlexContainer gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>this is a new task</Label>
                </FlexContainer>

                <FlexContainer gap={16}>
                    <CircleToDo></CircleToDo>
                    <Label>Develop the To-do list page</Label>
                </FlexContainer>

                <FlexContainer jc="space-between">
                    <FlexContainer gap={16}>
                        <CircleToDo></CircleToDo>
                        <Label>This item label may be edited</Label>
                    </FlexContainer>
                    <Delete>delete</Delete>
                </FlexContainer>
            </Content>

            <Button>
                erase all
            </Button>
        </Box>

        <Box color="#4AC959">
            <Title>Done</Title>
            <div>
                <Text>Congratulions!</Text>
                <Text>You have done 5 tasks</Text>
            </div>

            <Content mt="44px" mb="60px">
                <FlexContainer jc="space-between">
                    <FlexContainer gap={16}>
                            <CircleDone></CircleDone>
                            <Label>Get FTP credentials</Label>
                    </FlexContainer>
                    <Delete>delete</Delete>
                </FlexContainer>

                <FlexContainer gap={16}>
                    <CircleDone></CircleDone>
                    <Label>Home Page Design</Label>
                </FlexContainer>
            </Content>

            <Button>
                erase all
            </Button>
        </Box>
    </Page>
  )
}

export default TaskList