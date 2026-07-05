export const parserCode = [
  {
    "isSectionHeader": true,
    "title": "Section 1: C Declarations",
    "desc": "Standard C includes and variable setups."
  },
  {
    "line": "%{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "#include\"symbol_info.h\"",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "#define YYSTYPE symbol_info*",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "int yyparse(void);",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "int yylex(void);",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "extern FILE *yyin;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "ofstream outlog;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "int line_num = 1;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "void yyerror(char *s)",
    "id": "parse-yyerror",
    "highlight": true
  },
  {
    "line": "{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\toutlog<<\"Error at line \"<<line_num<<\": \"<<s<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "isSectionHeader": true,
    "title": "Section 2: Bison Declarations",
    "desc": "Defining tokens, types, and operator precedence."
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%token IF ELSE FOR WHILE DO BREAK INT CHAR FLOAT DOUBLE VOID RETURN SWITCH CASE DEFAULT CONTINUE GOTO",
    "id": "parse-token",
    "highlight": true
  },
  {
    "line": "%token PRINTLN",
    "id": "parse-token",
    "highlight": true
  },
  {
    "line": "%token ADDOP MULOP INCOP DECOP RELOP ASSIGNOP LOGICOP NOT",
    "id": "parse-token",
    "highlight": true
  },
  {
    "line": "%token LPAREN RPAREN LCURL RCURL LTHIRD RTHIRD COMMA COLON SEMICOLON",
    "id": "parse-token",
    "highlight": true
  },
  {
    "line": "%token ID CONST_INT CONST_FLOAT",
    "id": "parse-token",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%nonassoc LOWER_THAN_ELSE",
    "id": "parse-precedence",
    "highlight": true
  },
  {
    "line": "%nonassoc ELSE",
    "id": "parse-precedence",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%%",
    "id": "parse-default",
    "highlight": true
  },
  {
    "isSectionHeader": true,
    "title": "Section 3: Grammar Rules",
    "desc": "The core CFG rules and their C actions."
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "start : program",
    "id": "parse-start",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-start",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" start : program \"<<endl<<endl;",
    "id": "parse-start",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-start",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-start",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "program : program unit",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" program : program unit \"<<endl<<endl;",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\"\\n\"+$2->getnameofsymbol()<<endl<<endl;",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"\\n\"+$2->getnameofsymbol(),\"program\");",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t| unit",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" program : unit \"<<endl<<endl;",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"program\");",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "unit : variable_decl",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" unit : variable_decl \"<<endl<<endl;",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"unit\");",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t| func_definition",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" unit : func_definition \"<<endl<<endl;",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"unit\");",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-unit",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "func_definition : type_specifier ID LPAREN param_list RPAREN compound_statement",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" func_definition : type_specifier ID LPAREN param_list RPAREN compound_statement \"<<endl<<endl;",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\" \"<<$2->getnameofsymbol()<<\"(\"<<$4->getnameofsymbol()<<\")\\n\"<<$6->getnameofsymbol()<<endl<<endl;",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\" \"+$2->getnameofsymbol()+\"(\"+$4->getnameofsymbol()+\")\\n\"+$6->getnameofsymbol(),\"func_def\");",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t| type_specifier ID LPAREN RPAREN compound_statement",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" func_definition : type_specifier ID LPAREN RPAREN compound_statement \"<<endl<<endl;",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\" \"<<$2->getnameofsymbol()<<\"()\\n\"<<$5->getnameofsymbol()<<endl<<endl;",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\" \"+$2->getnameofsymbol()+\"()\\n\"+$5->getnameofsymbol(),\"func_def\");",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-func_definition",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "param_list : param_list COMMA type_specifier ID",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" param_list : param_list COMMA type_specifier ID \"<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\",\"+$3->getnameofsymbol()+\" \"+$4->getnameofsymbol()<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\",\"+$3->getnameofsymbol()+\" \"+$4->getnameofsymbol(),\"param_list\");",
    "id": "parse-reduction",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t| param_list COMMA type_specifier",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" param_list : param_list COMMA type_specifier \"<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\",\"+$3->getnameofsymbol()<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\",\"+$3->getnameofsymbol(),\"param_list\");",
    "id": "parse-reduction",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t| type_specifier ID",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" param_list : type_specifier ID \"<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\" \"+$2->getnameofsymbol()<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\" \"+$2->getnameofsymbol(),\"param_list\");",
    "id": "parse-reduction",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t| type_specifier",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" param_list : type_specifier \"<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"param_list\");",
    "id": "parse-reduction",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "compound_statement : LCURL statements RCURL",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" compound_statement : LCURL statements RCURL \"<<endl<<endl;",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"{\\n\"+$2->getnameofsymbol()+\"\\n}\"<<endl<<endl;",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"{\\n\"+$2->getnameofsymbol()+\"\\n}\",\"compound_statement\");",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t| LCURL RCURL",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" compound_statement : LCURL RCURL \"<<endl<<endl;",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"{\\n}\"<<endl<<endl;",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"{\\n}\",\"compound_statement\");",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-compound_statement",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "variable_decl : type_specifier declaration_list SEMICOLON",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" variable_decl : type_specifier declaration_list SEMICOLON \"<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\" \"+$2->getnameofsymbol()+\";\"<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\" \"+$2->getnameofsymbol()+\";\",\"variable_decl\");",
    "id": "parse-reduction",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "type_specifier : INT",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" type_specifier : INT \"<<endl<<endl;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"int\"<<endl<<endl;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"int\",\"type_specifier\");",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t| FLOAT",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" type_specifier : FLOAT \"<<endl<<endl;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"float\"<<endl<<endl;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"float\",\"type_specifier\");",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t| VOID",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" type_specifier : VOID \"<<endl<<endl;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"void\"<<endl<<endl;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"void\",\"type_specifier\");",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t| CHAR",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" type_specifier : CHAR \"<<endl<<endl;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"char\"<<endl<<endl;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"char\",\"type_specifier\");",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-type_specifier",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "declaration_list : declaration_list COMMA ID",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" declaration_list : declaration_list COMMA ID \"<<endl<<endl;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\",\"+$3->getnameofsymbol()<<endl<<endl;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\",\"+$3->getnameofsymbol(),\"declaration_list\");",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t| declaration_list COMMA ID LTHIRD CONST_INT RTHIRD",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" declaration_list : declaration_list COMMA ID LTHIRD CONST_INT RTHIRD \"<<endl<<endl;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\",\"+$3->getnameofsymbol()+\"[\"+$5->getnameofsymbol()+\"]\"<<endl<<endl;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\",\"+$3->getnameofsymbol()+\"[\"+$5->getnameofsymbol()+\"]\",\"declaration_list\");",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t| ID",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" declaration_list : ID \"<<endl<<endl;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"declaration_list\");",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t| ID LTHIRD CONST_INT RTHIRD",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" declaration_list : ID LTHIRD CONST_INT RTHIRD \"<<endl<<endl;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\"[\"+$3->getnameofsymbol()+\"]\"<<endl<<endl;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"[\"+$3->getnameofsymbol()+\"]\",\"declaration_list\");",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-declaration_list",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "statements : statement",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statements : statement \"<<endl<<endl;",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"statements\");",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t| statements statement",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statements : statements statement \"<<endl<<endl;",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\"\\n\"+$2->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"\\n\"+$2->getnameofsymbol(),\"statements\");",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-statements",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "statement : variable_decl",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : variable_decl \"<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t| expression_statement",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : expression_statement \"<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t| compound_statement",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : compound_statement \"<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t| FOR LPAREN expression_statement expression_statement expression RPAREN statement",
    "id": "parse-statement-for",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : FOR LPAREN expression_statement expression_statement expression RPAREN statement \"<<endl<<endl;",
    "id": "parse-statement-for",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"for(\"<<$3->getnameofsymbol()<<$4->getnameofsymbol()<<$5->getnameofsymbol()<<\")\\n\"<<$7->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"for(\"+$3->getnameofsymbol()+$4->getnameofsymbol()+$5->getnameofsymbol()+\")\\n\"+$7->getnameofsymbol(),\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t| IF LPAREN expression RPAREN statement %prec LOWER_THAN_ELSE",
    "id": "parse-statement-if",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : IF LPAREN expression RPAREN statement \"<<endl<<endl;",
    "id": "parse-statement-if",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"if(\"<<$3->getnameofsymbol()<<\")\\n\"<<$5->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"if(\"+$3->getnameofsymbol()+\")\\n\"+$5->getnameofsymbol(),\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t| IF LPAREN expression RPAREN statement ELSE statement",
    "id": "parse-statement-if",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : IF LPAREN expression RPAREN statement ELSE statement \"<<endl<<endl;",
    "id": "parse-statement-if",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"if(\"<<$3->getnameofsymbol()<<\")\\n\"<<$5->getnameofsymbol()<<\"\\nelse\\n\"<<$7->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"if(\"+$3->getnameofsymbol()+\")\\n\"+$5->getnameofsymbol()+\"\\nelse\\n\"+$7->getnameofsymbol(),\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t| WHILE LPAREN expression RPAREN statement",
    "id": "parse-statement-while",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : WHILE LPAREN expression RPAREN statement \"<<endl<<endl;",
    "id": "parse-statement-while",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"while(\"<<$3->getnameofsymbol()<<\")\\n\"<<$5->getnameofsymbol()<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"while(\"+$3->getnameofsymbol()+\")\\n\"+$5->getnameofsymbol(),\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t| PRINTLN LPAREN ID RPAREN SEMICOLON",
    "id": "parse-statement-println",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : PRINTLN LPAREN ID RPAREN SEMICOLON \"<<endl<<endl;",
    "id": "parse-statement-println",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"printf(\"<<$3->getnameofsymbol()<<\");\"<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"printf(\"+$3->getnameofsymbol()+\");\",\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t| RETURN expression SEMICOLON",
    "id": "parse-statement-return",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" statement : RETURN expression SEMICOLON \"<<endl<<endl;",
    "id": "parse-statement-return",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"return \"<<$2->getnameofsymbol()<<\";\"<<endl<<endl;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"return \"+$2->getnameofsymbol()+\";\",\"statement\");",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-statement",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "expression_statement : SEMICOLON",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" expression_statement : SEMICOLON \"<<endl<<endl;",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\";\"<<endl<<endl;",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\";\",\"expression_statement\");",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t| expression SEMICOLON",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" expression_statement : expression SEMICOLON \"<<endl<<endl;",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\";\"<<endl<<endl;",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\";\",\"expression_statement\");",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-expression_statement",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "variable : ID",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" variable : ID \"<<endl<<endl;",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"variable\");",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t| ID LTHIRD expression RTHIRD",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" variable : ID LTHIRD expression RTHIRD \"<<endl<<endl;",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\"[\"<<$3->getnameofsymbol()<<\"]\"<<endl<<endl;",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"[\"+$3->getnameofsymbol()+\"]\",\"variable\");",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-variable",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "expression : logic_expression",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" expression : logic_expression \"<<endl<<endl;",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"expression\");",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t| variable ASSIGNOP logic_expression",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" expression : variable ASSIGNOP logic_expression \"<<endl<<endl;",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\"=\"<<$3->getnameofsymbol()<<endl<<endl;",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"=\"+$3->getnameofsymbol(),\"expression\");",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-expression",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "logic_expression : rel_expression",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" logic_expression : rel_expression \"<<endl<<endl;",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"logic_expression\");",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t| rel_expression LOGICOP rel_expression",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" logic_expression : rel_expression LOGICOP rel_expression \"<<endl<<endl;",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<$2->getnameofsymbol()<<$3->getnameofsymbol()<<endl<<endl;",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+$2->getnameofsymbol()+$3->getnameofsymbol(),\"logic_expression\");",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-logic_expression",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "rel_expression : simple_expression",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" rel_expression : simple_expression \"<<endl<<endl;",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"rel_expression\");",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t| simple_expression RELOP simple_expression",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" rel_expression : simple_expression RELOP simple_expression \"<<endl<<endl;",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<$2->getnameofsymbol()<<$3->getnameofsymbol()<<endl<<endl;",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+$2->getnameofsymbol()+$3->getnameofsymbol(),\"rel_expression\");",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-rel_expression",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "simple_expression : term",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" simple_expression : term \"<<endl<<endl;",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"simple_expression\");",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t| simple_expression ADDOP term",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" simple_expression : simple_expression ADDOP term \"<<endl<<endl;",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<$2->getnameofsymbol()<<$3->getnameofsymbol()<<endl<<endl;",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+$2->getnameofsymbol()+$3->getnameofsymbol(),\"simple_expression\");",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-simple_expression",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "term : unary_expression",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" term : unary_expression \"<<endl<<endl;",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"term\");",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t| term MULOP unary_expression",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" term : term MULOP unary_expression \"<<endl<<endl;",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<$2->getnameofsymbol()<<$3->getnameofsymbol()<<endl<<endl;",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+$2->getnameofsymbol()+$3->getnameofsymbol(),\"term\");",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-term",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "unary_expression : ADDOP unary_expression",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" unary_expression : ADDOP unary_expression \"<<endl<<endl;",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<$2->getnameofsymbol()<<endl<<endl;",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+$2->getnameofsymbol(),\"unary_expression\");",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t| NOT unary_expression",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" unary_expression : NOT unary_expression \"<<endl<<endl;",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"!\"<<$2->getnameofsymbol()<<endl<<endl;",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"!\"+$2->getnameofsymbol(),\"unary_expression\");",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t| factor_info",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" unary_expression : factor \"<<endl<<endl;",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"unary_expression\");",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-unary_expression",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "factor_info : factor",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" factor_info : factor \"<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"factor_info\");",
    "id": "parse-reduction",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "factor : variable",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" factor : variable \"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"factor\");",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t| ID LPAREN argument_list RPAREN",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" factor : ID LPAREN argument_list RPAREN \"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\"(\"<<$3->getnameofsymbol()<<\")\"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"(\"+$3->getnameofsymbol()+\")\",\"factor\");",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t| LPAREN expression RPAREN",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" factor : LPAREN expression RPAREN \"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"(\"<<$2->getnameofsymbol()<<\")\"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"(\"+$2->getnameofsymbol()+\")\",\"factor\");",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t| CONST_INT",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" factor : CONST_INT \"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"factor\");",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t| CONST_FLOAT",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" factor : CONST_FLOAT \"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"factor\");",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t| variable INCOP",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" factor : variable INCOP \"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\"++\"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"++\",\"factor\");",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t| variable DECOP",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" factor : variable DECOP \"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\"--\"<<endl<<endl;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"--\",\"factor\");",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-factor",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "argument_list : arguments",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" argument_list : arguments \"<<endl<<endl;",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"argument_list\");",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t|",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" argument_list : \"<<endl<<endl;",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"\"<<endl<<endl;",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info(\"\",\"argument_list\");",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-argument_list",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "arguments : arguments COMMA logic_expression",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" arguments : arguments COMMA logic_expression \"<<endl<<endl;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\",\"<<$3->getnameofsymbol()<<endl<<endl;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\",\"+$3->getnameofsymbol(),\"arguments\");",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t| logic_expression",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" arguments : logic_expression \"<<endl<<endl;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<endl<<endl;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"arguments\");",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%%",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "isSectionHeader": true,
    "title": "Section 4: User Subroutines",
    "desc": "The main() and yyerror() functions."
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "int main(int c, char *v[])",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "{",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\tif(c != 2) ",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\tcout<<\"Please provide input file name\"<<endl;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\treturn 0;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\tyyin = fopen(v[1], \"r\");",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\toutlog.open(\"log.txt\", ios::trunc);",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\tif(yyin == NULL)",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\tcout<<\"Couldn't open file\"<<endl;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t\treturn 0;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "    ",
    "id": null,
    "highlight": false
  },
  {
    "line": "\tyyparse();",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\toutlog<<endl<<\"Total lines: \"<<line_num<<endl;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\toutlog.close();",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\tfclose(yyin);",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\treturn 0;",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "}",
    "id": "parse-arguments",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  }
];
