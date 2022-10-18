import { Routes, Route } from 'react-router-dom'
import ListPost from './components/ListPost'
import PostDetail from './components/PostDetail'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<ListPost />} />
      <Route path='/:slug' element={<PostDetail />} />
    </Routes>
  )
}

export default App
