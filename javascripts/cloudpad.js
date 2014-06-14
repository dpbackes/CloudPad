window.onload = function() {
	$.ajax({
		url: docURL,
		type: 'GET',
		data: { _apikey: apiKey
					},
		success: function(response) {
			$("body").html(response.text);
		},
		error: function(stuff) {

		}
	});


	var updateFunc = function()
	{
			$.ajax({
				url: docURL,
				type: 'PUT',
				data: { _apikey: apiKey,
					document: { "text" : $("body").html() }
				},
				success: function(resposne) {
				},
				error: function(stuff) {
				}
			});
	}

	$(document).keyup(updateFunc);

	$(window).unload(updateFunc);
}
