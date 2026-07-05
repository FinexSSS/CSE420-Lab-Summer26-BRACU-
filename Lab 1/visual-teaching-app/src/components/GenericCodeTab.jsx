import { useState } from 'react';
import { Hand } from 'lucide-react';
import { genericExplanations } from '../data/explanationsData';

export default function GenericCodeTab({ title, description, codeData }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="tab-pane active">
      <div className="header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      
      <div className="split-view">
        <div className="code-panel">
          {codeData.map((item, index) => (
            <div 
              key={index} 
              className={`code-line ${item.highlight ? 'interactive-code' : ''} ${activeId && activeId === item.id ? 'active' : ''}`}
              onClick={() => {
                  if(item.highlight && item.id && genericExplanations[item.id]) {
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
              <p>Click on any code block to learn more about its role in the compilation process.</p>
            </div>
          ) : (
            <div className="explain-card">
              <span className="badge">{genericExplanations[activeId].badge}</span>
              <h3>{genericExplanations[activeId].title}</h3>
              <p>{genericExplanations[activeId].text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
