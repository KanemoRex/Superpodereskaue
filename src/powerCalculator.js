import React, { useState } from 'react';

const PowerCalculator = () => {
  const [physicalStrength, setPhysicalStrength] = useState(0);
  const [spiritualStrength, setSpiritualStrength] = useState(0);
  const [powerLevel, setPowerLevel] = useState(0);
  const [powerClass, setPowerClass] = useState('');
  const [image, setImage] = useState('');

  const calculatePowerLevel = () => {
    const totalStrength = physicalStrength + spiritualStrength;
    setPowerLevel(totalStrength);

    if (totalStrength < 50) {
      setPowerClass('Classe Baixa');
      setImage('link_da_imagem_classe_baixa');
    } else if (totalStrength < 100) {
      setPowerClass('Classe Média');
      setImage('link_da_imagem_classe_media');
    } else {
      setPowerClass('Classe Alta');
      setImage('link_da_imagem_classe_alta');
    }
  };

  const handlePhysicalStrengthChange = (event) => {
    setPhysicalStrength(Number(event.target.value));
  };

  const handleSpiritualStrengthChange = (event) => {
    setSpiritualStrength(Number(event.target.value));
  };

  return (
    <div>
      <h2>Calculadora de Nível de Poder</h2>
      <label>
        Força Física:
        <input type="number" value={physicalStrength} onChange={handlePhysicalStrengthChange} />
      </label>
      <br />
      <label>
        Força Espiritual:
        <input type="number" value={spiritualStrength} onChange={handleSpiritualStrengthChange} />
      </label>
      <br />
      <button onClick={calculatePowerLevel}>Calcular Nível de Poder</button>
      <br />
      <h3>Nível de Poder: {powerLevel}</h3>
      <h3>Classe: {powerClass}</h3>
      {image && <img src={image} alt="Classe de Poder" />}
    </div>
  );
};

export default PowerCalculator;
