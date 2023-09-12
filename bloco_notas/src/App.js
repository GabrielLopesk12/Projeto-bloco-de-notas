import './App.css';

function App() { 
  const nota = "Minha primeira nota";
  const titulo= "Titulo da anotação";
  const data = "12/09/2023";
  return (
    <div className="App">
      <h1>Bloco de notas </h1>
      <div>
          <div>{data}</div>

          <div>{titulo}</div>

          <div>{nota}</div>
      </div>
    </div>
  );
}

export default App;
