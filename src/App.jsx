import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='p-[20px]'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
