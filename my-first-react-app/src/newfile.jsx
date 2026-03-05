function Listitem(prop){
    return <li key={prop.animal}>prop.animal</li>
}
function List(prop){
    return (<ul>
           { prop.animals.map((animal) =>{
            <Listitem key = {animal} prop = {animal}/>
})}
           </ul>);
}
function App(){
    const animals = ["dog","cat","leopard" ,"lion"];
    return (
        <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}