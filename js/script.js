// Variáveis 
const layer_1 = document.getElementById('layer1');
const layer_2 = document.getElementById('layer2');
const layer_3 = document.getElementById('layer3');
const layer_4 = document.getElementById('layer4');
const layer_5 = document.getElementById('layer5');

const layerMoon = document.getElementById('moon');
const layerMoonLight = document.getElementById('moonLight');

const target = document.querySelectorAll('[data-anime]');

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

//Listeners
window.addEventListener("scroll", animeScroll, false);


//Funções
function animeScroll(){
    layer_1.style.top = -(window.pageYOffset/1.4) + 'px';
    layer_2.style.top = -(window.pageYOffset/2) + 'px';
    layer_3.style.top = -(window.pageYOffset/5) + 'px';
    layer_4.style.top = -(window.pageYOffset/6) + 'px';
    layer_5.style.top = -(window.pageYOffset/9) + 'px';

    var bodyRect = document.body.getBoundingClientRect();
    var moonRect = layerMoon.getBoundingClientRect();
    var moonLightRect = layerMoonLight.getBoundingClientRect();

    layerMoonLight.style.opacity = 1 - ((moonLightRect.top -70)/300)
    layerMoon.style.backgroundPositionY = (moonRect.top  /.66)  + 'px';

    const windowTop = window.pageYOffset + ((window.innerHeight *9)/11);
  

    target.forEach(function(element){
        var elemRect = element.getBoundingClientRect();
        var offset = elemRect.top - bodyRect.top;
        if(windowTop > offset)
            element.classList.add('animate');
        else
            element.classList.remove('animate');
    });
}