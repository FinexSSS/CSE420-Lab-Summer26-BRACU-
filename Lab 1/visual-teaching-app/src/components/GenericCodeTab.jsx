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
          {codeData.map((item, index) => {
            if (item.isSectionHeader) {
              return (
                <div key={index} style={{ marginTop: '30px', marginBottom: '10px', padding: '15px', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--accent)', borderRadius: '4px' }}>
                  <h3 style={{ color: 'var(--accent)', margin: '0 0 5px 0' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              );
            }
            return (
              <div 
                key={index} 
                className={`code-line ${item.highlight ? 'interactive-code' : ''} ${activeId && activeId === item.id ? 'active' : ''}`}
                onClick={() => {
                    if(item.highlight && item.id && genericExplanations[item.id]) {
                        setActiveId(prev => prev === item.id ? null : item.id);
                    }
                }}
              >
                {item.line || ' '}
              </div>
            );
          })}
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
