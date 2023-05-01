var urlopen = require('urlopen');
var options = {
            target: 'http://mocktarget.apigee.net/json',
            method: 'get',
           contentType: 'application/json',
           };	   
		   
urlopen.open(options, function(error, response) {
  if (error) {
 
    session.output.write("urlopen error: "+JSON.stringify(error));
  } else {
        
      response.readAsBuffer(function(error, responseData1){
      if (error){
        throw error ;
      } else {
var b=responseData1
       //session.output.write(b);
	  //second url call
	    var urlopen = require('urlopen');
var options1 = {
            target: 'http://jsonplaceholder.typicode.com/todos/1',
            method: 'get',
           contentType: 'application/json',
           };
		   
		   urlopen.open(options1, function(error, response) {
  if (error) {
 
    session.output.write("urlopen error: "+JSON.stringify(error));
  } else {
        
      response.readAsBuffer(function(error, responseData){
      if (error){
        throw error ;
      } else {


       var a=responseData
       //session.output.write(a);
         session.output.write(a+b);
      }
    });
  }
});
      }
    });
  }
});