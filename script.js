// প্রশ্ন-1.1 যদি কেউ লেখার সময় দুইটা শব্দের মধ্যে একটা হোয়াইট স্পেস না দিয়ে মাঝেমধ্যে একটা হোয়াইট স্পেস দেয়।
// আবার কখনো কখনো একটার চাইতে বেশি অৰ্থাৎ দুইটা বা তিনটা হোয়াইট স্পেস দিয়ে দেয় তাহলে তুই কিভাবে শব্দ গণনা করবি।
// সেইরকম একটা কোড লিখে ফেল।

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

// প্রশ্ন-1.2 সারা বছর বাক্যের মধ্যে কয়টা শব্দ আছে সেটা প্র্যাকটিস করে যাওয়ার পর ইন্টারভিউতে প্রশ্ন করছে যে কোন একটা প্যারাগ্রাফের মধ্যে কয়টা বাক্য আছে।
// তুই যদি রিয়েল হাবলু হস তাহলে মাথা গরম করে দৌড় দিবি ?
// আর একটু নন - হাবলু হলে চিন্তা করে বুদ্ধি বের করবি। আগে যেখানে হোয়াইট স্পেস আছে কিনা চেক করতি এখন সেখানে ডট চিহ্ন(".") চেক করলেইতো কাজ হয়ে যাবে।

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

// প্রশ্ন-1.3 বাক্য সব সময় ডট চিহ্ন (".") দিয়ে শেষ হয় না। মাঝে মধ্যে প্রশ্নবোধক চিহ্ন ("?') বা আশ্চার্যবোধক চিহ্ন ("!") দিয়ে শেষ হয়। তখন কিভাবে প্রোগ্রাম লিখবি?

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

// প্রশ্ন-1.4 একটা বাক্যের মধ্যে কয়টা ভাওয়েল(vowel) আছে সেটা বের করার কোডিং কিভাবে করবি?

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
