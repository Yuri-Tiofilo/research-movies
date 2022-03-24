import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Container } from './styles'

type Props = {
  handleMoreResults(previous: boolean): void
  currentPage: number
}

const Pagination = ({ handleMoreResults, currentPage }: Props) => {
  return (
    <Container>
      <button
        disabled={currentPage === 1}
        arial-label="Voltar pagina"
        onClick={() => handleMoreResults(false)}
        type="button"
      >
        <FiArrowLeft style={{ marginRight: 5 }} /> Voltar Página
      </button>
      <button
        arial-label="Proxima pagina"
        onClick={() => handleMoreResults(true)}
        type="button"
      >
        Próxima Página
        <FiArrowRight style={{ marginLeft: 5 }} />
      </button>
    </Container>
  )
}

export { Pagination }
