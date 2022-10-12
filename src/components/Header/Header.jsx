import React from 'react'
import NuevoPresupuesto from '../NuevoPresupuesto/NuevoPresupuesto'
import ControlPresupuesto from '../ControlPresupuesto/ControlPresupuesto'

const Header = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
}) => {


    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValidPresupuesto ?
                <ControlPresupuesto 
                presupuesto={presupuesto}
                gastos={gastos}
                setGastos={setGastos}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                />
                :
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            }

        </header>
    )
}

export default Header