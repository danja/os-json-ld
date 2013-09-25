trying to create a JSON-LD context for 

http://data.ordnancesurvey.co.uk/docs/search#json

based on 

http://json-ld.org/

testing using

https://github.com/digitalbazaar/jsonld.js/blob/master/js/jsonld.js

(read.js should convert the input (context, data) into nquads)

harder than it looks! (due to lack of experience)

----

current status:

node read.js 
ERROR jsonld.CompactError: Could not expand input before compaction.

seems likely that it's down to the levels of nesting within the context and/or data
not entirely clear about options in jsonld.js

