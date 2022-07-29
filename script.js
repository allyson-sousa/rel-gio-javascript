const currentTime = () => {
  // const ul = document.querySelector("strong");
  // let data = new Date();
  // let dia = data.getDate();
  // let mes = data.getMonth();
  // let ano = data.getFullYear();

  // // Formatação e Impressão da Variável //
  // let datahj = `${dia}/0${mes}/${ano}`;
  // ul.innerText = datahj;

  const el = document.querySelector("h1");
  let date = new Date();
  let hh = date.getHours();

  let mm = date.getMinutes();
  let ss = date.getSeconds();
  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  // Formatação e Impressão da Variável //
  let time = `${hh}:${mm}:${ss}`;
  el.innerText = time;
};
currentTime();
setInterval(currentTime, 1000);
