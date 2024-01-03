import { useBebidasContext } from '../Hooks/useBebidasContext'
import { Row, Col } from 'react-bootstrap'
import { Bebida } from './Bebida'

export function ListadoBebidas() {
  const { bebidas } = useBebidasContext()

  return (
    <Row>
      {bebidas.map(bebida => (
        <Bebida key={bebida.idDrink} bebida={bebida} />
      ))}
    </Row>
  )
}
