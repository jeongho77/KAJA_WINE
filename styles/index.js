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

function onClickTaste(ctrl, type, desc, val) {
    // UI
    $(ctrl).parent().children("a").removeClass("on");  /* 별점의 on 클래스 전부 제거 */
    $(ctrl).addClass("on").prevAll("a").addClass("on"); /* 클릭한 별과, 그 앞 까지 별점에 on 클래스 추가 */

    var elementID = 'TASTE' + type;
    var ctrlElement = document.getElementById(elementID);
    if( ctrlElement !== null && ctrlElement !== undefined) {
        ctrlElement.parentNode.removeChild(ctrlElement);
    }
    var ctrlList = document.getElementById('uiSelectedList');
    var html = "<li id=" + elementID + "><p>" + desc + " " + val + "<button type='button' onclick='onClickDeleteTasteElement(\"" + type + "\", \"" + elementID + "\", \"" + ctrl.parentNode.id + "\");'>삭제</button></p></li>";
    ctrlList.innerHTML = ctrlList.innerHTML + html;

    // Data
    if(type in m_dicFilterType) {
        delete m_dicFilterType[type];
    }

    var obj = new Object();
    obj.type = type;
    obj.ctrl = ctrl;
    obj.key = val;
    obj.desc = desc;

    m_dicFilterType[type] = obj;
    searchWine();
}
