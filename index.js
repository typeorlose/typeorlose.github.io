const startNowButton = document.querySelector('#start_now');

function startNow() {
  window.open(
    '/start/',
    'Type or Lose Challenge',
    'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no' +
    ',width=' + screen.availWidth +
    ',height=' + screen.availHeight
  );
}

startNowButton.addEventListener('click', startNow);
