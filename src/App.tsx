import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CustomModes from './pages/CustomModes'
import SlashCommands from './pages/SlashCommands'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modes" element={<CustomModes />} />
        <Route path="/commands" element={<SlashCommands />} />
      </Routes>
    </Layout>
  )
}

export default App
