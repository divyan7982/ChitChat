const socket = io();
let name;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message__area');
let fileInput = document.querySelector('#fileInput');

do {
    name = prompt('Please enter your name: ');
} while (!name);

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(textarea.value);
    }
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            sendMessage(event.target.result, file.name, file.type);
        };
        reader.readAsDataURL(file);
    }
});

function sendMessage(message, fileName = null, fileType = null) {
    let msg = {
        user: name,
        message: message.trim(),
        file: fileName,
        fileType: fileType
    };
    appendMessage(msg, 'outgoing');
    textarea.value = '';
    scrollToBottom();

    socket.emit('message', msg);
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div');
    let className = type;
    mainDiv.classList.add(className, 'message');

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `;
    if (msg.file) {
        markup += `<p><a href="${msg.message}" download="${msg.file}">Download File</a></p>`;
    }
    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
}

// Receive messages
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
    scrollToBottom();
});

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}
