import { useState } from 'react';
import { Hand } from 'lucide-react';
import { lexerCode } from '../data/lexerData';
import { lexerExplanations } from '../data/explanationsData';

export default function LexerTab() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="tab-pane active">
      <div className="header">
        <h1>Lexical Analyzer (lexer.l)</h1>
        <p>100% Code Coverage. Click <strong>ANY</strong> highlighted line to see what it does!</p>
      </div>
      
      <div className="split-view">
        <div className="code-panel">
          {lexerCode.map((item, index) => {
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
                    if(item.highlight && item.id && lexerExplanations[item.id]) {
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
              <p>Almost every line of your actual code is clickable. Click around to learn what everything does!</p>
            </div>
          ) : (
            <div className="explain-card">
              <span className="badge">{lexerExplanations[activeId].badge}</span>
              <h3>{lexerExplanations[activeId].title}</h3>
              <p>{lexerExplanations[activeId].text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
