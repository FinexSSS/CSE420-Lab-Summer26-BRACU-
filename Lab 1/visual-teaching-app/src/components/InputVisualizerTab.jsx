import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, Eye } from 'lucide-react';
import { inputCode } from '../data/inputData';

// --- Heuristic Engine ---
function analyzeLine(line) {
  const code = line.trim();
  if (!code) return null;
  
  const tokens = [];
  let parserRule = "statement -> unknown";
  let symbolAction = "None";
  let astRoot = "statement";
  
  // Lexer Heuristics
  let remaining = code;
  
  // Keywords
  if (remaining.includes('int ')) { tokens.push('INT'); remaining = remaining.replace('int', ''); }
  if (remaining.includes('float ')) { tokens.push('FLOAT'); remaining = remaining.replace('float', ''); }
  if (remaining.includes('char ')) { tokens.push('CHAR'); remaining = remaining.replace('char', ''); }
  if (remaining.includes('void ')) { tokens.push('VOID'); remaining = remaining.replace('void', ''); }
  if (remaining.includes('if')) { tokens.push('IF'); remaining = remaining.replace('if', ''); }
  if (remaining.includes('else')) { tokens.push('ELSE'); remaining = remaining.replace('else', ''); }
  if (remaining.includes('for')) { tokens.push('FOR'); remaining = remaining.replace('for', ''); }
  if (remaining.includes('while')) { tokens.push('WHILE'); remaining = remaining.replace('while', ''); }
  if (remaining.includes('return')) { tokens.push('RETURN'); remaining = remaining.replace('return', ''); }
  if (remaining.includes('printf')) { tokens.push('PRINTLN'); remaining = remaining.replace('printf', ''); }
  
  // Operators & Punctuation
  if (remaining.includes('(')) tokens.push('LPAREN');
  if (remaining.includes(')')) tokens.push('RPAREN');
  if (remaining.includes('{')) tokens.push('LCURL');
  if (remaining.includes('}')) tokens.push('RCURL');
  if (remaining.includes('[')) tokens.push('LBRACK');
  if (remaining.includes(']')) tokens.push('RBRACK');
  if (remaining.includes(',')) tokens.push('COMMA');
  if (remaining.includes(';')) tokens.push('SEMICOLON');
  if (remaining.includes('=')) tokens.push('ASSIGNOP');
  if (remaining.includes('+') || remaining.includes('-')) tokens.push('ADDOP');
  if (remaining.includes('*') || remaining.includes('/') || remaining.includes('%')) tokens.push('MULOP');
  if (remaining.includes('<') || remaining.includes('>') || remaining.includes('==') || remaining.includes('!=')) tokens.push('RELOP');
  if (remaining.includes('&&') || remaining.includes('||')) tokens.push('LOGICOP');
  
  // Identifiers and Constants
  const words = remaining.match(/[a-zA-Z_][a-zA-Z0-9_]*/g);
  if (words) {
    words.forEach(w => {
      if (!['int', 'float', 'void', 'char', 'if', 'else', 'for', 'while', 'return', 'printf'].includes(w)) {
        tokens.push(`ID(${w})`);
      }
    });
  }
  const numbers = remaining.match(/\b\d+(\.\d+)?\b/g);
  if (numbers) {
    numbers.forEach(n => {
      tokens.push(n.includes('.') ? `CONST_FLOAT(${n})` : `CONST_INT(${n})`);
    });
  }

  // Parser Heuristics
  if (code.includes('int ') || code.includes('float ') || code.includes('char ')) {
    if (code.includes('(') && code.includes('{')) {
      parserRule = "func_definition -> type_specifier ID LPAREN parameter_list RPAREN compound_statement";
      astRoot = "func_definition";
      symbolAction = "Insert function ID into Symbol Table with return type.";
    } else {
      parserRule = "var_declaration -> type_specifier declaration_list SEMICOLON";
      astRoot = "var_declaration";
      symbolAction = "Insert variables into Symbol Table (Scope: current).";
    }
  } else if (code.includes('if')) {
    parserRule = "statement -> IF LPAREN expression RPAREN statement";
    astRoot = "if_statement";
    symbolAction = "None (Control Flow)";
  } else if (code.includes('for')) {
    parserRule = "statement -> FOR LPAREN expression_statement expression_statement expression RPAREN statement";
    astRoot = "for_loop";
    symbolAction = "None (Control Flow)";
  } else if (code.includes('while')) {
    parserRule = "statement -> WHILE LPAREN expression RPAREN statement";
    astRoot = "while_loop";
    symbolAction = "None (Control Flow)";
  } else if (code.includes('=')) {
    parserRule = "statement -> expression_statement ; expression -> variable ASSIGNOP logic_expression";
    astRoot = "assignment_statement";
    symbolAction = "Lookup variable ID in Symbol Table to assign value.";
  } else if (code.includes('return')) {
    parserRule = "statement -> RETURN expression SEMICOLON";
    astRoot = "return_statement";
    symbolAction = "None (Return flow)";
  } else if (code.includes('}')) {
    parserRule = "compound_statement -> LCURL statements RCURL";
    astRoot = "compound_statement (END)";
    symbolAction = "Exit current Scope in Symbol Table.";
  } else if (code.includes('{')) {
      parserRule = "compound_statement -> LCURL statements RCURL (START)";
      astRoot = "compound_statement (START)";
      symbolAction = "Enter new Scope in Symbol Table.";
  }

  return { tokens, parserRule, astRoot, symbolAction };
}

