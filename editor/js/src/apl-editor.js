var Ajv = require('ajv');
var ajv = new Ajv({ useDefaults: true });
require('ajv-keywords')(ajv);

function initEditor(texts) {
    var container = document.getElementById("jsoneditor");
    var schema = {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "APL-Configurator",
        "type": "object",
        "required": ["labels", "answers", "questions"],
        "properties": {
            "labels": {
                "description": "configurator texts that are not questiona neighter answers",
                "type": "object"
            },
            "answers": {
                "type": "array",
                "minItems": 2,
                "uniqueItems": true,
                "items": {
                    "type": "object",
                    "description": "Single answer contents",
                    "dynamicDefaults": {
                        "id": { "func": "seq", "name": "id" }
                    },
                    "properties": {
                        "id": { "type": "integer", "minimum": 0 },
                        "title": { "type": "string" },
                        "subtitle": { "type": "string" },
                        "images": {
                            "type": "array",
                            "items": {
                                "description": "image file name extension included",
                                "type": "string"
                            }
                        },
                        "text": { "type": "string" }
                    },
                    "required": ["id"]
                }
            },
            "questions": {
                "type": "array",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                    "type": "object",
                    "description": "single question",
                    "dynamicDefaults": {
                        "id": { "func": "seq", "name": "id" }
                    },
                    "properties": {
                        "id": { "type": "integer", "minimum": 0 },
                        "title": { "type": "string" },
                        "subtitle": { "type": "string" },
                        "images": {
                            "type": "array",
                            "items": {
                                "description": "image file name extension included",
                                "type": "string"
                            }
                        },
                        "text": { "type": "string" },
                        "options": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            },
                            "minItems": 2,
                            "uniqueItems": true
                        }
                    },
                    "required": ["id", "options"]
                }
            }
        }
    };

    var options = {
        ajv: ajv,
        onEditable: function(node) {
            if (node.field === 'id') {
                return false;
            }

            //if (data.path.length > 1 && data.path[0] === 'labels' && data.path[1] === '') {
            if (node.field === '') {
                return true;
            } 

            return {field: false, value: true};
        },
        mode: 'tree',
        history: true,
        search: true,
        schema: schema
    };


    var editor = new JSONEditor(container, options);

    editor.set(texts);

    // Save a JSON document
    document.getElementById('saveDocument').onclick = function () {
        // Save Dialog
        fname = 'apl-texts.json';

        // Check json extension in file name
        if (fname.indexOf(".") == -1) {
            fname = fname + ".json";
        } else {
            if (fname.split('.').pop().toLowerCase() == "json") {
                // Nothing to do
            } else {
                fname = fname.split('.')[0] + ".json";
            }
        }
        var blob = new Blob([editor.getText()], { type: 'application/json;charset=utf-8' });
        saveAs(blob, fname);
    };
};

var xhr = new XMLHttpRequest();

xhr.open('GET', '../apl-texts.json');
xhr.send(null);
xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
            //console.log(xhr.responseText); // 'This is the returned text.'
            var texts = JSON.parse(xhr.responseText);
            initEditor(texts);
        } else {
            console.log('ERROR: ' + xhr.status); // An error occurred during the request.
        }
    }
};