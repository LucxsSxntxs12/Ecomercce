
        //navegacao 
       
        if(window.innerWidth > 800){
        function navegar(item, local){
        let offSet = item.offsetTop
        local.addEventListener('click',(e)=>{
           e.preventDefault()
            window.scroll({
                top: offSet,
                behavior:"smooth",
            });
        });  
        }
        const protudo = document.getElementById('produto');
        const produtoNavegacao = document.getElementById('produtoNav'); 
        navegar(produto,produtoNavegacao);

        const sobre = document.getElementById('sobre');
        const sobreNavegacao = document.getElementById('sobreNav');
        navegar(sobre,sobreNav)
 
        const home = document.getElementById('home');
        const homeNavegacao = document.getElementById('homeNav');
        navegar(home,homeNav)
        }

        //menu
        var menu = document.querySelector('.menu-icon')
        var ul = document.querySelector('ul')
        var body = document.querySelector('body')

        menu.addEventListener('click', (t) => {
         
            ul.classList.toggle('on')

            if (ul.classList[1] == 'on') {
                t.target.style.transform = 'translateY(5px)';
            }
            else if (ul.classList[0] == 'off') {
                t.target.style.transform = 'translateY(0)';
            }
    
        })
 
