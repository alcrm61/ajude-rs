$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#menu_mobile').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Função para inicializar os totais dos produtos
    function initializeTotals() {
        for (let i = 1; i <= 4; i++) {
            const total = localStorage.getItem('total-' + i) || 0;
            $('#total-' + i).text(total);
        }
    }

    // Função para adicionar produto
    window.addProduct = function(productId) {
        let total = localStorage.getItem('total-' + productId) || 0;
        total = parseInt(total) + 1;
        localStorage.setItem('total-' + productId, total);
        $('#total-' + productId).text(total);
    };

    // Inicializa os totais ao carregar a página
    initializeTotals();
});