var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const form = document.getElementById('main-form');
/*		const form_main = document.getElementById('intro');
		const signInLink = document.querySelectorAll('.link-btn');
		const signUpLink = document.querySelectorAll('.su_link-btn');

		showSignInform = (e) => {
			const mainIntro = e.target.parentNode.parentNode;
			if (form.style.display === 'none') {
				form.style.display = 'block';
				mainIntro.style.display = 'none';
			} else  {
				form.style.display = 'none';
				mainIntro.style.display = 'block';
			}
		}

		showSignUpform = (e) => {
			const mainIntro = e.target.parentNode.parentNode;
			if (form_main.style.display === 'none') {
				form_main.style.display = 'block';
				mainIntro.style.display = 'none';
			} else  {
				form_main.style.display = 'none';
				mainIntro.style.display = 'block';
			}
		}

		signInLink.forEach( btns => btns.addEventListener('click', showSignInform));
		signUpLink.forEach( btns => btns.addEventListener('click', showSignUpform));
