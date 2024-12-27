function tellTime() {
    let time = new Date();

    let hours = String(time.getHours()).padStart(2, '0'); // Ensure 2 digits
    let minutes = String(time.getMinutes()).padStart(2, '0'); // Ensure 2 digits
    let seconds = String(time.getSeconds()).padStart(2, '0'); // Ensure 2 digits

    return ` ${hours}:${minutes}:${seconds} | ${time.toDateString()}`;
}


let ul = document.createElement('ul');
let main = document.querySelector('body main');

document.addEventListener('keydown', (e) => {
    let li = document.createElement('li');
    if (e.keyCode === 32) {
        li.textContent = `SPACE pressed at ${tellTime()}`;
    } else {
        li.textContent = `${e.key} pressed at ${tellTime()}`;
    }
    ul.appendChild(li);

    // Scroll ul to bottom
    ul.scrollTop = ul.scrollHeight;
});


main.appendChild(ul);
