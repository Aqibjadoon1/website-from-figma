import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/landing/Home'
import NotFound from '../pages/shared/NotFound'
import HashScroll from '../components/globals/HashScroll'

export default function AppRoutes() {
  return (
    <>
      <HashScroll />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}