document.addEventListener('DOMContentLoaded', () => {
  setupRunningLine();
});

function setupRunningLine() {
  $('.RunningLine_list').marquee({
    startVisible: true,
    duplicated: true,
    delayBeforeStart: 0,
    duration: 7000,
  });
}
