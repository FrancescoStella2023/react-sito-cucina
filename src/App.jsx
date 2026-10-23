import { Routes, Route } from 'react-router-dom';
import RecipeIndex from './pages/RecipeIndex';
import RecipeShow from './pages/RecipeShow'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RecipeIndex />} />
        <Route path="/recipes/:id" element={<RecipeShow />} />
      </Routes>
    </>
  )
}

export default App
