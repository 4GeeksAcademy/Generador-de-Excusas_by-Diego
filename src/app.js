window.onload = () => {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const btnGenerater = document.querySelector('.btn_generador');

  btnGenerater.addEventListener("click", () => {
    function getWord(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    let randomWho = getWord(who);
    let randomAction = getWord(action);
    let randomWhat = getWord(what);
    let randomWhen = getWord(when);

    let ExcusaGenerada = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    document.querySelector('.excuse').innerHTML = ExcusaGenerada;

  })





}