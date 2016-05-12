(function($scope){
	
	var DBO = function () {
		// this.user = getCookie("username");
		this.user = Cookies.get('username');
		
		this.render = function (id) {
			$('main').html($('#' + id).html());
		};

		this.append = function (container, id) {
			$('#' + container).append($('#'+id).html());
		};
		// this.displayLogin = function () {
		// 	$('main').html($('#form-login').html());
		// };

		this.submitLogin = function() {
			var username = $('#loginInputUsername').val(),
					password = $('#loginInputPassword').val(),
					remember = $('#loginRemember').prop('checked');

			if (remember) {
				console.log('should be setting cookies');
				Cookies.set('username', username, { expires: 1 });
				// setCookie("username", username);
			}

			this.render('view-domains');
		};

		// Initialize
		if (this.user) {
			alert('cookies!! user = ', this.user);
		} else {
			this.render('view-login');
			// this.render('view-new-enrollment');
		}
	};

	$scope.dbo = new DBO();
})(window);


// Util Functions
function getCookie (cname) {
	var name = cname + "="
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0){
			console.log('cookie for for', cname);
			return c.substring(name.length,c.length);
		} 
	}
	console.log('no cookies found for', cname);
	return null;
}
	
function setCookie(cname, cvalue, exdays) {
	console.log('set cookies : ', cname, cvalue);
	var d = new Date();
	d.setTime(d.getTime() + ((exdays||1)*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	var cString = cname + "=" + cvalue + "; " + expires;
	document.cookie = cString;
}