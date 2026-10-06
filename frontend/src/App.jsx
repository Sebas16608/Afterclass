import Board from './Board.jsx'
import Welcome from './Welcome.jsx'
import Rules from './Rules.jsx'
import TermsGate from './TermsGate.jsx'

function App() {
  const path = window.location.pathname
  let page = <Welcome />
  if (path === '/rules') page = <Rules />
  if (path === '/board') page = <Board />
  return <TermsGate>{page}</TermsGate>
}

export default App
