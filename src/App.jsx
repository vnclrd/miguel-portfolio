import './App.css'
import Header from './jsx/Header.jsx'
import Home from './jsx/Home.jsx'
import About from './jsx/About.jsx'
import Projects from './jsx/Work.jsx'
import Experience from './jsx/Experience.jsx'
import Contact from './jsx/Contact.jsx'
import Footer from './jsx/Footer.jsx'

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0d1b2a] overflow-x-hidden">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;