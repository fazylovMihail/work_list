function add(card_template, work_template, wrapper){
    const paragraf_card = card_template.querySelector('.card_info p');
    paragraf_card.innerHTML = 'Привет';

    card_template.querySelector('.switch_btns_wrapper').appendChild(work_template);
    wrapper.appendChild(card_template);
}
function highlight(name_template, wrapper, click) {
    const cards = wrapper.querySelectorAll('.card'); 
    cards.forEach(card => {
        card = {element: card, click: false};
        
        const switch_btns_wrapper = card.element.querySelector('.switch_btns_wrapper');
        switch_btns_wrapper.innerHTML = null; switch_btns_wrapper.appendChild(document.getElementById(name_template).content.cloneNode(true));

        const highlight_btn = switch_btns_wrapper.querySelector('button');
        if(!click){
            highlight_btn.addEventListener('click', function highlight_func(){
                click = true;
                const img = highlight_btn.querySelector('img');
                if(card.click){
                    card.click = false;
                    img.style.display = 'none';
                } else{
                    card.click = true;
                    img.style.display = 'block';
                }
            });
        } else{
            highlight_btn.removeEventListener('click', highlight_func);
        }
    });
}
function create_templates(names){
    const result = [];
    names.forEach(el => result.push(document.getElementById(el).content.cloneNode(true)));

    return result
}

export function event_manager(card, wrapper, click){
    const names = ['card_template', 'base_btn_template'], [card_template, base_btn_template] = create_templates(names);
    card.id === 'header_left_btn'? add(card_template, base_btn_template, wrapper): wrapper.querySelectorAll('.card').length > 1 && card.id === 'header_right_btn'? highlight('highlight_btn_template', wrapper, click): alert('Чтобы выделить карточки, должны быть хотя бы две');
}