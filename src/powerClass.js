import React, { useState } from 'react';

const PowerClass = () => {
  const [powerLevel, setPowerLevel] = useState(0);
  const [powerClass, setPowerClass] = useState('');
  const [image, setImage] = useState('');

  const handlePowerLevelChange = (event) => {
    setPowerLevel(Number(event.target.value));
  };

  const classifyPower = () => {
    if (powerLevel < 50) {
      setPowerClass('Classe Baixa');
      setImage('https://media.tenor.com/6a2iac6p5QMAAAAM/one-piece-usopp.gif');
    } else if (powerLevel < 100) {
      setPowerClass('Classe Média');
      setImage('https://media.tenor.com/NFlo735HwGsAAAAC/kaneki.gif');
    } else if (powerLevel < 150) {
      setPowerClass('Classe Alta');
      setImage('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWt0OWE4eDY2cjV3ZDM2aWtxcjUwemZmM25iMTZseGhpNGpmeGg0cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/t6sWsqKTTMyNa/200w.gif');
    } else {
      setPowerClass('Classe Super');
      setImage('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWx2NGlza2UzdjlsZzdra3phMWV1em9lNHFzZ3o2M240Nzh5YndoeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/19JSJ5ucu91R5D7a3w/giphy.gif');
    }
  };

  return (
    <div>
      <h2>Classificador de Nível de Poder</h2>
      <label>
        Nível de Poder:
        <input type="number" value={powerLevel} onChange={handlePowerLevelChange} />
      </label>
      <br />
      <button onClick={classifyPower}>Classificar Nível de Poder</button>
      <br />
      <h3>Classe: {powerClass}</h3>
      {image && <img src={image} alt="Classe de Poder" />}
    </div>
  );
};

export default PowerClass;
