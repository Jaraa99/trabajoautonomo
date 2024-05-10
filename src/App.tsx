import React, { useState, useEffect } from 'react';

const useContadorProduccion = () => {
  const [produccion, setProduccion] = useState(0);
  const [ganancia, setGanancia] = useState(0);

  const aumentarProduccion = () => {
    setProduccion(produccion + 5);
  };

  useEffect(() => {
    
    setGanancia(produccion * 5); 
  }, [produccion]);

  return { produccion, ganancia, aumentarProduccion };
};

const ContadorProduccion = () => {
  const { produccion, ganancia, aumentarProduccion } = useContadorProduccion();

  return (
    <div>
      <h2>Producción: {produccion}</h2>
      <h2>Ganancia: {ganancia}</h2>
      <button onClick={aumentarProduccion}>Aumentar Producción</button>
    </div>
  );
};

export default ContadorProduccion;
