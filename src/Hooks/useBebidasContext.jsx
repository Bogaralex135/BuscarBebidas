import { useContext } from 'react'
import { BebidasContext } from '../Context/bebidasProvider'

/**
 * Returns the BebidasContext using the useContext hook.
 *
 * @return {object} The BebidasContext object.
 * @throws {Error} If useBebidasContext is not used within a BebidasContextProvider.
 */
export const useBebidasContext = () => {
  if (!BebidasContext) {
    throw new Error(
      'useBebidasContext must be used within a BebidasContextProvider'
    )
  }

  return useContext(BebidasContext)
}
