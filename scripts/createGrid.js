(function() {
  'use strict';

  const ELEMENT2APPEND = ".t-canvas";

  const appendCss = function (size) {
    const css = `
    .gambiarra-container {
      pointer-events: none;
      position: absolute;
      top: 0;
      height: 100%;
      z-index: 99;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      width: ${size};
    }

    .gambiarra-grid-line {
      display: block;
      width: 1px;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 99;
      margin-left: 16px;
      border-left: 34px solid rgb(0 255 255 / .25);
    }

    .gambiarra-grid-line:first-child {
      margin-left: 0;
    }
    `

    let style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

  }

  const createLine = function ($index) {
    let gridLine = document.createElement("DIV");
    gridLine.className = "gambiarra-grid-line";

    return gridLine
  }

  const createContainer = function (noColumns) {
    let container = document.createElement("DIV");
    container.className = "gambiarra-container";

    for (let i = 0; i < noColumns; i++) {
      container.appendChild(
        createLine(i)
      )
    }

    return container;
  }

  const doSlyce = function () {
    let size = "1184px";
    let columns = 24;
    let gutter = 16;

    appendCss(size);
    const instapageCanvas = document.querySelector(ELEMENT2APPEND);

    instapageCanvas.appendChild(
      createContainer(columns)
    );

    document.querySelector(".gambiarra-container").style.display = "none";
  }

  doSlyce();

})();