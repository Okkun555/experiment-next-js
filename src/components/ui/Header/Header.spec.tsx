import { render, screen, RenderResult } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  let renderResult: RenderResult

  beforeEach(() => {
    renderResult = render(<Header />)
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('should display app title render', () => {
    expect(screen.getByTestId('title')).toBeInTheDocument()
  })
})
