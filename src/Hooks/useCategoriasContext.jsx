import { useContext } from 'react'
import { CategoriasContext } from '../Context/categoriasProvider'

/**
 * Returns the context value of the `CategoriasContext` hook.
 *
 * @return {object} The context value of the `CategoriasContext` hook.
 * @throws {Error} If `useCategoriasContext` is not used within a `CategoriasContextProvider`.
 */
export const useCategoriasContext = () => {
  if (!CategoriasContext) {
    throw new Error(
      'useCategoriasContext must be used within a CategoriasContextProvider'
    )
  }

  return useContext(CategoriasContext)
}
