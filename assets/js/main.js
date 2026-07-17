/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

/* ==========================================================================
   Validación del Formulario de Contacto - Mavs Jewelry
   ========================================================================== */
(function() {
    // Esperamos a que la página cargue por completo antes de buscar el formulario
    window.addEventListener('load', function() {
        var formulario = document.getElementById('form-contacto');
        
        // Verificamos que el formulario realmente exista en la página actual
        if (formulario) {
            formulario.addEventListener('submit', function(event) {
                // 1. Evita el envío por defecto y que se rompa la página
                event.preventDefault(); 
                
                // 2. Capturamos los valores
                var nombre = document.getElementById('name').value.trim();
                var email = document.getElementById('email').value.trim();
                
                // 3. Expresión regular para validar el correo
                var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                // 4. Validación del Nombre
                if (nombre === "") {
                    alert("Por favor, ingresa tu nombre.");
                    return;
                }
                if (nombre.length < 3) {
                    alert("El nombre debe tener al menos 3 caracteres.");
                    return;
                }

                // 5. Validación del Email
                if (email === "") {
                    alert("Por favor, ingresa tu correo electrónico.");
                    return;
                }
                if (!regexEmail.test(email)) {
                    alert("Por favor, ingresa un formato de correo válido (ejemplo: usuario@correo.com).");
                    return;
                }

                // 6. Éxito
                alert("¡Muchas gracias, " + nombre + "! Nos pondremos en contacto contigo.");
                formulario.reset(); 
            });
        }
    });
})();