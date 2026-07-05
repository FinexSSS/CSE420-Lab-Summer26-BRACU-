export const scriptCode = [
  {
    "line": "#!/bin/bash",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "",
    "id": "generic-default",
    "highlight": false
  },
  {
    "line": "yacc -d -y --debug --verbose 22101619.y",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "echo 'Generated the parser C file as well the header file'",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "g++ -w -c -o y.o y.tab.c",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "echo 'Generated the parser object file'",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "flex 22101619.l",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "echo 'Generated the scanner C file'",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "g++ -fpermissive -w -c -o l.o lex.yy.c",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "# if the above command doesn't work try g++ -fpermissive -w -c -o l.o lex.yy.c",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "echo 'Generated the scanner object file'",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "g++ y.o l.o",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "echo 'All ready, running'",
    "id": "generic-default",
    "highlight": true
  },
  {
    "line": "./a.exe input.txt",
    "id": "generic-default",
    "highlight": true
  }
];