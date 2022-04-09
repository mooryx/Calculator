function themeChanger(e) {
  switch (e) {
    case 1:
      document.documentElement.style.setProperty("--background-color", "hsl(222, 26%, 31%)");
      document.documentElement.style.setProperty("--color-numbers", "hsl(221, 14%, 31%)");
      document.documentElement.style.setProperty("--header-text", "white");
      document.documentElement.style.setProperty("--toggle-background-color", "hsl(223, 31%, 20%)");
      document.documentElement.style.setProperty("--toggle-color", "hsl(6, 63%, 50%)");
      document.documentElement.style.setProperty("--screen-color", "hsl(224, 36%, 15%)");
      document.documentElement.style.setProperty("--keypad-color", "hsl(223, 31%, 20%)");
      document.documentElement.style.setProperty("--btn-color", "hsl(30, 25%, 89%)");
      document.documentElement.style.setProperty("--btn-shadow", "hsl(28, 16%, 65%)");
      document.documentElement.style.setProperty("--del-reset-color", "hsl(225, 21%, 49%)");
      document.documentElement.style.setProperty("--del-reset-shadow", "hsl(224, 28%, 35%)");
      document.documentElement.style.setProperty("--equal-color", "hsl(6, 63%, 50%)");
      document.documentElement.style.setProperty("--equal-shadow", "hsl(6, 70%, 34%)");
      document.documentElement.style.setProperty("--screen-text-color", "white");

      var d = Array.from(document.getElementsByClassName('toggle-btn'));
      d[0].style.marginLeft = '0px';

      break;
    case 2:
      document.documentElement.style.setProperty("--background-color", "hsl(0, 0%, 90%)");
      document.documentElement.style.setProperty("--color-numbers", "hsl(221, 14%, 31%)");
      document.documentElement.style.setProperty("--header-text", "hsl(60, 10%, 19%)");
      document.documentElement.style.setProperty("--toggle-background-color", "hsl(0, 5%, 81%)");
      document.documentElement.style.setProperty("--toggle-color", "hsl(25, 98%, 40%)");
      document.documentElement.style.setProperty("--screen-color", "hsl(0, 0%, 93%)");
      document.documentElement.style.setProperty("--keypad-color", "hsl(0, 5%, 81%)");
      document.documentElement.style.setProperty("--btn-color", "hsl(45, 7%, 89%)");
      document.documentElement.style.setProperty("--btn-shadow", "hsl(35, 11%, 61%)");
      document.documentElement.style.setProperty("--del-reset-color", "hsl(185, 42%, 37%)");
      document.documentElement.style.setProperty("--del-reset-shadow", "hsl(185, 58%, 25%)");
      document.documentElement.style.setProperty("--equal-color", "hsl(25, 98%, 40%)");
      document.documentElement.style.setProperty("--equal-shadow", "hsl(25, 99%, 27%)");
      document.documentElement.style.setProperty("--screen-text-color", "hsl(221, 14%, 31%)");

      var d = Array.from(document.getElementsByClassName('toggle-btn'));
      d[0].style.marginLeft = '23px';

      break;
    case 3:
      document.documentElement.style.setProperty("--background-color", "hsl(268, 75%, 9%)");
      document.documentElement.style.setProperty("--color-numbers", "hsl(52, 100%, 62%)");
      document.documentElement.style.setProperty("--header-text", "hsl(52, 100%, 62%)");
      document.documentElement.style.setProperty("--toggle-background-color", "hsl(268, 71%, 12%)");
      document.documentElement.style.setProperty("--toggle-color", "hsl(176, 100%, 44%)");
      document.documentElement.style.setProperty("--screen-color", "hsl(268, 71%, 12%)");
      document.documentElement.style.setProperty("--keypad-color", "hsl(268, 71%, 12%)");
      document.documentElement.style.setProperty("--btn-color", "hsl(268, 47%, 21%)");
      document.documentElement.style.setProperty("--btn-shadow", "hsl(290, 70%, 36%)");
      document.documentElement.style.setProperty("--del-reset-color", "hsl(281, 89%, 26%)");
      document.documentElement.style.setProperty("--del-reset-shadow", "hsl(285, 91%, 52%)");
      document.documentElement.style.setProperty("--equal-color", "hsl(176, 100%, 44%)");
      document.documentElement.style.setProperty("--equal-shadow", "hsl(177, 92%, 70%)");
      document.documentElement.style.setProperty("--screen-text-color", "hsl(52, 100%, 62%)");

      var d = Array.from(document.getElementsByClassName('toggle-btn'));
      d[0].style.marginLeft = '44px';
      break;




  }


}

let calcScreen = document.getElementById('screen');

let btns = Array.from(document.getElementsByClassName('btn'));

btns.map(button => {

  button.addEventListener('click', (e) => {

    switch (e.target.innerText) {

      case 'RESET':
        calcScreen.innerText = "";
        break;

      case 'DEL':
        if (calcScreen.innerText) {
          calcScreen.innerText = calcScreen.innerText.slice(0, -1);
        }

        break;

      case '=':
          number= calcScreen.innerText;
          
          calcScreen.innerText = eval(calcScreen.innerText);




        break;

      default:
        calcScreen.innerText += e.target.innerText;

    }

  });

});
