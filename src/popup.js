const button = document.getElementById('slyButton');

button.addEventListener('click', function() {
  if (button.dataset.status === "hidden") {
    button.innerText = "Esconder Grid";

    button.setAttribute("data-status", "show");
    chrome.tabs.executeScript({
      file: 'scripts/showGrid.js'
    });
  } else {
    button.innerText = "Exibir Grid";

    button.setAttribute("data-status", "hidden");
    chrome.tabs.executeScript({
      file: 'scripts/hideGrid.js'
    });
  }
});