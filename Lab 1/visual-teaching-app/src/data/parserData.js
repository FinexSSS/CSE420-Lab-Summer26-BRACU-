export const parserCode = [
  {
    "line": "%{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "#include\"symbol_info.h\"",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "#define YYSTYPE symbol_info*",
    "id": "parse-default",
    "highlight": true
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
    "line": "ofstream outlog;",
    "id": "parse-default",
    "highlight": true
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
    "line": "void yyerror(char *s) {",
    "id": "parse-yyerror",
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
    "line": "%}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%token INT RETURN ADDOP ASSIGNOP LPAREN RPAREN LCURL RCURL COMMA SEMICOLON ID CONST_INT",
    "id": "parse-token",
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
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "start : program",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{ outlog<<\"At line no: \"<<line_num<<\" start : program \\n\\n\"; }",
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
    "line": "program : program unit",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" program : program unit \\n\\n\";",
    "id": "parse-program",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\"\\n\"+$2->getnameofsymbol()<<\"\\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\"\\n\"+$2->getnameofsymbol(),\"program\");",
    "id": "parse-reduction",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t| unit",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" program : unit \\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\"\\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"program\");",
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
    "line": "unit : variable_decl",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" unit : variable_decl \\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\"\\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"unit\");",
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
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" variable_decl : type_specifier declaration_list SEMICOLON \\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\" \"+$2->getnameofsymbol()+\";\\n\\n\";",
    "id": "parse-default",
    "highlight": true
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
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" type_specifier : INT \\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"int\\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t$$ = new symbol_info(\"int\",\"type_specifier\");",
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
    "line": "declaration_list : declaration_list COMMA ID",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" declaration_list : declaration_list COMMA ID \\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()+\",\"+$3->getnameofsymbol()<<\"\\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol()+\",\"+$3->getnameofsymbol(),\"declaration_list\");",
    "id": "parse-reduction",
    "highlight": true
  },
  {
    "line": "\t}",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t| ID",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<\"At line no: \"<<line_num<<\" declaration_list : ID \\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\toutlog<<$1->getnameofsymbol()<<\"\\n\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t\t$$ = new symbol_info($1->getnameofsymbol(),\"declaration_list\");",
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
    "line": "%%",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "int main(int c, char *v[])",
    "id": "parse-main",
    "highlight": true
  },
  {
    "line": "{",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\tif(c != 2) { cout<<\"Please provide input file name\\n\"; return 0; }",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\tyyin = fopen(v[1], \"r\");",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\toutlog.open(\"22101619_log.txt\", ios::trunc);",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\tif(yyin == NULL) { cout<<\"Couldn't open file\\n\"; return 0; }",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "    ",
    "id": null,
    "highlight": false
  },
  {
    "line": "\tyyparse();",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\toutlog<<\"\\nTotal lines: \"<<line_num<<\"\\n\";",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\t",
    "id": null,
    "highlight": false
  },
  {
    "line": "\toutlog.close();",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\tfclose(yyin);",
    "id": "parse-default",
    "highlight": true
  },
  {
    "line": "\treturn 0;",
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
  }
];
