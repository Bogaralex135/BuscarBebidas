import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import { useCategoriasContext } from '../Hooks/useCategoriasContext'
import { useState } from 'react'
import { useBebidasContext } from '../Hooks/useBebidasContext'

export function Formulario() {
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: '',
  })
  const [error, setError] = useState('')

  const { categorias } = useCategoriasContext()
  const { obtenerBebidas } = useBebidasContext()

  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(busqueda).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')
    obtenerBebidas(busqueda)
  }

  return (
    <Form onSubmit={handleSubmit} className='mb-4'>
      {error && (
        <Alert variant='danger' className='text-center'>
          {error}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: Tequila, Vodka, etc'
              id='nombre'
              value={busqueda.nombre}
              onChange={e =>
                setBusqueda({ ...busqueda, nombre: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
            <Form.Select
              id='categoria'
              value={busqueda.categoria}
              onChange={e =>
                setBusqueda({ ...busqueda, categoria: e.target.value })
              }>
              <option value=''>- Selecione una categoría -</option>
              {categorias.map(categoria => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}>
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-end'>
        <Col md={3}>
          <Button
            variant='danger'
            className='w-100 text-uppercase'
            type='submit'>
            Buscar Bebida
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
