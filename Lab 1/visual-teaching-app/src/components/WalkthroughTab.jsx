import { useState } from 'react';
import { ArrowLeft, ArrowRight, RefreshCcw, ChevronsRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

// To use layoutId animations, items must have unique IDs that persist across arrays.
const tokens = {
  int: { id: "tok-int", label: "INT" },
  x: { id: "tok-x", label: "ID" },
  semi: { id: "tok-semi", label: "SEMICOLON" },
  typeSpec: { id: "node-type", label: "type_specifier", isNode: true },
  declList: { id: "node-decl", label: "declaration_list", isNode: true },
  varDecl: { id: "node-var", label: "variable_decl (Success!)", isNode: true }
};

const steps = [
  {
    actionType: "START",
    actionTitle: "The Starting Point",
    actionDesc: "We want to parse the C code: `int x;`. First, the Lexer must read the raw characters from the input stream.",
    rawText: "int x;",
    queue: [],
    stack: []
  },
  {
    actionType: "LEX",
    actionTitle: "Lexer reads 'int'",
    actionDesc: "The Lexer reads 'i-n-t'. It recognizes this as a keyword! It creates a puzzle piece called INT.",
    rawText: " x;",
    queue: [tokens.int],
    stack: []
  },
  {
    actionType: "SHIFT",
    actionTitle: "Parser SHIFTS",
    actionDesc: "The Parser takes the INT puzzle piece from the Lexer and pushes (SHIFTS) it onto its stack.",
    rawText: " x;",
    queue: [],
    stack: [tokens.int]
  },
  {
    actionType: "REDUCE",
    actionTitle: "Parser REDUCES",
    actionDesc: "The Parser knows a rule: `type_specifier -> INT`. It pops INT off the stack, and replaces it with type_specifier. It completed a mini-puzzle!",
    rawText: " x;",
    queue: [],
    stack: [tokens.typeSpec]
  },
  {
    actionType: "LEX",
    actionTitle: "Lexer ignores space, reads 'x'",
    actionDesc: "The Lexer sees a space and ignores it. Then it reads 'x'. It recognizes it as an identifier (variable name). It creates an ID puzzle piece.",
    rawText: ";",
    queue: [tokens.x],
    stack: [tokens.typeSpec]
  },
  {
    actionType: "SHIFT",
    actionTitle: "Parser SHIFTS",
    actionDesc: "The Parser takes the ID piece from the Lexer and pushes it onto the stack.",
    rawText: ";",
    queue: [],
    stack: [tokens.typeSpec, tokens.x]
  },
  {
    actionType: "REDUCE",
    actionTitle: "Parser REDUCES",
    actionDesc: "Rule: `declaration_list -> ID`. The Parser pops ID and replaces it with declaration_list.",
    rawText: ";",
    queue: [],
    stack: [tokens.typeSpec, tokens.declList]
  },
  {
    actionType: "LEX",
    actionTitle: "Lexer reads ';'",
    actionDesc: "The Lexer reads the semicolon and creates a SEMICOLON token.",
    rawText: "",
    queue: [tokens.semi],
    stack: [tokens.typeSpec, tokens.declList]
  },
  {
    actionType: "SHIFT",
    actionTitle: "Parser SHIFTS",
    actionDesc: "The Parser shifts the SEMICOLON onto the stack. The stack now has 3 puzzle pieces waiting.",
    rawText: "",
    queue: [],
    stack: [tokens.typeSpec, tokens.declList, tokens.semi]
  },
  {
    actionType: "REDUCE",
    actionTitle: "Parser REDUCES THE BIG RULE",
    actionDesc: "Rule: `variable_decl -> type_specifier declaration_list SEMICOLON`. The Parser sees ALL THREE pieces on top of the stack. It merges them into variable_decl!",
    rawText: "",
    queue: [],
    stack: [tokens.varDecl]
  }
];

const ActionBadge = ({ type }) => {
  let color = "gray";
  if (type === "SHIFT") color = "#3b82f6"; // blue
  if (type === "REDUCE") color = "#10b981"; // green
  if (type === "LEX") color = "#f59e0b"; // orange
  if (type === "START") color = "#8b5cf6"; // purple

  return (
    <span style={{ 
      background: color, 
      color: 'white', 
      padding: '4px 12px', 
      borderRadius: '20px', 
      fontSize: '0.9rem', 
      fontWeight: 'bold',
      marginRight: '15px'
    }}>
      {type}
    </span>
  );
};

export default function WalkthroughTab() {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  return (
    <div className="tab-pane active" style={{ overflowY: 'auto' }}>
      <div className="header">
        <h1>Interactive Stack Animation</h1>
        <p>Watch physical tokens fly from the Lexer to the Parser!</p>
      </div>
      
      <div className="walkthrough-container" style={{ padding: '20px' }}>
        
        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <button className="nav-item" style={{ background: 'var(--accent)', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} disabled={currentStep === 0} onClick={() => setCurrentStep(p => p - 1)}>
                <ArrowLeft size={18} /> Prev
            </button>
            <button className="nav-item" style={{ background: 'var(--accent)', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} disabled={currentStep === steps.length - 1} onClick={() => setCurrentStep(p => p + 1)}>
                Next <ArrowRight size={18} />
            </button>
            <button className="nav-item" style={{ background: 'var(--border)', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setCurrentStep(0)}>
                <RefreshCcw size={18} /> Reset
            </button>
        </div>

        {/* Action Description */}
        <div className="action-box" style={{ 
            background: 'rgba(30, 41, 59, 0.8)', 
            border: step.actionType === 'REDUCE' ? '2px solid #10b981' : step.actionType === 'SHIFT' ? '2px solid #3b82f6' : '2px solid var(--accent)', 
            borderRadius: '12px', 
            padding: '25px',
            marginBottom: '30px',
            boxShadow: step.actionType === 'REDUCE' ? '0 0 20px rgba(16, 185, 129, 0.2)' : 'none',
            transition: 'all 0.3s'
        }}>
            <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                <ActionBadge type={step.actionType} />
                {step.actionTitle}
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>{step.actionDesc}</p>
        </div>

        {/* Animation Arena */}
        <LayoutGroup>
          <div style={{ display: 'flex', gap: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>
              
              {/* Left Side: Input & Lexer */}
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Raw Text Stream */}
                  <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', textAlign: 'center' }}>
                      <h3 style={{ color: '#ec4899', marginBottom: '10px', fontSize: '1.2rem' }}>Raw Input Stream</h3>
                      <div style={{ fontSize: '2rem', fontFamily: 'monospace', minHeight: '40px', background: '#0f172a', borderRadius: '8px', padding: '10px', color: '#e2e8f0', border: '1px dashed #ec4899' }}>
                          {step.rawText || "\u00A0"}
                      </div>
                  </div>

                  {/* Lexer Queue */}
                  <div style={{ background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ textAlign: 'center', color: '#f59e0b', marginBottom: '20px', fontSize: '1.2rem' }}>Lexer Output (Token Queue)</h3>
                      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px' }}>
                          <AnimatePresence>
                              {step.queue.map((item) => (
                                  <motion.div 
                                      layoutId={item.id}
                                      key={item.id}
                                      initial={{ opacity: 0, scale: 0.5, y: -20 }}
                                      animate={{ opacity: 1, scale: 1, y: 0 }}
                                      exit={{ opacity: 0, scale: 0.5 }}
                                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                      style={{ 
                                          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                                          color: 'white', 
                                          padding: '15px 25px', 
                                          borderRadius: '8px', 
                                          fontSize: '1.2rem', 
                                          fontWeight: 'bold',
                                          boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)' 
                                      }}
                                  >
                                      {item.label}
                                  </motion.div>
                              ))}
                          </AnimatePresence>
                          {step.queue.length === 0 && <span style={{ color: 'var(--text-muted)' }}>(Empty)</span>}
                      </div>
                  </div>

              </div>

              {/* Middle: The Funnel */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                  <ChevronsRight size={48} color="var(--border)" />
              </div>

              {/* Right Side: Parser Stack */}
              <div style={{ flex: '1 1 300px', background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ textAlign: 'center', color: '#10b981', marginBottom: '20px', fontSize: '1.2rem' }}>Parser Stack</h3>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '10px', alignItems: 'center', minHeight: '300px', padding: '10px', background: '#0f172a', borderRadius: '8px' }}>
                      <AnimatePresence>
                          {[...step.stack].reverse().map((item) => (
                              <motion.div
                                  layoutId={item.id}
                                  key={item.id}
                                  initial={{ opacity: 0, y: -50 }}
                                  animate={{ opacity: 1, y: 0, scale: item.isNode ? 1.05 : 1 }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                  style={{ 
                                      background: item.isNode 
                                        ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' // Blue for reduced grammar nodes
                                        : 'linear-gradient(135deg, #10b981 0%, #059669 100%)', // Green for raw tokens
                                      color: 'white', 
                                      padding: '15px', 
                                      borderRadius: '8px', 
                                      width: '90%', 
                                      textAlign: 'center', 
                                      fontWeight: 'bold', 
                                      fontSize: '1.1rem',
                                      boxShadow: item.isNode ? '0 0 20px rgba(59, 130, 246, 0.5)' : '0 4px 6px rgba(0,0,0,0.2)',
                                      border: item.isNode ? '2px solid #60a5fa' : 'none'
                                  }}
                              >
                                  {item.label}
                              </motion.div>
                          ))}
                      </AnimatePresence>
                      {step.stack.length === 0 && <div style={{ color: 'var(--text-muted)', height: '100%', display: 'flex', alignItems: 'center' }}>(Stack is empty)</div>}
                  </div>
              </div>

          </div>
        </LayoutGroup>

      </div>
    </div>
  );
}
