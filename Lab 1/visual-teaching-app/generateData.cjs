const fs = require('fs');
const path = require('path');

function generateLexerData() {
    const lexerContent = fs.readFileSync(path.join(__dirname, '../22101619/22101619.l'), 'utf8');
    const lines = lexerContent.split('\n');
    const data = [];
    
    let sectionCount = 0;
    data.push({ isSectionHeader: true, title: "Section 1: C Declarations", desc: "Standard C includes and variable setups." });

    for (let line of lines) {
        line = line.replace('\r', '');
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

        if (line.trim() === '%}') {
            data.push({ line, id, highlight });
            data.push({ isSectionHeader: true, title: "Section 2: Flex Definitions", desc: "Defining regex variables like digits and whitespace." });
            continue;
        }
        if (line.trim() === '%%') {
            data.push({ line, id, highlight });
            sectionCount++;
            if (sectionCount === 1) {
                data.push({ isSectionHeader: true, title: "Section 3: Translation Rules", desc: "The core regex patterns and their C actions." });
            } else if (sectionCount === 2) {
                data.push({ isSectionHeader: true, title: "Section 4: User Subroutines", desc: "Helper functions (none needed in this file)." });
            }
            continue;
        }

        data.push({ line, id, highlight });
    }

    fs.writeFileSync(path.join(__dirname, 'src/data/lexerData.js'), `export const lexerCode = ${JSON.stringify(data, null, 2)};`);
}

function generateParserData() {
    const parserContent = fs.readFileSync(path.join(__dirname, '../22101619/22101619.y'), 'utf8');
    const lines = parserContent.split('\n');
    const data = [];

    let sectionCount = 0;
    data.push({ isSectionHeader: true, title: "Section 1: C Declarations", desc: "Standard C includes and variable setups." });

    for (let line of lines) {
        line = line.replace('\r', '');
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
        
        if (line.trim() === '%}') {
            data.push({ line, id, highlight });
            data.push({ isSectionHeader: true, title: "Section 2: Bison Declarations", desc: "Defining tokens, types, and operator precedence." });
            continue;
        }
        if (line.trim() === '%%') {
            data.push({ line, id, highlight });
            sectionCount++;
            if (sectionCount === 1) {
                data.push({ isSectionHeader: true, title: "Section 3: Grammar Rules", desc: "The core CFG rules and their C actions." });
            } else if (sectionCount === 2) {
                data.push({ isSectionHeader: true, title: "Section 4: User Subroutines", desc: "The main() and yyerror() functions." });
            }
            continue;
        }

        data.push({ line, id, highlight });
    }

    fs.writeFileSync(path.join(__dirname, 'src/data/parserData.js'), `export const parserCode = ${JSON.stringify(data, null, 2)};`);
}

function generateSimpleData(filename, exportName, outputFile) {
    const content = fs.readFileSync(path.join(__dirname, '../22101619/', filename), 'utf8');
    const lines = content.split('\n');
    const data = lines.map(line => ({ line: line.replace('\r', ''), id: 'generic-default', highlight: line.trim() !== '' }));
    fs.writeFileSync(path.join(__dirname, 'src/data/', outputFile), `export const ${exportName} = ${JSON.stringify(data, null, 2)};`);
}

generateLexerData();
generateParserData();
generateSimpleData('input.txt', 'inputCode', 'inputData.js');
generateSimpleData('script.sh', 'scriptCode', 'scriptData.js');
generateSimpleData('symbol_info.h', 'symbolCode', 'symbolData.js');
console.log('Generated all data files successfully.');
