import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/';
import Time from './componentes/Time/';
import Rodape from './componentes/Rodape/index.js';
import { v4 as uuidv4 } from 'uuid';


function App() {

  // Objeto com os times e suas propriedades
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Samba",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Rock",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Pagode",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Pop",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "Forró",
      cor: "#DB6EBF",
      },
    {
      id: uuidv4(),
      nome: "Funk",
      cor: "#FF8A05",
    },
    {
      id: uuidv4(),
      nome: "Axé",
      cor: "#FF8A29",
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    //Aqui o setColabs. está pegando todos os colaboradores
    // que já existem e, no final, da array deles, ADICIONANDO o novo
  }

  // Função para alterar a cor do time
  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if (time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id){
      setColaboradores(colaboradores.map(colaborador => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito
        }
        return colaborador
      }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
      cadastrarTime={cadastrarTime} 
      times={times.map(time => time.nome)} 
      aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      
      {/* Renderizando times dinamicamente a partir da array "times" */}
      {times.map(time => <Time
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          id={time.id}
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor} 
          aoDeletar={deletarColaborador}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
      />
      )}
      
      <Rodape />
    </div>
  );
}


export default App;
