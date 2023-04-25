var apim = require('apim');
var json = apim.getvariable('message.body');

session.output.write(json);
apim.output('application/json');
