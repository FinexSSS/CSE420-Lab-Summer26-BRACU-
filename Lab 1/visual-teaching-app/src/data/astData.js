export const rawCodeLines = [
  { num: 5, code: "int var(int a, int b){", indent: 0 },
  { num: 6, code: "a = a + y * 2;", indent: 1 },
  { num: 7, code: "return a+b;", indent: 1 },
  { num: 8, code: "}", indent: 0 }
];

export const astData = {
  id: "program_root",
  label: "program (Full Input File)",
  highlightLines: Array.from({length: 58}, (_, i) => i + 1), // 1 to 58
  children: [
    {
      id: "global-vars",
      label: "Global Declarations",
      highlightLines: [1, 2, 3],
      children: [
        { id: "g1", label: "var_declaration (int x,y,z;)", highlightLines: [1] },
        { id: "g2", label: "var_declaration (float ab;)", highlightLines: [2] },
        { id: "g3", label: "var_declaration (char ch;)", highlightLines: [3] }
      ]
    },
    {
      id: "root",
      label: "func_definition (int var)",
      highlightLines: [5, 6, 7, 8],
      children: [
        {
          id: "fhead",
          label: "func_header",
          highlightLines: [5],
          children: [
            {
              id: "tspec",
              label: "type_specifier",
              highlightLines: [5],
              children: [{ id: "t-int", label: "INT (int)", isToken: true, highlightLines: [5] }]
            },
            {
              id: "fid",
              label: "ID (var)",
              isToken: true,
              highlightLines: [5]
            },
            { id: "lparen", label: "LPAREN ( ( )", isToken: true, highlightLines: [5] },
            {
              id: "param_list",
              label: "parameter_list",
              highlightLines: [5],
              children: [
                {
                  id: "param1",
                  label: "parameter_declaration",
                  highlightLines: [5],
                  children: [
                    { id: "p1-type", label: "type_specifier", children: [{ id: "t-int1", label: "INT", isToken: true, highlightLines: [5] }], highlightLines: [5] },
                    { id: "p1-id", label: "ID (a)", isToken: true, highlightLines: [5] }
                  ]
                },
                { id: "comma", label: "COMMA ( , )", isToken: true, highlightLines: [5] },
                {
                  id: "param2",
                  label: "parameter_declaration",
                  highlightLines: [5],
                  children: [
                    { id: "p2-type", label: "type_specifier", children: [{ id: "t-int2", label: "INT", isToken: true, highlightLines: [5] }], highlightLines: [5] },
                    { id: "p2-id", label: "ID (b)", isToken: true, highlightLines: [5] }
                  ]
                }
              ]
            },
            { id: "rparen", label: "RPAREN ( ) )", isToken: true, highlightLines: [5] }
          ]
        },
        {
          id: "comp_stmt",
          label: "compound_statement",
          highlightLines: [5, 6, 7, 8],
          children: [
            { id: "lcurl", label: "LCURL ( { )", isToken: true, highlightLines: [5] },
            {
              id: "stmt_list",
              label: "statements",
              highlightLines: [6, 7],
              children: [
                {
                  id: "stmt1",
                  label: "expression_statement",
                  highlightLines: [6],
                  children: [
                    {
                      id: "expr",
                      label: "expression",
                      highlightLines: [6],
                      children: [
                        {
                          id: "var-a",
                          label: "variable",
                          highlightLines: [6],
                          children: [{ id: "id-a", label: "ID (a)", isToken: true, highlightLines: [6] }]
                        },
                        { id: "assign", label: "ASSIGNOP ( = )", isToken: true, highlightLines: [6] },
                        {
                          id: "logic_expr",
                          label: "logic_expression",
                          highlightLines: [6],
                          children: [
                            {
                              id: "rel_expr",
                              label: "rel_expression",
                              highlightLines: [6],
                              children: [
                                {
                                  id: "simp_expr",
                                  label: "simple_expression",
                                  highlightLines: [6],
                                  children: [
                                    {
                                      id: "simp_expr_left",
                                      label: "simple_expression",
                                      highlightLines: [6],
                                      children: [
                                        { id: "term_a", label: "term", highlightLines: [6], children: [{ id: "unary_a", label: "unary_expression", highlightLines: [6], children: [{ id: "fact_a", label: "factor", highlightLines: [6], children: [{ id: "v_a", label: "variable", highlightLines: [6], children: [{ id: "id_a2", label: "ID (a)", isToken: true, highlightLines: [6] }] }] }] }] }
                                      ]
                                    },
                                    { id: "addop", label: "ADDOP ( + )", isToken: true, highlightLines: [6] },
                                    {
                                      id: "term_right",
                                      label: "term",
                                      highlightLines: [6],
                                      children: [
                                        { id: "term_y", label: "term", highlightLines: [6], children: [{ id: "unary_y", label: "unary_expression", highlightLines: [6], children: [{ id: "fact_y", label: "factor", highlightLines: [6], children: [{ id: "v_y", label: "variable", highlightLines: [6], children: [{ id: "id_y", label: "ID (y)", isToken: true, highlightLines: [6] }] }] }] }] },
                                        { id: "mulop", label: "MULOP ( * )", isToken: true, highlightLines: [6] },
                                        { id: "fact_2", label: "factor", highlightLines: [6], children: [{ id: "const_2", label: "CONST_INT (2)", isToken: true, highlightLines: [6] }] }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { id: "semi1", label: "SEMICOLON ( ; )", isToken: true, highlightLines: [6] }
              ]
            },
            {
              id: "stmt2",
              label: "statement",
              highlightLines: [7],
              children: [
                { id: "ret", label: "RETURN (return)", isToken: true, highlightLines: [7] },
                {
                  id: "expr2",
                  label: "expression",
                  highlightLines: [7],
                  children: [
                    {
                      id: "simp_expr2",
                      label: "simple_expression",
                      highlightLines: [7],
                      children: [
                        { id: "simp_expr2_left", label: "simple_expression", highlightLines: [7], children: [{ id: "term_a3", label: "term", highlightLines: [7], children: [{ id: "unary_a3", label: "unary_expression", highlightLines: [7], children: [{ id: "fact_a3", label: "factor", highlightLines: [7], children: [{ id: "v_a3", label: "variable", highlightLines: [7], children: [{ id: "id_a3", label: "ID (a)", isToken: true, highlightLines: [7] }] }] }] }] }] },
                        { id: "addop2", label: "ADDOP ( + )", isToken: true, highlightLines: [7] },
                        { id: "term_b", label: "term", highlightLines: [7], children: [{ id: "unary_b", label: "unary_expression", highlightLines: [7], children: [{ id: "fact_b", label: "factor", highlightLines: [7], children: [{ id: "v_b", label: "variable", highlightLines: [7], children: [{ id: "id_b", label: "ID (b)", isToken: true, highlightLines: [7] }] }] }] }] }
                      ]
                    }
                  ]
                },
                { id: "semi2", label: "SEMICOLON ( ; )", isToken: true, highlightLines: [7] }
              ]
            }
          ]
        },
        { id: "rcurl", label: "RCURL ( } )", isToken: true, highlightLines: [8] }
      ]
    },
    {
      id: "foo-func",
      label: "func_definition (void foo)",
      highlightLines: [10, 11, 12, 13],
      children: [{ id: "foo-stmt", label: "compound_statement", highlightLines: [11, 12] }]
    },
    {
      id: "main-func",
      label: "func_definition (int main)",
      highlightLines: Array.from({length: 43}, (_, i) => i + 15),
      children: [
        { id: "main-decl", label: "Local Declarations", highlightLines: [16, 17, 18, 19] },
        { id: "main-comp", label: "compound_statement (Block)", highlightLines: [21, 22, 23, 24] },
        { id: "main-if1", label: "if_statement", highlightLines: [27, 28, 29] },
        { id: "main-ifelse", label: "if_else_statement", highlightLines: [31, 32, 33, 34, 35, 36, 37, 38, 39] },
        { id: "main-if2", label: "if_statement", highlightLines: [41, 42] },
        { id: "main-for", label: "for_loop", highlightLines: [44, 45, 46] },
        { id: "main-while", label: "while_loop", highlightLines: [48, 49, 50] },
        { id: "main-ret", label: "return_statement", highlightLines: [56] }
      ]
    }
  ]
};
