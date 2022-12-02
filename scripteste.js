(function() {

	$('#live-chat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').fadeOut(300);

	});

}) ();

/**/

function validarperfil(){
    var campo1 = document.getElementById("inputSenha");
    var campo2 = document.getElementById("inputSenha2");
    if (campo1.value != campo2.value){
    campo2.setCustomValidity("As senhas não conferem");
    campo2.validity = false;
    }else{
    campo2.setCustomValidity("");
    campo2.validity = true;
    }
    }
