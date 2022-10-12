import React from 'react'

const Filtros = ({ filtros, setFiltros }) => {
    return (
        <div className='filtros sombra contenedor'>
            <form >
                <div className='campo'>
                    <label>Filtrar Gastos</label>
                    <select
                        name=""
                        id=""
                        value={filtros}
                        onChange={e=> setFiltros(e.target.value)}
                    >
                        <option value="">-- Todas las Categorías --</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Gastos">Gastos Varios</option>
                        <option value="Casa">Casa</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripciones">Suscripciones</option>

                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros