'use strict';


const msgInput = document.getElementById('msg_input_id');
const contentBlock = document.getElementById('content_id');

msgInput.onkeypress = (e) => {
    const code = (e.keyCode ? e.keyCode : e.which);
    
    if (code == 13) {
        addMsgToContent(e.target.value);
        msgInput.value = '';
    }
}

const addMsgToContent = (msg) => {
    const div = document.createElement('div');
    
    div.innerHTML = msg;
    div.classList.add('chat-item', 'me');

    contentBlock.appendChild(div);
}
