const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const navbar__item_active = $$('.navbar__item-active');
const tool__place = $$('.tool__place');

navbar__item_active.forEach((navbar, index) => {
    const tool = tool__place[index];
    navbar.onclick = function () {

        $('.tool__place.actives').classList.remove('actives');
        $('.navbar__item-link.navbar__item-active.active').classList.remove('active');

        this.classList.add('active');
        tool.classList.add('actives');
    }
});


const tool__item = $$('.tool-item');
const tool__drop_menus = $$('.tool__drop-menu');
tool__item.forEach((tool, index) => {
    const tool_drop_menu = tool__drop_menus[index];
    const tool_item = tool__item[index]
    tool.onclick = function () {
        
        if($('.tool-item.tool-active') !== null){
            $('.tool-item.tool-active').classList.remove('tool-active');
            $('.tool__drop-menu.tool__drop-menu-active').classList.remove('tool__drop-menu-active');
            
        }
        
        tool_item.classList.add('tool-active');
        tool_drop_menu.classList.add('tool__drop-menu-active');
    
    }
});
const tool = document.getElementsByClassName("tool-item")
tool.addEventListener("click",function(e){
    for(let i=0; i<tool.length; i++){
        if(!tool[i].classList.contains('tool-active'))
        {
            tool[i].classList.add('tool-active');
        }
        else {
            tool[i].classList.remove('tool-active');
        }
    }
})
window.onclick = function (event) {
    if(!event.target.matches('.tool-item')){
        var i;
        for(i = 0 ; i < tool__drop_menus.length ; i++) {
            var openDropMenu = tool__drop_menus[i];
            if(openDropMenu.classList.contains('tool__drop-menu-active')){
                openDropMenu.classList.remove('tool__drop-menu-active');
            }
        }
        var j;
        for(j = 0 ; j < tool__item.length ; j++) {
            var openTool = tool__item[j];
            if(openTool.classList.contains('tool-active')){
                openTool.classList.remove('tool-active');
            }
        }
    }
}