import React, { useState } from 'react'
import CerrarBtn from '../../img/cerrar.svg'
const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 1000)
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CerrarBtn}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo gasto</legend>

                <div className='campo'>
                    <label htmlFor="nombre">Nombre</label>

                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade el nombre'
                        value={nombre}
                        onChange={e=> setNombre(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>

                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad del gasto: ej. 300'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value)) }
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categias">Cantegorias</label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e=> setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Gastos Varios">Gastos Varios</option>
                        <option value="Casa">Casa</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Salud">Salud</option>
                        <option value="Subscipciones">Subscipciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value='Añadir Gasto'
                />
            </form>
        </div>
    )
}

export default Modal