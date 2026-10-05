import Board from './Board.jsx'
import Welcome from './Welcome.jsx'
import Rules from './Rules.jsx'

function App() {
  const path = window.location.pathname
  if (path === '/rules') return <Rules />
  if (path === '/board') return <Board />
  return <Welcome />
}

export default App
