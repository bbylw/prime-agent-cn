import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import CoreAbstractions from './components/CoreAbstractions'
import Features from './components/Features'
import LongRunning from './components/LongRunning'
import GettingStarted from './components/GettingStarted'
import Commands from './components/Commands'
import DocsSection from './components/DocsSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CoreAbstractions />
        <Features />
        <LongRunning />
        <GettingStarted />
        <Commands />
        <DocsSection />
      </main>
      <Footer />
    </>
  )
}
