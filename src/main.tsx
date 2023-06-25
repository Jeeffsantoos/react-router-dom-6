import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'
import { Post } from './components/Post'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/post' element={<Posts/>}></Route>
      {/* <Route path='/post/:id' element={<Posts/>}></Route> */}
      <Route path='/posts' element={<Posts/>}>
      <Route path=':id' element={<Post/>}></Route>

      </Route>
      <Route path='/redirect' element={<Redirect/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
