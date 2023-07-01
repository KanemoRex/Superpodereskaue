import React, { useState } from 'react';

const PowerRanking = () => {
  const [powerLevel, setPowerLevel] = useState(0);
  const [ranking, setRanking] = useState('');
  const [image, setImage] = useState('');

  const handlePowerLevelChange = (event) => {
    setPowerLevel(Number(event.target.value));
  };

  const rankPower = () => {
    if (powerLevel < 50) {
      setRanking('Rank D');
      setImage('link_da_imagem_rank_d');
    } else if (powerLevel < 100) {
      setRanking('Rank C');
      setImage('link_da_imagem_rank_c');
    } else if (powerLevel < 150) {
      setRanking('Rank B');
      setImage('link_da_imagem_rank_b');
    } else if (powerLevel < 200) {
      setRanking('Rank A');
      setImage('link_da_imagem_rank_a');
    } else {
      setRanking('Rank S');
      setImage('link_da_imagem_rank_s');
    }
  };

  return (
    <div>
      <h2>Ranqueador de Nível de Poder</h2>
      <label>
        Nível de Poder:
        <input type="number" value={powerLevel} onChange={handlePowerLevelChange} />
      </label>
      <br />
      <button onClick={rankPower}>Ranquear Nível de Poder</button>
      <br />
      <h3>Ranqueamento: {ranking}</h3>
      {image && <img src={image} alt="Ranqueamento de Poder" />}
    </div>
  );
};

export default PowerRanking;