export default function InputVisualizerTab() {
  const [activeLine, setActiveLine] = useState(null);
  const [analysis, setAnalysis] = useState(null);

  const handleLineClick = (lineStr, lineNum) => {
    if (activeLine === lineNum) {
      setActiveLine(null);
      setAnalysis(null);
    } else {
      setActiveLine(lineNum);
      setAnalysis(analyzeLine(lineStr));
    }
  };

  return (
    <div className="tab-pane active" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div className="header" style={{ flexShrink: 0 }}>
        <h1>Dynamic Line Visualizer</h1>
        <p>Click <strong>any line</strong> in the raw code below to instantly see how the Lexer and Parser process it!</p>
      </div>
      
      <div className="split-view" style={{ flex: 1, padding: '20px', gap: '20px', overflow: 'hidden', background: '#0b1120' }}>
        
        {/* Code Panel */}
        <div className="mobile-panel-top" style={{ flex: 1, background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ color: '#f59e0b', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <Terminal size={24} /> input.txt
          </h2>
          <div style={{ flex: 1, background: '#1e293b', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '1.2rem', lineHeight: '1.8', overflowY: 'auto' }}>
            {inputCode.map((item, index) => {
              const lineNum = index + 1;
              const isActive = activeLine === lineNum;
              const indentLevel = (item.line.match(/\t/g) || []).length;
              return (
                <div 
                  key={lineNum}
                  onClick={() => handleLineClick(item.line, lineNum)}
                  style={{
                    paddingLeft: `${indentLevel * 30}px`,
                    background: isActive ? 'rgba(59, 130, 246, 0.3)' : 'transparent',
                    color: isActive ? '#60a5fa' : '#e2e8f0',
                    borderLeft: isActive ? '4px solid #3b82f6' : '4px solid transparent',
                    transition: 'all 0.2s',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    textShadow: isActive ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{ color: '#475569', marginRight: '15px', userSelect: 'none' }}>{lineNum}</span>
                  {item.line || '\u00A0'}
                </div>
              )
            })}
          </div>
        </div>

        {/* Dynamic Visualizer Panel */}
        <div className="mobile-panel-bottom" style={{ flex: 1.2, background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', overflowY: 'auto' }}>
          <h2 style={{ color: '#3b82f6', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Eye size={24} /> Live Compiler Simulation
          </h2>
          
          <AnimatePresence mode="wait">
            {analysis ? (
              <motion.div
                key="analysis"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
              >
                {/* Lexer Output */}
                <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid #f59e0b', borderRadius: '8px', padding: '15px' }}>
                  <h3 style={{ color: '#f59e0b', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Lexer Tokens Generated
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {analysis.tokens.map((tok, i) => (
                      <span key={i} style={{ background: '#f59e0b', color: 'white', padding: '5px 12px', borderRadius: '15px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        {tok}
                      </span>
                    ))}
                    {analysis.tokens.length === 0 && <span style={{ color: 'var(--text-muted)' }}>No tokens generated (Whitespace/Empty line)</span>}
                  </div>
                </div>

                {/* Parser Rule */}
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', borderRadius: '8px', padding: '15px' }}>
                  <h3 style={{ color: '#3b82f6', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Parser Grammar Rule Matched
                  </h3>
                  <div style={{ background: '#1e293b', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', color: '#60a5fa', fontSize: '1.1rem' }}>
                    {analysis.parserRule}
                  </div>
                  <div style={{ marginTop: '10px', color: '#e2e8f0' }}>
                    <strong>AST Node Formed: </strong> 
                    <span style={{ color: '#10b981' }}>{analysis.astRoot}</span>
                  </div>
                </div>

                {/* Symbol Table */}
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', borderRadius: '8px', padding: '15px' }}>
                  <h3 style={{ color: '#10b981', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Database size={20} /> Symbol Table Action
                  </h3>
                  <div style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>
                    {analysis.symbolAction}
                  </div>
                </div>

              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '1.2rem', textAlign: 'center', flexDirection: 'column', gap: '15px' }}
              >
                <Terminal size={48} opacity={0.5} />
                Select any line of code on the left to see the compiler pipeline in action!
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
