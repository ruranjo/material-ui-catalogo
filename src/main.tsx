import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'

import { ThemeConfig } from './config/theme.config.tsx'
import { ProductsProvider } from './context/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeConfig>
      <ProductsProvider>
      <App />
      </ProductsProvider>
    </ThemeConfig>
)
