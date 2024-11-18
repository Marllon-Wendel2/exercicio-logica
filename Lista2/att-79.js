//HACKRANK 1

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
  }
  
  // Exemplo de uso:
  const meuArray = [1, 2, 3, 4, 5];
  const arrayEmbaralhado = embaralharArray(meuArray);
  console.log(arrayEmbaralhado);