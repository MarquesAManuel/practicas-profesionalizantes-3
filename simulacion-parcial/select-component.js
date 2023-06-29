class SelectComponent extends HTMLElement {
    constructor() {
      super();
      this.model = [];
      this.controller = new SelectController();
      this.view = new SelectView(this);
  
      // Bind controller events
      this.addEventListener('change', () => this.controller.onOptionSelected(this.value));
    }
  
    connectedCallback() {
      this.render();
    }
  
    setModel(model) {
      this.model = model;
      this.render();
    }
  
    render() {
      this.innerHTML = this.view.renderOptions(this.model);
    }
  }
  
  class SelectController {
    onOptionSelected(value) {
      console.log(`Selected option: ${value}`);
    }
  }
  
  class SelectView {
    constructor(component) {
      this.component = component;
    }
  
    renderOptions(options) {
      return `
        <select>
          ${options.map((option, index) => `<option value="${index}">${option}</option>`).join('')}
        </select>
      `;
    }
  }
  
  customElements.define('select-component', SelectComponent);
  