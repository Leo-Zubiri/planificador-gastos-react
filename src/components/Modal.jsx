import { useState } from "react"
import imgCerrarBtn from '../img/cerrar.svg'
import Mensaje from "./Mensaje";

const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');

    const ocultarModal = () => { 
        
        setAnimarModal(false);

        setTimeout(() => { 
            setModal(false);
        },500)
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        
        if([nombre,cantidad,categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => { 
                setMensaje('');
             },1500);
            return
        }

        guardarGasto({nombre,cantidad,categoria});
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={imgCerrarBtn} alt="Cerrar" 
                onClick={ocultarModal}
            />
        </div>

        <form
            className={`formulario ${animarModal ? 'animar':'cerrar'}`} 
            onSubmit={handleSubmit}
            >
            <legend>Nuevo Gasto</legend>

            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>

                <input 
                    id="nombre"
                    type="text"
                    placeholder="Añade el nombre del gasto"
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value)}}
                />
            </div>

            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>

                <input 
                    id="cantidad"
                    type="number"
                    placeholder="Añade la cantidad del gasto"
                    value={cantidad}
                    onChange={(e) => { setCantidad(e.target.value) }}
                />
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoria</label>

                <select 
                    id="categoria"
                    value={categoria}
                    onChange={(e) => { setCategoria(e.target.value) }}
                >
                    <option value=''>-- Seleccione -- </option>
                    <option value='ahorro'> Ahorro </option>
                    <option value='comida'> Comida </option>
                    <option value='casa'> Casa </option>
                    <option value='ocio'> Ocio </option>
                    <option value='gastos'> Gastos Varios </option>
                    <option value='salud'> Salud </option>
                 </select>
            </div>

            <input type="submit" value='Añadir Gasto'/>
        </form>
    </div>
  )
}

export default Modal