var urlopen = require('urlopen');
var options = {
            target: 'https://sravanig231-eval-test.apigee.net/generateaccesstoken5022',
            sslClientProfile: 'Oauth_sslClientprofile',
            method: 'post',
            contentType: 'application/x-www-form-urlencoded',
            timeout:60,
	    data:'client_id=TrO56nn4ArefkUIqv2ZUbCCLg3DhUWqJ&client_secret=TSdtT618HHpgQBrA&grant_type=client_credentials',
           };

urlopen.open(options, function(error, response) {
  if (error) {
   
    session.output.write("urlopen error: "+JSON.stringify(error));
  } else {
    
    var responseStatusCode = response.statusCode;
    var responseReasonPhrase = response.reasonPhrase;
    console.log("Response status code: " + responseStatusCode);
    console.log("Response reason phrase: " + responseReasonPhrase);
   
    response.readAsJSON(function(error, responseData){
      if (error){
        throw error ;
      } else {
        session.output.write(responseData);
      }
    });
  }
});