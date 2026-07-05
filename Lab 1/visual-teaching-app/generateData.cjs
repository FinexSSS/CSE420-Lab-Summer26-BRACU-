const fs = require('fs');
const path = require('path');

function generateLexerData() {
    const lexerContent = fs.readFileSync(path.join(__dirname, '../intermediate/22101619/22101619.l'), 'utf8');
    const lines = lexerContent.split('\n');
    const data = [];
    
    for(let i=0; i<lines.length; i++) {
        let line = lines[i].replace(/\r/g, '');
        let id = null;
        let highlight = false;

        if (line.trim() === '') {
            // Empty line, no highlight
        }
        else if (line.includes('%option noyywrap')) { id = 'lex-option'; highlight = true; }
        else if (line.includes('#include "y.tab.h"')) { id = 'lex-include'; highlight = true; }
        else if (line.includes('#define YYSTYPE')) { id = 'lex-yystype'; highlight = true; }
        else if (line.includes('extern YYSTYPE yylval')) { id = 'lex-yylval'; highlight = true; }
        else if (line.includes('{newline}')) { id = 'lex-newline'; highlight = true; }
        else if (line.match(/^"(int|float|void|if|else|for|while|return)"/)) { id = 'lex-keyword'; highlight = true; }
        else if (line.includes('floatnum')) { id = 'lex-float'; highlight = true; }
        else if (line.startsWith('{id}')) { id = 'lex-id'; highlight = true; }
        else if (line.match(/^"\+\+"|"-"|"\+"|"\*"|"\/"|"%"/)) { id = 'lex-operator'; highlight = true; }
        else if (line.match(/^"<="|">="|"<"|">"|"=="/)) { id = 'lex-relop'; highlight = true; }
        else if (line.match(/^"{"|"}"|"\("|"\)"|";"|","/)) { id = 'lex-punctuation'; highlight = true; }
        else { id = 'lex-default'; highlight = true; }

        data.push({ line, id, highlight });
    }

    const output = `export const lexerCode = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(path.join(__dirname, 'src/data/lexerData.js'), output);
}

function generateParserData() {
    const parserContent = fs.readFileSync(path.join(__dirname, '../intermediate/22101619/22101619.y'), 'utf8');
    const lines = parserContent.split('\n');
    const data = [];

    for(let i=0; i<lines.length; i++) {
        let line = lines[i].replace(/\r/g, '');
        let id = null;
        let highlight = false;

        if (line.trim() === '') {
            // Empty line
        }
        else if (line.includes('yyerror(char *s)')) { id = 'parse-yyerror'; highlight = true; }
        else if (line.includes('%nonassoc LOWER_THAN_ELSE') || line.includes('%nonassoc ELSE')) { id = 'parse-nonassoc'; highlight = true; }
        else if (line.includes('program : program unit')) { id = 'parse-program'; highlight = true; }
        else if (line.includes('%prec LOWER_THAN_ELSE')) { id = 'parse-if'; highlight = true; }
        else if (line.includes('simple_expression : term') || line.includes('term MULOP')) { id = 'parse-math'; highlight = true; }
        else if (line.includes('int main(int')) { id = 'parse-main'; highlight = true; }
        else if (line.startsWith('%token')) { id = 'parse-token'; highlight = true; }
        else if (line.includes('$$ = new symbol_info')) { id = 'parse-reduction'; highlight = true; }
        else { id = 'parse-default'; highlight = true; }
        
        data.push({ line, id, highlight });
    }

    const output = `export const parserCode = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(path.join(__dirname, 'src/data/parserData.js'), output);
}

// Make sure directory exists
if (!fs.existsSync(path.join(__dirname, 'src/data'))) {
    fs.mkdirSync(path.join(__dirname, 'src/data'));
}

generateLexerData();
generateParserData();
console.log('Generated lexerData.js and parserData.js successfully.');
