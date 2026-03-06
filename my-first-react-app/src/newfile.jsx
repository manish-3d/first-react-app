function Listitem(props){
    return <li>{props.animal}</li>;
}

function List(props){
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("l")
                    ? <Listitem key={animal} animal={animal}/>
                    : null;
            })}
        </ul>
    );
}

function App(){
    const animals = ["dog","cat","leopard","lion"];

    return (
        <div>
            <h1>Animals:</h1>
            <List animals={animals}/>
        </div>
    );
}

export default App;
const todos = [
  { task: "mow the yard", id: 1 },
  { task: "Work on Odin Projects", id: 2 },
  { task: "feed the cat", id: 3 }
];
function TodoList(){
    return (
        <ul>
            {todo.map((todo) => (
                <li key = {todo.id}>{todo.task}</li>
            ))}
        </ul>
    );
}