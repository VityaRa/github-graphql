import { ApolloProvider } from '@apollo/client'
import './App.css'
import client from './providers/apollo/apollo-client'
import AppRouter from './providers/routing/router'

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  )
}

export default App
