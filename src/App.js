import React from 'react';
import PowerCalculator from './powerCalculator';
import PowerRanking from './powerRanking';
import PowerClass from './powerClass';


const App = () => {
  return (
    <div className="App">
      <h1>Bem-vindo ao Meu Site de Superpoderes!</h1>
      <PowerCalculator />
      <PowerRanking />
      <PowerClass />
    </div>
  );
};

export default App;