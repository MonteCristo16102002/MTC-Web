        const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close') 
        const modalContainer = document.querySelector('.js-modal-container')
         
        function showBuyTicket(){
            modal.classList.add('open')
        }
        function showClose(){
            modal.classList.remove('open')
        }
        /*Tranh su noi bot*/
        function stopClose (event){
            event.stopPropagation()
        }
        for (const buyBtn of buyBtns){
            buyBtn.addEventListener('click', showBuyTicket)
        }
        modalClose.addEventListener('click', showClose)
        modal.addEventListener('click', showClose)
        modalContainer.addEventListener('click', stopClose)

        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;

        mobileMenu.onclick = function(){
            var isClosed = header.clientHeight === headerHeight
            if(isClosed){
                header.style.height = 'auto'
            } else{
                header.style.height = null
            }
        }
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
        for(var i=0; i<menuItems.length; i++)
        {
            var menuItem = menuItems[i];
            menuItem.onclick = function(event){
                var isOpenMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav') 
                if(!isOpenMenu){
                    header.style.height = null
                }else{
                    event.preventDefault()
                }
            }
        }
