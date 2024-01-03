import { Modal, Image } from 'react-bootstrap'
import { useBebidasContext } from '../Hooks/useBebidasContext'

export function ModalBebida() {
  const { modal, handleShowModal, bebida, cargando } = useBebidasContext()

  const mostrarIngredientes = () => {
    let ingredientes = []
    for (let i = 1; i < 16; i++) {
      if (bebida[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>
            {bebida[`strIngredient${i}`]}: {bebida[`strMeasure${i}`]}
          </li>
        )
      }
    }
    return ingredientes
  }

  return (
    !cargando && (
      <Modal show={modal} onHide={handleShowModal}>
        <Image
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
          title={`Imagen de ${bebida.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{bebida.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='px-3 pt-3 pb-5'>
            <h2>Instrucciones</h2>
            <p>{bebida.strInstructions}</p>
            <h2>Ingredientes y cantidades</h2>
            {mostrarIngredientes()}
          </div>
        </Modal.Body>
      </Modal>
    )
  )
}
