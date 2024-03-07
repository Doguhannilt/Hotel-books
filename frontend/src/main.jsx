import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from '../src/app/store.jsx'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
      <ChakraProvider>
      
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
       
      </ChakraProvider>
      </Provider>
  </React.StrictMode>
)
