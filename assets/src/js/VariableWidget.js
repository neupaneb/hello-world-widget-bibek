import { Widget } from "./Widget.js";

export class VariableWidget extends Widget {

  constructor(container, page) {
    super(container, page);

    this.variableValue = null;

    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Type a value…";
    this.input.className = "variable-input";

    this.button = document.createElement("button");
    this.button.className = "button-semantic button-secondary variable-button";
    this.button.innerText = "Store Value";

    this.display = document.createElement("div");
    this.display.className = "variable-display";
    this.display.innerHTML = "<strong>Variable Value:</strong> <span style='color: var(--neutral-400);'>(no value stored yet)</span>";

    this.container.appendChild(this.input);
    this.container.appendChild(this.button);
    this.container.appendChild(this.display);

    this.button.addEventListener("click", () => this.storeValue());
  }

  storeValue() {
    this.variableValue = this.input.value;

    if (this.variableValue) {
      this.display.innerHTML = `<strong>Variable Value:</strong> <span style='color: var(--primary-700); font-weight: 700;'>"${this.variableValue}"</span>`;
    } else {
      this.display.innerHTML = "<strong>Variable Value:</strong> <span style='color: var(--neutral-400);'>(empty)</span>";
    }

    this.display.classList.add("changed");

    setTimeout(() => {
      this.display.classList.remove("changed");
    }, 400);
  }
}
