import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
    this.reloadPage = this.reloadPage.bind(this)
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado por el ErrorBoundary:', error, errorInfo)
  }

  reloadPage() {
    localStorage.clear()
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="main-error-page">
          <h1 className="error-title">
            estamos realizando cambios en nuestro sitio, por favor recarge la
            pagina
          </h1>
          <h2 className="error-subtitle">¿Has intentado recargar la pagina?</h2>
          <button onClick={this.reloadPage}>Recargar</button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
