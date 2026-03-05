import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import Header from './layouts/Header.tsx'
import { Provider } from "react-redux";
import { store } from "./store/store";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
