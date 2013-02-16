var version = 0;
var canUpdate = true;
var typingTimer;
window.onload = function() {
  		
				
	//load the document from the mongodb		
	$.ajax({
		url: docURL,
		type: 'GET',
		data: { 
			_apikey: apiKey
		},
		success: function(response) { 
			$("body").html(response.text);
			version = response.version || 0;
		},
		error: function(response) { 
					
		}
	});
	
	//updates the document with the current text	
	var updateFunc = function()
	{
		if(canUpdate)
		{
			$.ajax({
				url: docURL,
				type: 'GET',
				data: { 
					_apikey: apiKey
				},
				success: function(response) { 
					//check to make sure the version hasn't been
					//changed by another CloudPad instance
					if(response.version == version || !(response.version))
					{
						version = version + 1;
						
						$.ajax({
							url: docURL,
							type: 'PUT',
							data: { 
								_apikey: apiKey,
								document: { "text" : $("body").html(), "version" : version }  
							},
							success: function(resposne) { 
							},
							error: function(stuff) { 
							}
						});
					}
					else
					{
						canUpdate = false;
						$("body").text("CloudPad has been changed in another editor, please refresh your browser");
					}
				},
				error: function(response) { 	
				}
			});
		}
	}
	
	var typingDone = function()
	{
		typingTimer = setTimeout(updateFunc, 500);
	}
	
	var typingStart = function()
	{
		clearTimeout(typingTimer);
	}
	
	$(document).keyup(typingDone);
	
	$(document).keydown(typingStart);
	
	$(window).unload(updateFunc);
			
}
