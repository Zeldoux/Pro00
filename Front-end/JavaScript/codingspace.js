require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs' } });
//import { Terminal } from '../node_modules/@xterm/xterm';


// put monaco library vs code into editor-container and config vs code style //
require(["vs/editor/editor.main"], function() {
    monaco.editor.create(document.getElementById('editor-container'), {
        value:[
            'function helloWorld() {',
            '\tconsole.log("Hello, world!");',
            '}'
        ].join('\n'),
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true
    });
});

// load and create terminal using xterm.js //
//const terminalContainer = document.getElementById("terminal");
//const terminal = new Terminal();
//terminal.open(terminalContainer);
    
//terminal.write("Welcome to the Terminal\r\n");


