const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
let id = 0;
  const start = document.querySelector('[data-action="start"]')
 start.addEventListener('click', () => 
 id = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0,colors.length)]
    start.setAttribute('disabled', true);
    stop.removeAttribute('disabled');
}, 1000)
)
  const stop = document.querySelector('[data-action="stop"]')
  stop.addEventListener('click',() =>{
    stop.setAttribute('disabled', true);
    start.removeAttribute('disabled');
       clearInterval(id)})