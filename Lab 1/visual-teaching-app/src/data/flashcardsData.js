export const flashcardsData = [
  {
    category: "General Concepts",
    questions: [
      { q: "What is the difference between a Compiler and an Interpreter?", a: "A compiler translates the entire code into machine code before running. An interpreter translates and executes line-by-line." },
      { q: "What are the phases of a Compiler?", a: "Lexical Analysis, Syntax Analysis, Semantic Analysis, Intermediate Code Gen, Optimization, and Target Code Gen." },
      { q: "What is a Token vs Lexeme?", a: "A Lexeme is the actual text matched (e.g. '56'). A Token is the category given to it (e.g. CONST_INT)." },
      { q: "What is a symbol table?", a: "A data structure used by the compiler to keep track of variables, functions, their types, and scopes." },
      { q: "What is the difference between Lex and Yacc?", a: "Lex is a scanner generator for Lexical Analysis (Stage 1). Yacc is a parser generator for Syntax Analysis (Stage 2)." }
    ]
  },
  {
    category: "Lexical Analysis (Flex)",
    questions: [
      { q: "How does Flex work?", a: "It reads regular expressions, converts them into a Deterministic Finite Automaton (DFA), and generates C code to simulate that DFA." },
      { q: "What does %option noyywrap do?", a: "It tells Flex not to call the yywrap() function at EOF, meaning we only process one input file." },
      { q: "What is yytext?", a: "A global character array inside lex.yy.c that holds the exact string/characters just matched by a rule." },
      { q: "What is yylval?", a: "The global variable used to pass data from the Lexer to the Parser. We set it to point to our symbol_info object." },
      { q: "Why must Yacc run before Flex in the pipeline?", a: "Yacc generates y.tab.h which contains the numeric definitions (#define IF 258) that Flex needs to return tokens." },
      { q: "What is the Longest Match Rule?", a: "If multiple rules match, Flex picks the one that matches the most characters. E.g. '++' is matched before '+'." },
      { q: "What happens if two rules match the exact same number of characters?", a: "Flex picks the rule that appears FIRST in the .l file. That's why keywords must be before the ID rule." },
      { q: "How do you ignore spaces and tabs?", a: "Using a rule like `[ \\t\\v\\r]+ { /* do nothing */ }`. No token is returned." }
    ]
  },
  {
    category: "Syntax Analysis (Yacc/Bison)",
    questions: [
      { q: "What type of parser does Yacc generate?", a: "An LALR(1) parser. It is a Bottom-Up parser with 1 token of Look-Ahead." },
      { q: "What does LALR stand for?", a: "Look-Ahead Left-to-right parsing, Rightmost derivation in reverse." },
      { q: "What is a Shift operation?", a: "Pushing the next input token from the lexer onto the parser's stack." },
      { q: "What is a Reduce operation?", a: "When the symbols on top of the stack match the right side of a grammar rule, they are popped and replaced by the left side of the rule." },
      { q: "What is a Shift-Reduce conflict?", a: "When the parser doesn't know whether to shift the next token or reduce the current stack. Example: Dangling Else." },
      { q: "How do we solve the Dangling Else conflict?", a: "By explicitly defining precedences: `%nonassoc LOWER_THAN_ELSE` and `%nonassoc ELSE`. Since ELSE is defined later, it gets higher precedence, so the parser SHIFTS it." },
      { q: "What does $$ mean in a Yacc rule?", a: "It refers to the semantic value of the Left-Hand Side (LHS) of the grammar rule." },
      { q: "What do $1, $2, $3 mean?", a: "They refer to the semantic values of the 1st, 2nd, and 3rd symbols on the Right-Hand Side (RHS) of the grammar rule." },
      { q: "How do you enforce Operator Precedence in Yacc?", a: "Either use %left / %right directives, OR structure the grammar hierarchically (e.g., term handles *, simple_expression handles +)." },
      { q: "What is Left Recursion?", a: "A rule like `list : list item`. Bottom-up parsers (Yacc) handle this perfectly and efficiently. Top-down parsers crash on it." }
    ]
  },
  {
    category: "C++ & Memory (Lab Specifics)",
    questions: [
      { q: "Why use 'new symbol_info(...)'?", a: "Because `new` allocates memory on the Heap. The object must survive the current function scope so it can be passed up the syntax tree." },
      { q: "What happens to memory we allocate?", a: "In a real compiler, we would delete it after printing or AST generation. In this lab, it leaks, which is okay for small inputs." },
      { q: "What is the role of ios::trunc in outlog.open()?", a: "It truncates (clears) the file if it already exists, so you always get a fresh log file on every run." },
      { q: "What is YYSTYPE?", a: "A macro that defines the data type of yylval. By default it is an int, but we `#define` it as `symbol_info*`." },
      { q: "What is yyerror()?", a: "A function called by the parser automatically when it encounters a token that violates all grammar rules. We use it to print the line number." },
      { q: "What is the purpose of yyparse()?", a: "It is the entry point of the parser. It repeatedly calls yylex() to consume tokens until EOF or a fatal error." },
      { q: "Why keep track of line_num in the lexer?", a: "Because the parser doesn't look at text lines, just tokens. If there is a syntax error, we need line_num to tell the user where it happened." }
    ]
  },
  {
    category: "Advanced Grammar & Semantics",
    questions: [
      { q: "What is %union used for?", a: "By default, yylval is a simple integer. %union allows yylval to hold multiple data types (like integers, floats, strings, or pointers like symbol_info*) depending on the token." },
      { q: "How do you specify the type of a token when using %union?", a: "Using the %token <type_name> directive. For example, %token <sinfo> ID tells Bison that the ID token uses the 'sinfo' field of the union." },
      { q: "What does %type <sinfo> expression do?", a: "It tells Bison that the non-terminal rule 'expression' will return a semantic value of type 'sinfo'." },
      { q: "If we have rule `expression : expression ADDOP term`, what is $$?", a: "It is the semantic value returned by this entire rule. Usually, we do `$$ = new symbol_info(...);` to build the tree upwards." },
      { q: "Why do we pass arguments to a function as a 'parameter_list'?", a: "Because a parser builds structures recursively from left to right. 'parameter_list : parameter_list COMMA parameter_declaration' correctly handles 1 or 100 arguments." },
      { q: "What is the purpose of printout(symbol_info* tree)?", a: "It is a recursive traversal function that walks through the Abstract Syntax Tree (AST) node by node and prints it in an XML-like hierarchical format." }
    ]
  }
];
