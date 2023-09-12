import './App.css';

function App() { 
  const nota = "Minha primeira nota";
  const titulo= "Minha primeira anotação";
  const data = "12/09/2023";
  const titulo2 = "Minha segunda anotação"
  const data2 = "13/09/2023"
  const nota2= "Minhas anotações melhoradas"
  return (
    <div className="App">
      <h1>Bloco de notas </h1>
      <Nota data={data} titulo={titulo} nota={nota}> </Nota>
      
      <Nota data={data2} titulo={titulo2} nota={nota2}> </Nota>
      
    </div>
  );
}

function Nota({data,titulo,nota}) {           

  return (
    <div> 
      <div>{data}</div>

      <div>{titulo}</div>

      <div>{nota}</div>
    </div>
  )
}
export default App;
