import { Routes, Route } from 'react-router-dom'
import Page from './components/Page/Page.jsx'
import cs from './data/cs.js'
import en from './data/en.js'

export default function App() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<Page data={cs} lang="cs" />} />
        <Route path="/en" element={<Page data={en} lang="en" />} />
      </Routes>
    </>
  )
}
