import { BookOpen, Type, Layers, FileCode, Search, ListTree } from 'lucide-react';

export default function TheoryTab() {
  return (
    <div className="tab-pane active" style={{ overflowY: 'auto' }}>
      <div className="header">
        <h1>Theory & Basics</h1>
        <p>A baby-level explanation of what we are actually doing in this lab.</p>
      </div>
      
      <div style={{ padding: '30px 40px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        <div className="explain-card" style={{ display: 'block', animation: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '15px', borderRadius: '50%', color: 'var(--accent)' }}>
              <BookOpen size={32} />
            </div>
            <h2>1. What is a Compiler?</h2>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            Computers only understand 1s and 0s (Machine Code). Humans write code in C/C++. 
            A Compiler is just a translator program that converts Human Code into Machine Code.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            In this lab, we are building the first two stages of a compiler!
          </p>
        </div>

        <div className="explain-card" style={{ display: 'block', animation: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '15px', borderRadius: '50%', color: 'var(--warning)' }}>
              <Search size={32} />
            </div>
            <h2>2. What is a Lexer (Lexical Analyzer)?</h2>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            Imagine reading a book where all the words have no spaces between them. Your brain has to group the letters into words to understand them. 
            <strong> That is exactly what a Lexer does!</strong>
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            A Lexer (built using <strong>Flex</strong>) reads the raw source code character-by-character (like <code>i-n-t- -x-;-</code>). 
            It groups these characters into meaningful words called <strong>Tokens</strong>.
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px' }}>
            <strong style={{ color: 'var(--accent)' }}>Example Code:</strong> <code>int x = 5;</code><br/><br/>
            <span style={{ color: 'var(--success)' }}>Token 1:</span> INT (keyword 'int')<br/>
            <span style={{ color: 'var(--success)' }}>Token 2:</span> ID (variable 'x')<br/>
            <span style={{ color: 'var(--success)' }}>Token 3:</span> ASSIGNOP (the '=')<br/>
            <span style={{ color: 'var(--success)' }}>Token 4:</span> CONST_INT (the '5')
          </div>
          <p style={{ fontSize: '1.1rem', marginTop: '15px' }}>
            We write patterns (Regular Expressions) in a <code>.l</code> file, and Flex writes the C code for us!
          </p>
        </div>

        <div className="explain-card" style={{ display: 'block', animation: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '15px', borderRadius: '50%', color: 'var(--success)' }}>
              <ListTree size={32} />
            </div>
            <h2>3. What is a Parser (Syntax Analyzer)?</h2>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            Once the Lexer has grouped the letters into words, you need to check if the sentence makes grammatical sense. 
            "Dog the barks" are valid English words, but the grammar is wrong. <strong>The Parser checks the grammar!</strong>
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            A Parser (built using <strong>Bison/Yacc</strong>) takes the Tokens produced by the Lexer and matches them against the strict Grammar Rules of C/C++. 
            If the tokens follow a rule perfectly, it connects them together (called a <strong>Reduction</strong>) to build a Syntax Tree.
          </p>
          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px', fontFamily: 'monospace' }}>
            variable_decl -&gt; type_specifier declaration_list SEMICOLON <br/><br/>
            This rule means: "A variable declaration is a type (like int), followed by variable names, followed by a semicolon."
          </div>
          <p style={{ fontSize: '1.1rem', marginTop: '15px' }}>
            We write grammar rules in a <code>.y</code> file, and Yacc writes the parser C code for us!
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
            <li><code>symbol_info.h</code>: A container to hold data about each token.</li>
            <li><code>lexer.l</code>: Your Lexer rules (patterns).</li>
            <li><code>parser.y</code>: Your Parser rules (grammar).</li>
            <li><code>y.tab.c</code> & <code>y.tab.h</code>: C code generated automatically by Yacc.</li>
            <li><code>lex.yy.c</code>: C code generated automatically by Flex.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
