


window.onload = function() {
  const arr=[
    ['Mi hermano','Mi tortuga', 'La vecina','Mi suegra','El doctor'],
    ['meó','abrió','se comió','rompió',],
    ['el libro','a mi suegra','el ordenador','la mesa','mis apuntes'],
    ['ayer','mientras jugaba el madrid','hace 3 años','en el 1487']
  ]
  let excusa='';
  arr.forEach(fila => {
    const random_index= Math.floor(Math.random()*fila.length);
    excusa += fila[random_index] + ' ';
    document.querySelector('#excusa').innerHTML = excusa;
  })
  

};
