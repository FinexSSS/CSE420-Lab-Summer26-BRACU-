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
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "#include\"symbol_info.h\"",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "#define YYSTYPE symbol_info*",
    "id": "lex-yystype",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
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
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "using namespace std;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "void yyerror(char *);",
    "id": "lex-default",
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
    "line": "string loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "extern int line_num;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "extern ofstream outlog;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
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
    "line": "/* Regular Definitions */",
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
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "/* whitespace and newline */",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "ws\t\t {delim}+",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "newline  \\n",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
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
    "line": "/* id, float and integers */",
    "id": "lex-default",
    "highlight": true
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
    "line": "floatnum {digit}+\\.{digit}*([Ee][+-]?{digit}+)?|\\.{digit}+([Ee][+-]?{digit}+)?|{digit}+[Ee][+-]?{digit}+",
    "id": "lex-float",
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
    "line": "\"if\"        { ",
    "id": "lex-keyword",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <IF> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return IF; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"else\"      { ",
    "id": "lex-keyword",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <ELSE> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return ELSE; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"for\"       { ",
    "id": "lex-keyword",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <FOR> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return FOR; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"while\"     { ",
    "id": "lex-keyword",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <WHILE> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist; ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return WHILE; }",
    "id": "lex-default",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <INT> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "\"float\"     { ",
    "id": "lex-keyword",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <FLOAT> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return FLOAT; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"void\"      { ",
    "id": "lex-keyword",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <VOID> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return VOID; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"char\"      { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <CHAR> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return CHAR; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"double\"    { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <DOUBLE> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return DOUBLE; }",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <RETURN> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "\"printf\"    { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <PRINTLN> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return PRINTLN; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"switch\"    { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <SWITCH> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return SWITCH; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"do\"        { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <DO> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return DO; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"break\"     { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <BREAK> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return BREAK; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"default\"   { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <DEFAULT> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return DEFAULT; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"goto\"      { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <GOTO> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return GOTO; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"continue\"  { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <CONTINUE> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return CONTINUE; }",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "",
    "id": null,
    "highlight": false
  },
  {
    "line": "\"case\"      { ",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <CASE> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return CASE; }",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <ID> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "{floatnum}  {",
    "id": "lex-float",
    "highlight": true
  },
  {
    "line": "                symbol_info *s = new symbol_info((string)yytext,\"CONST_FLOAT\");",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                yylval = (YYSTYPE)s;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <CONST_FLOAT> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return CONST_FLOAT;",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <CONST_INT> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "\"++\"\t    {",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <INCOP> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return INCOP;",
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
    "line": "\"--\"\t    {",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <DECOP> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return DECOP;",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <ADDOP> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "\"*\"|\"/\"|\"%\"  {",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "                symbol_info *s = new symbol_info((string)yytext,\"MULOP\");",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                yylval = (YYSTYPE)s;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <MULOP> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return MULOP;",
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
    "line": "\"<=\"|\">=\"|\"==\"|\"!=\"|\"<\"|\">\"  {",
    "id": "lex-relop",
    "highlight": true
  },
  {
    "line": "                symbol_info *s = new symbol_info((string)yytext,\"RELOP\");",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                yylval = (YYSTYPE)s;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <RELOP> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return RELOP;",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <ASSIGNOP> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "\"&&\"|\"||\"   {",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                symbol_info *s = new symbol_info((string)yytext,\"LOGICOP\");",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                yylval = (YYSTYPE)s;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <LOGICOP> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return LOGICOP;",
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
    "line": "\"!\"         {",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <NOT> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return NOT;",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <LPAREN> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <RPAREN> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <LCURL> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <RCURL> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "\"[\"         {",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <LTHIRD> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return LTHIRD;",
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
    "line": "\"]\"         {",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <RTHIRD> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return RTHIRD;",
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
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <COMMA> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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
    "line": "\":\"         {",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <COLON> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
    "highlight": true
  },
  {
    "line": "\t\t\t    outlog<<loglist;",
    "id": "lex-default",
    "highlight": true
  },
  {
    "line": "                return COLON;",
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
    "line": "\";\"         {",
    "id": "lex-punctuation",
    "highlight": true
  },
  {
    "line": "                loglist=\"Line no \"+to_string(line_num)+\": Token <SEMICOLON> Lexeme \"+yytext+\" found\"+\"\\n\"+\"\\n\";",
    "id": "lex-operator",
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