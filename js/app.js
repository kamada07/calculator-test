document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display'),
      numbers = document.querySelectorAll('.number'),
      operators = document.querySelectorAll('.operator'),
      equals = document.querySelector('.equals'),
      clear = document.querySelector('.clear');
  let currentExpression = '';

  for (let i = 0; i < numbers.length; i++) {
      numbers[i].addEventListener('click', function() {
          currentExpression += this.getAttribute('data-number');
          display.value = currentExpression;
      });
  }

  for (let i = 0; i < operators.length; i++) {
      operators[i].addEventListener('click', function() {
          currentExpression += ' ' + this.getAttribute('data-operator') + ' ';
          display.value = currentExpression;
      });
  }

  equals.addEventListener('click', function() {
      try {
          let result = new Function('return ' + currentExpression)();
          display.value = result;
          currentExpression = result.toString();
      } catch (error) {
          display.value = 'Error';
          currentExpression = '';
      }
  });

  clear.addEventListener('click', function() {
      currentExpression = '';
      display.value = '';
  });
});
