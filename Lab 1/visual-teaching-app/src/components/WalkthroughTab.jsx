import { useState } from 'react';
import { ArrowLeft, ArrowRight, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    actionTitle: "The Starting Point",
    actionDesc: "We want to parse the C code: `int x;`. First, the Lexer must read the raw characters.",
    stack: [],
    queue: ["int", " ", "x", ";"],
    status: "Waiting for Lexer"
  },
  {
    actionTitle: "Lexer eats 'int'",
    actionDesc: "The Lexer reads the letters i-n-t. It recognizes this as a keyword! It creates a puzzle piece called INT.",
    stack: [],
    queue: [" ", "x", ";"],
    status: "Lexer found Token: INT"
  },
  {
    actionTitle: "Parser SHIFTS",
    actionDesc: "The Parser takes the INT puzzle piece and pushes (SHIFTS) it onto its stack.",
    stack: ["INT"],
    queue: [" ", "x", ";"],
    status: "Parser shifted INT"
  },
  {
    actionTitle: "Parser REDUCES (Connects Pieces)",
    actionDesc: "The Parser knows a rule: `type_specifier -> INT`. It pops INT off the stack, and replaces it with type_specifier. It completed a mini-puzzle!",
    stack: ["type_specifier"],
    queue: [" ", "x", ";"],
    status: "Parser reduced to type_specifier"
  },
  {
    actionTitle: "Lexer ignores space, eats 'x'",
    actionDesc: "The Lexer sees a space and ignores it. Then it reads 'x'. It recognizes it as an identifier (variable name). It creates an ID puzzle piece.",
    stack: ["type_specifier"],
    queue: [";"],
    status: "Lexer found Token: ID"
  },
  {
    actionTitle: "Parser SHIFTS",
    actionDesc: "The Parser takes the ID piece and pushes it onto the stack.",
    stack: ["type_specifier", "ID"],
    queue: [";"],
    status: "Parser shifted ID"
  },
  {
    actionTitle: "Parser REDUCES",
    actionDesc: "Rule: `declaration_list -> ID`. The Parser pops ID and replaces it with declaration_list.",
    stack: ["type_specifier", "declaration_list"],
    queue: [";"],
    status: "Parser reduced to declaration_list"
  },
  {
    actionTitle: "Lexer eats ';'",
    actionDesc: "The Lexer reads the semicolon and creates a SEMICOLON token.",
    stack: ["type_specifier", "declaration_list"],
    queue: [],
    status: "Lexer found Token: SEMICOLON"
  },
  {
    actionTitle: "Parser SHIFTS",
    actionDesc: "The Parser shifts the SEMICOLON onto the stack. The stack now has 3 puzzle pieces waiting.",
    stack: ["type_specifier", "declaration_list", "SEMICOLON"],
    queue: [],
    status: "Parser shifted SEMICOLON"
  },
  {
    actionTitle: "Parser REDUCES THE BIG RULE",
    actionDesc: "Rule: `variable_decl -> type_specifier declaration_list SEMICOLON`. The Parser sees ALL THREE pieces on top of the stack. It pops all 3, and replaces them with variable_decl!",
    stack: ["variable_decl"],
    queue: [],
    status: "Parser completed variable_decl!"
  },
  {
    actionTitle: "Success!",
    actionDesc: "The stack is fully reduced to a valid C grammar rule. The computer now understands your code!",
    stack: ["variable_decl (Success)"],
    queue: [],
    status: "Done."
  }
];

export default function WalkthroughTab() {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  return (
    <div className="tab-pane active" style={{ overflowY: 'auto' }}>
      <div className="header">
        <h1>Baby-Level Walkthrough</h1>
        <p>Watch exactly how the Lexer and Parser work together to understand <code>int x;</code></p>
      </div>
      
      <div className="walkthrough-container">
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
            <button className="nav-item" style={{ background: 'var(--accent)', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} disabled={currentStep === 0} onClick={() => setCurrentStep(p => p - 1)}>
                <ArrowLeft size={18} /> Previous Step
            </button>
            <button className="nav-item" style={{ background: 'var(--accent)', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} disabled={currentStep === steps.length - 1} onClick={() => setCurrentStep(p => p + 1)}>
                Next Step <ArrowRight size={18} />
            </button>
            <button className="nav-item" style={{ background: 'var(--border)', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => setCurrentStep(0)}>
                <RefreshCcw size={18} /> Reset
            </button>
        </div>

        <div className="action-box" style={{ background: 'rgba(30, 41, 59, 0.8)', border: '2px solid var(--accent)', borderRadius: '12px', padding: '25px' }}>
            <h2 style={{ color: 'var(--accent)', fontSize: '2rem', marginBottom: '15px' }}>{step.actionTitle}</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{step.actionDesc}</p>
        </div>

        <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
            
            {/* Input Queue (Lexer) */}
            <div style={{ flex: 1, background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)' }}>
                <h3 style={{ textAlign: 'center', color: '#ec4899', marginBottom: '20px', fontSize: '1.4rem' }}>Raw Input Text</h3>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', minHeight: '60px' }}>
                    <AnimatePresence mode="popLayout">
                        {step.queue.map((q, i) => (
                            <motion.div 
                                key={q + i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, x: -50 }}
                                style={{ background: '#334155', padding: '10px 20px', borderRadius: '8px', fontSize: '1.5rem', fontFamily: 'monospace' }}
                            >
                                {q === " " ? "(space)" : q}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.2rem', color: 'var(--warning)' }}>
                    Lexer Status: {step.status.includes('Lexer') ? <strong>{step.status}</strong> : step.status}
                </div>
            </div>

            {/* Parser Stack */}
            <div style={{ flex: 1, background: 'var(--panel-bg)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ textAlign: 'center', color: '#10b981', marginBottom: '20px', fontSize: '1.4rem' }}>Parser Stack</h3>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '10px', alignItems: 'center', minHeight: '250px' }}>
                    <AnimatePresence>
                        {[...step.stack].reverse().map((item, i) => (
                            <motion.div
                                key={`${item}-${step.stack.length - i}`}
                                initial={{ opacity: 0, y: -40, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', padding: '15px', borderRadius: '8px', width: '80%', textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {step.stack.length === 0 && <div style={{ color: 'var(--text-muted)' }}>(Stack is empty)</div>}
                </div>
            </div>

        </div>

      </div>
    </div>
  );
}
