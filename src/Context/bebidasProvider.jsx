import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const BebidasContext = createContext()

/**
 * Asynchronously obtains beverages based on the provided data.
 *
 * @param {Object} datos - The data object containing the name and category of the beverages.
 * @param {string} datos.nombre - The name of the beverages.
 * @param {string} datos.categoria - The category of the beverages.
 * @return {Promise<void>} - Resolves with the retrieved data or rejects with an error.
 */
export function BebidasProvider({ children }) {
  const [bebidas, setBebidas] = useState([])
  const [modal, setModal] = useState(false)
  const [bebidaId, setBebidaId] = useState(null)
  const [bebida, setBebida] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    async function obtenerBebidaId() {
      if (!bebidaId) return

      try {
        setCargando(true)
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
        const { data } = await axios.get(url)

        setBebida(data.drinks[0])
      } catch (error) {
        console.error(error)
      } finally {
        setCargando(false)
      }
    }
    obtenerBebidaId()
  }, [bebidaId])

  /**
   * Asynchronously obtains beverages based on the provided data.
   *
   * @param {Object} datos - The data object containing the name and category of the beverages.
   * @param {string} datos.nombre - The name of the beverages.
   * @param {string} datos.categoria - The category of the beverages.
   * @return {Promise<void>} - Resolves with the retrieved data or rejects with an error.
   */
  async function obtenerBebidas(datos) {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
      const { data } = await axios.get(url)

      setBebidas(data.drinks)
    } catch (error) {
      console.error(error)
    }
  }

  function handleShowModal() {
    setModal(!modal)
  }

  const handleBebidaId = id => {
    setBebidaId(id)
  }

  return (
    <BebidasContext.Provider
      value={{
        obtenerBebidas,
        bebidas,
        handleShowModal,
        modal,
        handleBebidaId,
        bebida,
        cargando,
      }}>
      {children}
    </BebidasContext.Provider>
  )
}
