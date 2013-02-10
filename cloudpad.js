window.onload = function() {
  		
				
			
				$.ajax({
					url: docURL,
					type: 'GET',
					data: { _apikey: "API_KEY"
								},
					success: function(response) { 
										$("body").html(response.text);
									},
					error: function(stuff) { 
								
								}
				});
			
			
				var updateFunc = function()
				{
						console.log($("body").html());
						$.ajax({
							url: docURL,
							type: 'PUT',
							data: { _apikey: "API_KEY",
										document: { "_id" : "test", "text" : $("body").html() }  
										},
							success: function(resposne) { 
												console.log("success\n");
											},
							error: function(stuff) { 
										console.log("error\n");
										
										}
						});
				}
				
				$(document).keyup(updateFunc);
				
				$(window).unload(updateFunc);
			}
