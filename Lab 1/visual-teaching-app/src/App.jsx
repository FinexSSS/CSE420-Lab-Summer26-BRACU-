import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TheoryTab from './components/TheoryTab';
import LexerTab from './components/LexerTab';
import ParserTab from './components/ParserTab';
import GenericCodeTab from './components/GenericCodeTab';
import WalkthroughTab from './components/WalkthroughTab';
import PipelineTab from './components/PipelineTab';
import FlashcardsTab from './components/FlashcardsTab';
import './App.css';

import { inputCode } from './data/inputData';
import { scriptCode } from './data/scriptData';
import { symbolCode } from './data/symbolData';

function App() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        {activeTab === 'theory' && <TheoryTab />}
        {activeTab === 'lexer' && <LexerTab />}
        {activeTab === 'parser' && <ParserTab />}
        {activeTab === 'input' && (
          <GenericCodeTab 
            title="Input Code (input.txt)" 
            description="The sample C code that we will pass into our compiled parser to test if it works." 
            codeData={inputCode} 
          />
        )}
        {activeTab === 'script' && (
          <GenericCodeTab 
            title="Runner (script.sh)" 
            description="The bash script that automates running yacc, flex, and g++ in the correct order." 
            codeData={scriptCode} 
          />
        )}
        {activeTab === 'header' && (
          <GenericCodeTab 
            title="Header (symbol_info.h)" 
            description="The C++ class definition for the tokens we pass between the Lexer and Parser." 
            codeData={symbolCode} 
          />
        )}
        {activeTab === 'walkthrough' && <WalkthroughTab />}
        {activeTab === 'pipeline' && <PipelineTab />}
        {activeTab === 'flashcards' && <FlashcardsTab />}
      </main>
    </div>
  );
}

export default App;
