ScrollOut({
    targets:'[data-direction]',
    threshold: .3,
});
ScrollOut({
    targets:'#portfolio_blender',
    onShown: function(){
        if(document.getElementsByTagName("html")[0].getAttribute("data-scroll-dir-y") == 1){
            for(var i = 0; i < document.querySelectorAll('.blender_thumb').length; i++){
                console.log(i);
                document.querySelectorAll('.blender_thumb')[i].style.transitionDelay = (300*(i+1)).toString() + "ms";
            }
        }
        else{
            for(var i = document.querySelectorAll('.blender_thumb').length-1; i >= 0; i--){
                console.log(i);
                document.querySelectorAll('.blender_thumb')[i].style.transitionDelay = 1800-(300*(i+1)).toString() + "ms";
            }
        }
            document.querySelectorAll('.blender_thumb').forEach(function(thumb){
                thumb.setAttribute('data-scroll', 'in');            
            })
    },
    onHidden: function(){
        document.querySelectorAll('.blender_thumb').forEach(function(thumb){
            thumb.style.transitionDelay = "50ms";
            thumb.setAttribute('data-scroll', 'out');
        })       
    }
})
// Variáveis 
const layer_1 = document.getElementById('layer1');
const layer_2 = document.getElementById('layer2');
const layer_3 = document.getElementById('layer3');
const layer_4 = document.getElementById('layer4');
const layer_5 = document.getElementById('layer5');
var waiting = false;

const layerMoon = document.getElementById('moon');
const layerMoonLight = document.getElementById('moonLight');


const linksModal = document.querySelectorAll('.balao_link');
const btnsModalClose = document.querySelectorAll('.modal_fechar');

linksModal.forEach(function(btn){
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');
        document.getElementById(modal).style.display = "block";
        document.body.style.overflow = "hidden";
    };
})
btnsModalClose.forEach(function(btn){
    btn.onclick = function(){
        var modal = (btn.closest(".modal").style.display = "none");
        document.body.style.overflow = "scroll";
    }
});
window.onclick = function(e){
    if(e.target.className === "modal"){
        e.target.style.display = "none";
        document.body.style.overflow = "scroll";
    }
}

window.onscroll = (function(){
    if(waiting){return;}
    waiting = true;
    animeScroll();

    setTimeout(function(){
        waiting = false
    }, 5);
});

//Funções
var animeScroll = function(){

    //Efeito Parallax - Header
        //Evita que o efeito continue quando o header não estiver visível
    if(window.pageYOffset <= 900){ 
        layer_1.style.top = -(window.pageYOffset/1.4) + 'px';
        layer_2.style.top = -(window.pageYOffset/2) + 'px';
        layer_3.style.top = -(window.pageYOffset/5) + 'px';
        layer_4.style.top = -(window.pageYOffset/6) + 'px';
        layer_5.style.top = -(window.pageYOffset/9) + 'px';
    }

    //Efeito Parallax - Lua
        //Garante que o efeito só aconteça enquanto a silhueta estiver visível

    animLuaTrigger = layerMoonLight.getBoundingClientRect().top - window.innerHeight ;
    if(animLuaTrigger <= 0 && animLuaTrigger >= -1000){
        layerMoon.style.backgroundPositionY = ((layerMoon.getBoundingClientRect().top/.66) - 50)  + 'px';
        luaOpacityTrigger = animLuaTrigger + 200;

        if(luaOpacityTrigger <= 0 && luaOpacityTrigger >= -300){
            formulaOpacidade = (-(luaOpacityTrigger/300)).toFixed(2);
            layerMoonLight.style.opacity = formulaOpacidade;
        }
    }
}
