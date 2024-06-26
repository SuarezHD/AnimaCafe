import React from 'react';

function FilaProducto({ producto }) {
  return (
    <tr>
      <td style={{ textDecoration: producto.stock === 0 ? 'line-through' : 'none' }}>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
    </tr>
  );
}

export default FilaProducto;
