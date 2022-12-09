import { Header } from './Header'
import { TodoItems } from './Todo'

export const TodoItem = (pros: TodoItems) => {
  return (
    <div>
        <Header textLabel='Todos' />
         <h4>{pros.title}-{pros.status? "True": "False"}</h4> 
    </div>
  )
}
