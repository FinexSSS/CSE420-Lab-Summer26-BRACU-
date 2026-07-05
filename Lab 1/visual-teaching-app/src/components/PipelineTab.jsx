import { FileText, Code2, Hammer, Terminal, ArrowDown } from 'lucide-react';

export default function PipelineTab() {
  return (
    <div className="tab-pane active">
      <div className="header">
        <h1>Compilation Pipeline</h1>
        <p>What happens when you run <code>build.bat</code> or <code>script.sh</code></p>
      </div>
      <div className="pipeline-flow">
        
        <div className="pipe-step">
          <div className="pipe-icon"><FileText size={40} /></div>
          <div className="pipe-content">
            <h3>1. yacc -d -y parser.y</h3>
            <p>Yacc reads your grammar rules and builds an LALR(1) state machine. It outputs <code>y.tab.c</code> (the C parser code) and <code>y.tab.h</code> (the token definitions like #define IF 258).</p>
          </div>
        </div>
        
        <div className="pipe-arrow"><ArrowDown size={32} /></div>
        
        <div className="pipe-step">
          <div className="pipe-icon"><Code2 size={40} /></div>
          <div className="pipe-content">
            <h3>2. flex lexer.l</h3>
            <p>Flex reads your regex patterns, builds a Deterministic Finite Automaton (DFA), and outputs <code>lex.yy.c</code> (the C scanner code). It uses y.tab.h to know the token numbers.</p>
          </div>
        </div>
        
        <div className="pipe-arrow"><ArrowDown size={32} /></div>
        
        <div className="pipe-step">
          <div className="pipe-icon"><Hammer size={40} /></div>
          <div className="pipe-content">
            <h3>3. g++ y.tab.c lex.yy.c</h3>
            <p>The compiler turns the auto-generated C code from Flex and Yacc into machine code, linking them together into a single executable program.</p>
          </div>
        </div>
        
        <div className="pipe-arrow"><ArrowDown size={32} /></div>
        
        <div className="pipe-step">
          <div className="pipe-icon"><Terminal size={40} /></div>
          <div className="pipe-content">
            <h3>4. ./a.exe input.txt</h3>
            <p>Your program runs! <code>main()</code> opens the file and calls <code>yyparse()</code>, which repeatedly calls <code>yylex()</code> to consume tokens and build the syntax tree.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
