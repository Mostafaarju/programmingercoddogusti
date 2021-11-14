function wordCount(boktita) {
  let count = 0;
  for (let i = 0; i < boktita.length; i++) {
    if (boktita[i] == ' ' && boktita[i - 1] != ' ') {
      count++;
    }
  }
  count++;
  return count;
}

console.log(wordCount('Agami eid er pore andolon hobe'));

function wordCountWith(boktita) {
  let count = 0;
  for (let i = 0; i < boktita.length; i++) {
    if (boktita[i] == '.' && boktita[i - 1] != '.') {
      count++;
    }
  }
  return count;
}
console.log(wordCountWith('Amar Sob. Guli. Matha. Nosto, Toi... ki bolis.'));

function wordCountThree(boktita) {
  let count = 0;
  for (let i = 0; i < boktita.length; i++) {
    if (boktita[i] == '.') {
      count++;
    } else if (boktita[i] == '!') {
      count++;
    } else if (boktita[i] == '?') {
      count++;
    }
  }
  return count;
}
console.log(
  wordCountThree(
    'Agami Eider pore andolon hobe. amader ke ki boka paiche? jaliye dao!'
  )
);

function vowelCount(boktita) {
  let count = 0;
  for (let i = 0; i < boktita.length; i++) {
    if (
      boktita[i] == 'A' ||
      boktita[i] == 'a' ||
      boktita[i] == 'E' ||
      boktita[i] == 'e' ||
      boktita[i] == 'I' ||
      boktita[i] == 'i' ||
      boktita[i] == 'O' ||
      boktita[i] == 'o' ||
      boktita[i] == 'U' ||
      boktita[i] == 'u'
    ) {
      count++;
    }
  }
  return count;
}

console.log(vowelCount('Agami eider pore andolon hobe'));
