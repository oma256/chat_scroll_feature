'use strict';


const msgInput = document.getElementById('msg_input_id');
const contentBlock = document.getElementById('content_id');

msgInput.onkeypress = (e) => {
    const code = (e.keyCode ? e.keyCode : e.which);
    
    if (code == 13) {
        const inputMsg = e.target.value;
        addMsgToContent(inputMsg);
        clearMsgInput();
    }
}

const addMsgToContent = (msg) => {
    let div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('chat-item');
    div.classList.add('me');
    contentBlock.appendChild(div);
}

const clearMsgInput = () => {
    msgInput.value = '';
    msgInput.blur();
}