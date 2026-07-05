import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, ChevronUp, ChevronDown } from 'lucide-react';
import { inputCode } from '../data/inputData';
import { astData } from '../data/astData';

const AstNode = ({ node, hoverLines, setHoverLines }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  
  // Check if any of this node's highlight lines are currently being hovered
  const isHovered = hoverLines.some(line => (node.highlightLines || []).includes(line));

  return (
    <div style={{ marginLeft: '20px', position: 'relative' }}>
      {/* Vertical line connecting to children */}
      {hasChildren && isOpen && (
        <div style={{
          position: 'absolute',
          left: '12px',
          top: '30px',
          bottom: '0',
          width: '2px',
          background: 'rgba(59, 130, 246, 0.3)',
          zIndex: 0
        }} />
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0', position: 'relative', zIndex: 1 }}>
        {/* Horizontal connector branch */}
        <div style={{ width: '15px', height: '2px', background: 'rgba(59, 130, 246, 0.3)', marginRight: '5px' }} />
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            if (hasChildren) setIsOpen(!isOpen);
          }}
          onMouseEnter={() => setHoverLines(node.highlightLines || [])}
          onMouseLeave={() => setHoverLines([])}
          style={{
            background: node.isToken ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: hasChildren ? 'pointer' : 'default',
            fontWeight: 'bold',
            boxShadow: isHovered ? '0 0 15px rgba(255, 255, 255, 0.5)' : '0 4px 10px rgba(0,0,0,0.2)',
            border: node.isToken ? '2px solid #fbbf24' : '2px solid #60a5fa',
            transform: isHovered ? 'scale(1.02)' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            userSelect: 'none',
            transition: 'all 0.2s'
          }}
        >
          {node.label}
          {hasChildren && (
            <span style={{ fontSize: '0.8rem', background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: '10px' }}>
              {isOpen ? '-' : '+'}
            </span>
          )}
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginLeft: -10 }}
            animate={{ opacity: 1, height: 'auto', marginLeft: 0 }}
            exit={{ opacity: 0, height: 0, marginLeft: -10 }}
            style={{ overflow: 'hidden' }}
          >
            {node.children.map(child => (
              <AstNode key={child.id} node={child} hoverLines={hoverLines} setHoverLines={setHoverLines} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AstTreeTab() {
  const [hoverLines, setHoverLines] = useState([]);
  const [lockedLines, setLockedLines] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Combine locked and hovered lines for highlighting
  const activeLines = [...new Set([...hoverLines, ...lockedLines])];

  return (
    <div className="tab-pane active" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div className="header">
        <h1>Interactive Syntax Tree</h1>
        <p>Click nodes to expand the AST. Hover over or <strong>click code lines</strong> to highlight and lock their corresponding nodes in the tree!</p>
      </div>
      
      <div className="split-view" style={{ flex: 1, padding: '20px', gap: '20px', overflow: 'hidden', background: '#0b1120' }}>
        
        {/* Tree Panel */}
        <div className="mobile-panel-top" style={{ flex: 1.5, background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', overflowY: 'auto', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Network color="#3b82f6" size={28} />
            <h2 style={{ color: 'white' }}>Abstract Syntax Tree (AST)</h2>
          </div>
          <div style={{ paddingLeft: '10px' }}>
             {/* Render the root node manually so it doesn't have the horizontal branch connector */}
             <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '32px',
                  top: '40px',
                  bottom: '0',
                  width: '2px',
                  background: 'rgba(59, 130, 246, 0.3)',
                  zIndex: 0
                }} />
                
                <div 
                    style={{ 
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '24px',
                        display: 'inline-block',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        boxShadow: activeLines.some(line => (astData.highlightLines || []).includes(line)) ? '0 0 20px rgba(255, 255, 255, 0.6)' : '0 4px 15px rgba(16,185,129,0.3)',
                        border: '2px solid #34d399',
                        transform: activeLines.some(line => (astData.highlightLines || []).includes(line)) ? 'scale(1.02)' : 'none',
                        zIndex: 1,
                        position: 'relative',
                        transition: 'all 0.2s'
                    }}
                    onMouseEnter={() => setHoverLines(astData.highlightLines || [])}
                    onMouseLeave={() => setHoverLines([])}
                >
                    {astData.label}
                </div>
                
                <div style={{ marginTop: '10px' }}>
                    {astData.children.map(child => (
                        <AstNode key={child.id} node={child} hoverLines={activeLines} setHoverLines={setHoverLines} />
                    ))}
                </div>
             </div>
          </div>
        </div>
        
        {/* Code Panel */}
        <div className={`mobile-panel-bottom ${isExpanded ? 'expanded' : ''}`} style={{ flex: 1, background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
          
          {/* Mobile swipe drawer handle */}
          <div 
            style={{ display: 'none' }} 
            className="mobile-drawer-handle" 
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div style={{ width: '60px', height: '6px', background: 'var(--border)', borderRadius: '6px', margin: '0 auto 15px' }} />
            <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--text-muted)' }}>
              {isExpanded ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @media (max-width: 900px) {
              .mobile-drawer-handle { 
                display: block !important; 
                cursor: pointer; 
                padding: 15px 0 10px 0; 
                margin-top: -10px; /* Pull it up closer to the edge */
              }
            }
          `}} />

          <h2 
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ color: '#f59e0b', marginBottom: '20px', cursor: 'pointer' }}
          >
            Raw Source Code
          </h2>
          <div style={{ flex: 1, background: '#1e293b', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '1.2rem', lineHeight: '1.8', overflowY: 'auto' }}>
            {inputCode.map((item, index) => {
              const lineNum = index + 1;
              const isHovered = activeLines.includes(lineNum);
              const isLocked = lockedLines.includes(lineNum);
              // Calculate basic indentation just visually based on tabs
              const indentLevel = (item.line.match(/\t/g) || []).length;
              return (
                <div 
                  key={lineNum}
                  onClick={() => {
                    if (isLocked) {
                      setLockedLines(lockedLines.filter(l => l !== lineNum));
                    } else {
                      setLockedLines([...lockedLines, lineNum]);
                    }
                  }}
                  onMouseEnter={() => setHoverLines([lineNum])}
                  onMouseLeave={() => setHoverLines([])}
                  style={{
                    paddingLeft: `${indentLevel * 30}px`,
                    background: isLocked ? 'rgba(16, 185, 129, 0.3)' : (isHovered ? 'rgba(59, 130, 246, 0.3)' : 'transparent'),
                    color: isLocked ? '#34d399' : (isHovered ? '#60a5fa' : '#e2e8f0'),
                    borderLeft: isLocked ? '4px solid #10b981' : (isHovered ? '4px solid #3b82f6' : '4px solid transparent'),
                    transition: 'all 0.2s',
                    padding: '2px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    textShadow: isLocked ? '0 0 10px rgba(16, 185, 129, 0.5)' : (isHovered ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none')
                  }}
                >
                  {item.line || '\u00A0'}
                </div>
              )
            })}
          </div>
          <div style={{ marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Hover over any blue or orange node in the tree on the left to see the exact C code it represents! (Click a line of code to <strong>lock</strong> its highlighting)
          </div>
        </div>

      </div>
    </div>
  );
}
