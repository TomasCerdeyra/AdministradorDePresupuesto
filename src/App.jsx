import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListadoGastos from './components/ListadoGastos/ListadoGastos';
import { generarId } from './helpers';
import Modal from './components/Modal/Modal';
import Filtros from './components/Filtros/Filtros';

function App() {
  //tomo valores de LS del presupuesto
  const presupuestoLs = Number(localStorage.getItem('presupuesto') ?? 0);
  //tomo valores de LS de los gastos
  const gastosLs = localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [];

  const [presupuesto, setPresupuesto] = useState(presupuestoLs);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  //ventana modal
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState(gastosLs);

  const [gastoEditar, setGastoEditar] = useState({});

  const [filtros, setFiltros] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  //Filtrar gastos
  useEffect(() => {
    if (filtros) {
      const gastosFilt = gastos.filter( gasto => gasto.categoria === filtros);
      setGastosFiltrados(gastosFilt);
    }
  }, [filtros])


  //Editar gastos
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true);
      }, 500)
    }
  }, [gastoEditar])

  //Guardar presupuesto en local
  useEffect(() => {
    //guardo presupuesto esta guardo presupuesto sino 0 en local
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);
  useEffect(() => {
    if (presupuestoLs > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  //Guardo los gastos en local
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 1000)
  }

  const guardarGasto = gasto => {
    if (gasto.id) {
      //actualizar
      //Si el Id de gast(Editar) es el mismo que el del gasto(del arrreglo) retorno el gasto sino el que estaba 
      const gastosActualizados = gastos.map(gastoState => gastoState.id == gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar({})
    } else {
      //Nuevo Gasto
      gasto.id = generarId();
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 1000)
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gastoState => gastoState.id != id);

    setGastos(gastosActualizados);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto &&
        <>
          <main>
            <Filtros
              filtros={filtros}
              setFiltros={setFiltros}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtros={filtros}
              gastosFiltrados={gastosFiltrados}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      }

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}
    </div>
  )
}

export default App
