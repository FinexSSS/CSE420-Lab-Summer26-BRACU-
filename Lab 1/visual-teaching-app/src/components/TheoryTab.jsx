import { BookOpen, Layers, Type, FileCode } from 'lucide-react';

export default function TheoryTab() {
  return (
    <div className="tab-pane active" style={{ overflowY: 'auto', padding: '0 0 40px 0' }}>
      <div className="header" style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(30, 41, 59, 0.95)' }}>
        <h1>Basic Theory: What is a Compiler?</h1>
        <p>A baby-level explanation of everything you need to know.</p>
      </div>
      
      <div style={{ maxWidth: '800px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div className="explain-card" style={{ display: 'block', animation: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '15px', borderRadius: '50%', color: 'var(--accent)' }}>
              <BookOpen size={32} />
            </div>
            <h2>1. The Big Picture</h2>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            Computers only understand <strong>0s and 1s</strong> (binary). They do NOT understand English words like <code>int</code> or math symbols like <code>+</code>.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            A <strong>Compiler</strong> is a translator. It takes your human-readable C code and translates it into machine-readable binary. It does this in stages, like a factory assembly line.
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', color: '#cbd5e1' }}>
            Your Code (Text) <br/>
            &nbsp;&nbsp; ↓ <br/>
            [Stage 1: LEXICAL ANALYZER] - Chops text into "words" (tokens)<br/>
            &nbsp;&nbsp; ↓ <br/>
            [Stage 2: SYNTAX ANALYZER] - Checks if "words" follow grammar rules<br/>
            &nbsp;&nbsp; ↓ <br/>
            Machine Code (Binary)
          </div>
          <p style={{ marginTop: '15px', color: 'var(--success)' }}>
            In this lab, we only built Stage 1 and Stage 2!
          </p>
        </div>

        <div className="explain-card" style={{ display: 'block', animation: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '15px', borderRadius: '50%', color: 'var(--warning)' }}>
              <Type size={32} />
            </div>
            <h2>2. What is a Lexical Analyzer? (Stage 1)</h2>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            Imagine reading: <em>"The cat sat on the mat."</em> Before you understand the grammar, you first identify the individual words.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            A Lexical Analyzer (or "Lexer") does exactly this. It reads raw text and groups characters into meaningful words called <strong>TOKENS</strong>.
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px' }}>
            <strong style={{ color: 'var(--accent)' }}>Example Code:</strong> <code>int x = 5 + 3;</code><br/><br/>
            <span style={{ color: 'var(--success)' }}>Token 1:</span> INT (keyword 'int')<br/>
            <span style={{ color: 'var(--success)' }}>Token 2:</span> ID (variable 'x')<br/>
            <span style={{ color: 'var(--success)' }}>Token 3:</span> ASSIGNOP (the '=')<br/>
            <span style={{ color: 'var(--success)' }}>Token 4:</span> CONST_INT (the '5')
          </div>
          <p style={{ marginTop: '15px' }}>
            We use a tool called <strong>FLEX</strong> to build this. We write patterns (Regular Expressions) in a <code>.l</code> file, and Flex writes the C code for us!
          </p>
        </div>

        <div className="explain-card" style={{ display: 'block', animation: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '15px', borderRadius: '50%', color: 'var(--success)' }}>
              <Layers size={32} />
            </div>
            <h2>3. What is a Syntax Analyzer? (Stage 2)</h2>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            Now we have tokens, but do they make sense? <br/>
            <em>"cat the sat mat on"</em> — These are valid English words, but the GRAMMAR is wrong!
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            A Syntax Analyzer (or "Parser") checks if the tokens follow the grammar rules of C.
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px', fontFamily: 'monospace' }}>
            variable_decl -&gt; type_specifier declaration_list SEMICOLON <br/><br/>
            This rule means: "A variable declaration is a type (like int), followed by variable names, followed by a semicolon."
          </div>
          <p style={{ marginTop: '15px' }}>
            We use a tool called <strong>YACC</strong> (or Bison) to build this. We write grammar rules in a <code>.y</code> file, and Yacc writes the parser C code for us!
          </p>
        </div>

        <div className="explain-card" style={{ display: 'block', animation: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(236, 72, 153, 0.2)', padding: '15px', borderRadius: '50%', color: '#ec4899' }}>
              <FileCode size={32} />
            </div>
            <h2>4. Your Project Files</h2>
          </div>
          <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', marginLeft: '20px' }}>
            <li><code>symbol_info.h</code>: A tiny container to hold data about each token.</li>
            <li><code>22101619.l</code>: Your Lexer rules (patterns).</li>
            <li><code>22101619.y</code>: Your Parser rules (grammar).</li>
            <li><code>y.tab.c</code> & <code>y.tab.h</code>: C code generated automatically by Yacc.</li>
            <li><code>lex.yy.c</code>: C code generated automatically by Flex.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
