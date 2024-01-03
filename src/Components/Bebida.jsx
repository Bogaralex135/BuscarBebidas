import { Col, Button, Card } from 'react-bootstrap'
import { useBebidasContext } from '../Hooks/useBebidasContext'

export function Bebida({ bebida }) {
  const { handleShowModal, handleBebidaId } = useBebidasContext()

  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            variant='warning'
            className='w-100'
            onClick={() => {
              handleShowModal()
              handleBebidaId(bebida.idDrink)
            }}>
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
