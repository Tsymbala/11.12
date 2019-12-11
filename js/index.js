const clock = document.querySelector('.clock');
const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval (updateTime, 1000);

const link = document.querySelector('a');
if (Math.random() > 0.5) {
link.href = 'https://sj42.programmingmentor.com'
link.textContent = 'ScriptJedi42';
}

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
for (let i = 0; i < 10; i++) {
    const newPara = para.cloneNode(true);
    newPara.textContent = i + 1 + para.textContent;
    sect.appendChild(newPara);
}

for (let i = 0; i < 5; i++) {
    const parToRemove = document.querySelector('section p.dynamic')
    sect.removeChild
}

const clickMe = document.querySelector('.click-me');
clickMe.addEventListener('.click', btnClicked);

function btnClicked() {
        const newPara = para.cloneNote(true);
        sect.appendChild(newPara);
}

document.querySelector('.calc').addEventListener('click', calc);
function calc() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}


$('.some-fun').click(() => $('p').toggle(3000));
