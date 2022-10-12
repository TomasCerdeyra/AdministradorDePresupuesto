import React from 'react'
import Gasto from '../Gasto/Gasto'

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtros,
    gastosFiltrados
}) => {
    return (
        <div className='listado-gastos contenedor'>


            {
                filtros ? (
                    <>
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay Gastos en esta categoría'}</h2>
                        {
                            gastosFiltrados.map(gasto => (
                                < Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))
                        }
                    </>
                ) :
                    (
                        <>
                            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
                            {
                                gastos.map(gasto => (
                                    < Gasto
                                        key={gasto.id}
                                        gasto={gasto}
                                        setGastoEditar={setGastoEditar}
                                        eliminarGasto={eliminarGasto}
                                    />
                                ))
                            }
                        </>
                    )
            }
        </div>
    )
}

export default ListadoGastos