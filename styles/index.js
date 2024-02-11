function form_filter_on(){
    var targetDiv = document.getElementById('filter_wrapper'); 

    if(targetDiv.style.display === 'none'){
        targetDiv.style.display = 'inline';
    }
    else if(targetDiv.style.display !== 'none'){
        targetDiv.style.display = 'none'
    }
}

function search_Menu() {
    var input = document.getElementById('keyword').value;
    var menus = document.getElementsByClassName('menu');

    for (var i = 0; i < menus.length; i++) {
        var menuName = menus[i].getElementsByClassName('name')[0].innerText
        if (menuName.includes(input)) {
            menus[i].style.display = 'block';
        } else {
            menus[i].style.display = 'none';
        }
    }
}