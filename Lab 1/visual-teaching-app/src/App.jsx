import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TheoryTab from './components/TheoryTab'
import LexerTab from './components/LexerTab'
import ParserTab from './components/ParserTab'
import WalkthroughTab from './components/WalkthroughTab'
import PipelineTab from './components/PipelineTab'
import FlashcardsTab from './components/FlashcardsTab'

function App() {
  const [activeTab, setActiveTab] = useState('lexer')

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        {activeTab === 'theory' && <TheoryTab />}
        {activeTab === 'lexer' && <LexerTab />}
        {activeTab === 'parser' && <ParserTab />}
        {activeTab === 'walkthrough' && <WalkthroughTab />}
        {activeTab === 'pipeline' && <PipelineTab />}
        {activeTab === 'viva' && <FlashcardsTab />}
      </main>
    </div>
  )
}

export default App
