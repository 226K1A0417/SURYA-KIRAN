

  const red = document.querySelector('.c5');
  const yellow = document.querySelector('.c6');
  const green = document.querySelector('.c7');

  const stopBtn = document.querySelector('.c1');
  const readyBtn = document.querySelector('.c2');
  const goBtn = document.querySelector('.c3');

  function reset() {
    red.style.backgroundColor = 'rgb(43, 37, 37)';
    yellow.style.backgroundColor = 'rgb(43, 37, 37)';
    green.style.backgroundColor = 'rgb(43, 37, 37)';
  }

  stopBtn.onclick = function () {
    reset();
    red.style.backgroundColor = 'red';
  }

  readyBtn.onclick = function () {
    reset();
    yellow.style.backgroundColor = 'yellow';
  }

  goBtn.onclick = function () {
    reset();
    green.style.backgroundColor = 'green';
  }


