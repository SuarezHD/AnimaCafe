import React from 'react';
import { PRODUCTOS } from './data';
import TablaProductos from './TablaProductos';

function App() {
  return (
    <div className="App">
      <h1>Ánima Café</h1>
      <TablaProductos productos={PRODUCTOS} />
    </div>
  );
}

export default App;
