export const lexerCode = [
  {
    "line": "%option noyywrap",
    "id": "lex-option",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%{",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "#include<bits/stdc++.h>",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "#include\"symbol_info.h\"",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "#define YYSTYPE symbol_info*",
    "id": "lex-yystype",
    "highlight": true
  },
  {
    "line": "#include \"y.tab.h\"",
    "id": "lex-include",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "extern YYSTYPE yylval;",
    "id": "lex-yylval",
    "highlight": true
  },
  {
    "line": "using namespace std;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "void yyerror(char *);",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "string loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "extern int line_num;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "extern ofstream outlog;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "%}",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "delim\t [ \\t\\v\\r]",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "ws\t\t {delim}+",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "newline  \\n",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "letter_\t [A-Za-z_]",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "digit\t [0-9]",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "id\t\t {letter_}({letter_}|{digit})*",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "integer  {digit}+",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%%",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "{ws}\t\t{ /* ignore whitespace */ }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "{newline}\t{ line_num++; }",
    "id": "lex-newline",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"int\"       { ",
    "id": "lex-keyword",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <INT> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return INT; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"return\"    { ",
    "id": "lex-keyword",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <RETURN> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return RETURN; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "{id}       {",
    "id": "lex-id",
    "highlight": true
  },
  {
    "line": "                symbol_info *s = new symbol_info((string)yytext,\"ID\");",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                yylval = (YYSTYPE)s;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <ID> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return ID;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "            }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "{integer}   {",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                symbol_info *s = new symbol_info((string)yytext,\"CONST_INT\");",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                yylval = (YYSTYPE)s;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <CONST_INT> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return CONST_INT;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "            }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"+\"|\"-\"\t    {",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "                symbol_info *s = new symbol_info((string)yytext,\"ADDOP\");",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                yylval = (YYSTYPE)s;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <ADDOP> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return ADDOP;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t    }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"=\"         {",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <ASSIGNOP> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return ASSIGNOP;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t    }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"(\"         {",
    "id": "lex-punctuation",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <LPAREN> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return LPAREN;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t    }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\")\"         {",
    "id": "lex-punctuation",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <RPAREN> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return RPAREN;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t    }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"{\"         {",
    "id": "lex-punctuation",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <LCURL> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return LCURL;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t    }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"}\"         {",
    "id": "lex-punctuation",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <RCURL> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return RCURL;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t    }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\",\"        { ",
    "id": "lex-punctuation",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <COMMA> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;               ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return COMMA; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\";\"         {",
    "id": "lex-punctuation",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <SEMICOLON> Lexeme \"+yytext+\" found\\n\\n\";",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return SEMICOLON;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "\t\t    }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "%%",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  }
];
