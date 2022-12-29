import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Router/App'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import PokemonProvider from './Context/PokemonProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </BrowserRouter>
)
