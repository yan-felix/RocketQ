export default function Modal(){
    const modalWrapper = document.querySelector('.modal-wrapper');
    const cancelButtun = document.querySelector(".cancel-button");

    cancelButtun.addEventListener('click', close)


    function open(){
        modalWrapper
            .classList
            .add('actived')
    };

    function close(){
        modalWrapper
            .classList
            .remove('actived')
    };

    return{
        open,
        close
    }
}

// ° Retomar a aula 4 a partir das 01:50:00.