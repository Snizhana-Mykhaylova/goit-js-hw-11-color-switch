const refs = {
  body: document.querySelector('body'),
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
};

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

// const switchColor = () => {
//   let idx = randomIntegerFromInterval(0, colors.length - 1);
//   return (refs.body.style.backgroundColor = colors[idx]);
// };

// let switchColorId = null;

const switchColor = {
  intervalId: null,
  isActiv: false,

  start() {
    if (this.isActiv) {
      return;
    }

    (this.isActiv = true),
      (this.intervalId = setInterval(() => {
        let idx = randomIntegerFromInterval(0, colors.length - 1);
        return (refs.body.style.backgroundColor = colors[idx]);
      }, 1000));
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActiv = false;
  },
};

refs.startButton.addEventListener('click', switchColor.start.bind(switchColor));

refs.stopButton.addEventListener('click', switchColor.stop.bind(switchColor));
