const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');

content.textContent = 'To jest stworzony div z mojej strony';

container.appendChild(content)
