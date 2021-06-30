var showModal = false;

const ToggleModal = (elementBg,elementShow) => {
    showModal = !showModal;
    GetShowModal(showModal,elementBg,elementShow);
}

const GetShowModal = (status,elementBg,elementShow) => {
    var element = document.getElementById(elementShow);
    var bg = document.getElementById(elementBg);
    if(status){
        element.classList.add("show");
        bg.classList.add("show");
    }else{
        element.classList.remove("show");
        bg.classList.remove("show");
    }
}