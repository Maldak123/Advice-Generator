let adviceId = document.querySelector("#advice-id");
let advice = document.querySelector("#advice");
let btn = document.querySelector("#btn");

btn.addEventListener('click', e => {
  castAdvice();
})
castAdvice();

function castAdvice() {
  let uniqueTimestamp = new Date().getTime();

  fetch(`https://api.adviceslip.com/advice?timestamp=${uniqueTimestamp}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      adviceId.innerText = data.slip.id;
      advice.innerText = `"${data.slip.advice}"`;
    })
    .catch((e) => {
      console.log(e);
    });
}

