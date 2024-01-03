import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const CategoriasContext = createContext()

/**
 * Retrieves a list of categories from an external API and sets the state
 * with the fetched data.
 *
 * @return {void}
 */
export const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([])

  /**
   * Asynchronously obtains the list of categories from the given API endpoint and sets the state.
   *
   * @return {Promise<void>} - A promise that resolves when the categories have been obtained successfully or rejects with an error.
   */
  async function obtenerCategorias() {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const { data } = await axios.get(url)
      setCategorias(data.drinks)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  )
}
