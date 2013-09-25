fs = require('fs');
jsonld = require('jsonld');

var context = fs.readFileSync('context.txt', "utf8");

// console.log("CONTEXT = "+context);

var doc = fs.readFileSync('raw-json.txt', "utf8");

// console.log("DOC = "+doc);

/*
var json = JSON.parse(doc);
var result = JSON.stringify(json["results"][0]);
console.log(result);
*/


/*
 * * @param [options] options to use:
 *          [base] the base IRI to use.
 *          [compactArrays] true to compact arrays to single values when
 *            appropriate, false not to (default: true).
 *          [graph] true to always output a top-level graph (default: false).
 *          [expandContext] a context to expand with.
 *          [skipExpansion] true to assume the input is expanded and skip
 *            expansion, false not to, defaults to false.
 *          [documentLoader(url, callback(err, remoteDoc))] the document loader.
*/
var options = {
    "skipExpansion" : "false",
    "compactArrays" : "true",
    "graph" : "false"
};

jsonld.compact(doc, context, options, function(err, compacted) {
    if(err) {
        console.log("ERROR "+err);
        return;
    };
    console.log(JSON.stringify(compacted, null, 2));
    
    jsonld.normalize(compacted, {format: 'application/nquads'}, function(err, normalized) {
        if(err) {
            console.log("ERROR \n"+err);
            return;
        };
        console.log("NORMALIZED = \n"+JSON.stringify(normalized));
    });
});

