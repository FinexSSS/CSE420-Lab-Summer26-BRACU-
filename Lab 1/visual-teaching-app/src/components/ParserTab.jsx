import { useState } from 'react';
import { Hand } from 'lucide-react';
import { parserCode } from '../data/parserData';
import { parserExplanations } from '../data/explanationsData';

export default function ParserTab() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="tab-pane active">
      <div className="header">
        <h1>Syntax Analyzer (parser.y)</h1>
        <p>100% Code Coverage. Click <strong>ANY</strong> highlighted line to understand the grammar rules!</p>
      </div>
      
      <div className="split-view">
        <div className="code-panel">
          {parserCode.map((item, index) => (
            <div 
              key={index} 
              className={`code-line ${item.highlight ? 'interactive-code' : ''} ${activeId && activeId === item.id ? 'active' : ''}`}
              onClick={() => {
                  if(item.highlight && item.id && parserExplanations[item.id]) {
                      setActiveId(item.id);
                  }
              }}
            >
              {item.line || ' '}
            </div>
          ))}
        </div>
        
        <div className="explanation-panel">
          {!activeId ? (
            <div className="default-msg">
              <Hand size={48} />
              <h3>Select Code</h3>
              <p>Almost every line of your actual code is clickable. Click around to learn what everything does!</p>
            </div>
          ) : (
            <div className="explain-card">
              <span className="badge">{parserExplanations[activeId].badge}</span>
              <h3>{parserExplanations[activeId].title}</h3>
              <p>{parserExplanations[activeId].text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
