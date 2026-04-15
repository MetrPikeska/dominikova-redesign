import { useEffect } from 'react'
import Nav from '../Nav/Nav.jsx'
import Hero from '../Hero/Hero.jsx'
import Portfolio from '../Portfolio/Portfolio.jsx'
import CV from '../CV/CV.jsx'
import Contact from '../Contact/Contact.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Page({ data, lang }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <Nav data={data} />
      <main>
        <Hero data={data.hero} />
        <Portfolio data={data.portfolio} />
        <CV data={data.cv} />
        <Contact data={data.contact} />
      </main>
      <Footer data={data.footer} />
    </>
  )
}
