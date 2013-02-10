window.onload = function()
{
  if(apiKey == "apiKeyNOTSET")
  {
  	$("body").attr('contenteditable','false');
  	$("body").html("<div>Please enter your api key from <a href=\"http://www.mongohq.com\">MongoHQ</a> below and press 'enter'.</div><br><div><input id=\"apiKey\" type=\"text\" />");
  	
  	//look for the enter key
  	 $('#apiKey').keypress(function(e) {
  		if(e.which == 13) {
  			jQuery(this).blur();							
  			apiKey = $("#apiKey").val();
  			
  			$("body").html("<div>Creating CloudPad database...</div>");
  			
  			//create the Notepad database
  			$.ajax({
  				url: "https://api.mongohq.com/databases",
  				type: 'POST',
  				data: { 
  							_apikey: apiKey,
  							name: "CloudPad",
  							slug: "sandbox"
  				},
  				success: function(response) { 
  				
  									//create a document for them
  									$.ajax({
  										url: "https://api.mongohq.com/databases/CloudPad/collections/notes/documents",
  										type: 'POST',
  										data: { _apikey: apiKey,
  													document: { _id:"note0", text : "Congratulations! You have successfuly initialized CloudPad. Create a bookmark for this URL, then use the bookmark from any webbrowser to access your pad!" }  
  													},
  										success: function(response) { 
  															//send them on to a proper CloudPad dataurl
  															window.location = $(location).attr('href').replace("apiKeyNOTSET", $("#apiKey").val());
  														},
  										error: function(response) { 
  													$("body").text("There was an error creating the document: "+JSON.stringify(response));																	
  												}
  									});
  									
  									
  									
  								},
  				error: function(response) { 
  								$("body").text("There was an error creating the CloudPad database: "+JSON.stringify(response));
  							}
  			});
  		}
  	});
  }

}
