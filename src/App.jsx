import { Container } from 'react-bootstrap'
import { Formulario } from './Components/Formulario'
import { CategoriasProvider } from './Context/categoriasProvider'
import { BebidasProvider } from './Context/bebidasProvider'
import { ListadoBebidas } from './Components/ListadoBebidas'
import { ModalBebida } from './Components/ModalBebida'

export default function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className='py-5'>
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className='mt-5'>
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}
