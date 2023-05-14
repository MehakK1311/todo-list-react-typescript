import { Todo } from "../models/models"
import SingleTodo from "./singleTodo"
import "./styles.css"

interface Props{
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoList = ({todos, setTodos}:Props) => {
  return (
    <div className="todos">
        {todos.map(todo=>(
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        ))}
    </div>
  )
}

export default TodoList