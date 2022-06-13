import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll("div.actions-container a.check");
const deleteButtons = document.querySelectorAll("div.actions-container a.delete");

function handleClick(event, actionType){
    modal.open()
    event.preventDefault()

    const roomID = document.querySelector("#Room_ID").dataset.id
    const form = document.querySelector(".modal form")
    const questionNumber = event.target.dataset.id

    switch(actionType){
        case 'check':
            modalTitle.innerHTML = 'Marcar como lida';
            modalDescription.innerHTML = 'Tem certeza que deseja marcar esta pergunta como lida?';
            modalButton.innerHTML = "Sim, marcar";
            modalButton.classList.remove('red-button')
            modalButton.classList.add('blue-button');

            form.setAttribute('action', `/question/${roomID}/${questionNumber}/check`)
            break
        case 'delete':
            modalTitle.innerHTML = 'Excluir pergunta';
            modalDescription.innerHTML = 'Tem certeza que deseja excluir esta pergunta?';
            modalButton.innerHTML = "Sim, excluir";
            modalButton.classList.remove('blue-button')
            modalButton.classList.add('red-button');

            form.setAttribute('action', `/question/${roomID}/${questionNumber}/delete`);
            break
        default:
            console.log(`Valor ${actionType} inválido para o parâmetro "actionType" da função handleClick(). Valores válidos para este parâmetro: "check" e "delete".`)
    }
        
}

checkButtons.forEach(button => { // "button" é um nome genérico arbitário que eu escolhi para referenciar a cada elemendo contido dentro da constante checkButtons. 
    button.addEventListener('click', (event) => {
        handleClick(event, 'check')
    })
});

deleteButtons.forEach(button => { // "button" é um nome arbitário que eu escolhi para referenciar a cada elemendo contido dentro da constante checkButtons. 
    button.addEventListener('click', (event) => {
        handleClick(event, 'delete')
    })
});

// ° Retomar a aula 4 a partir das 01:50:00.
