import React from 'react'

import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
       <h2>{gastos.length ? 'Gastos':'No hay gasto aún'}</h2>

       {gastos.map((gasto) => { 
        return <Gasto 
            key={gasto.id}
            gasto={gasto}
          />;
       })}
    </div>
  )
}

export default ListadoGastos