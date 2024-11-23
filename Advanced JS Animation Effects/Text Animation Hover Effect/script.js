let text = document.querySelector('.text');

let htmlSpans = text.innerText.split('').map((letter, i) => {
    return `<span style="animation-duration: ${Math.random() * 5}s">${letter}</span>`;
}).join('');


text.innerHTML = htmlSpans