// TELA PRINCIPAL
import React from 'react';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div data-testid="home-initial-message">
        <h1>ESSA e a home</h1>
        <p>Minha pagina inicial</p>
      </div>
    );
  }
}

export default Home;
