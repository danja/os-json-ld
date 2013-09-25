trying to create a JSON-LD context for 

http://data.ordnancesurvey.co.uk/docs/search#json

based on 

http://json-ld.org/

testing using

https://github.com/digitalbazaar/jsonld.js

(read.js should convert the input (context, data) into nquads)

harder than it looks! (due to lack of experience)

----

current status:

only looking at one instance from the results block (will need URIs for meta terms)

node read.js 

ERROR jsonld.CompactError: Could not expand input before compaction.

seems likely that it's down to the levels of nesting within the context and/or data

not entirely clear about options in jsonld.js, see read.js

