import React from 'react';
import Api from './Api';
import './Style.css';

class App extends React.Component {
  state= {
    filmes: [],
  }

  async componentDidMount(){ // Camado quando quaquer atualização ocorrer
    const response = await Api.get(''); // get esta vazio pois não estou passndo nada na URL da Api
    
    this.setState({ filmes:response.data }); // Atualisa o estado com base na resposta
  }

  render() {
    const { filmes } = this.state;
    const regex = /(<([^>]+)>)/ig;

    return (
      <div>
        <h1>Listar os filmes</h1>
  
        {filmes.map(filme => (
          <div className="filme">
            <h3 key={filme.show.id}>
              <strong>Título </strong> {filme.show.name}
            </h3>
            <div>
              {filme.show.summary.replace(regex, '')}
              {/* essa constante regex tira as tags html dentro do texto */}
            </div>
            <figure>
              <img src={filme.show.image.original} alt='nome'></img>
            </figure>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
