import { useState } from 'react'
import './App.css'
import LiveKitModal from './components/LiveKitModal';

function App() {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(true)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">FarmIQ</div>
      </header>

      <main>
        <section className="hero">
          <h1>Intelligence That Grows With You.</h1>
          <p>FarmIQ helps farmers make smart, AI-powered decisions on crops, weather, and soil to increase yield and reduce guesswork.</p>

          <div className="support-circle">
            <button className="support-button" onClick={handleSupportClick}>
              Talk to the Agent!
            </button>
          </div>
        </section>
      </main>

      {showSupport && <LiveKitModal setShowSupport={setShowSupport}/>}
    </div>
  )
}

export default App
