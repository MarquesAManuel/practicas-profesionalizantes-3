class ButtonStateModel {
	constructor() {
		this.value = 0;
	}

	increment() {
		this.value = this.value + 1;
	}

	read() {
		return this.value;
	}

}

class ButtonStateModel2 {
	constructor() {
		this.value = 0;
	}

	increment() {
		if (this.value < 255) {
			this.value = this.value + 2;
		}
		if (this.value > 255) {
			this.value = 255;
		}
	}

	read() {
		return this.value;
	}

	readRgbScale() {
		return 255 - this.value;
	}
}

class ButtonStateController {
	constructor(model, view) {
		this.innerModel = model;
		this.innerView = view;
	}

	init() {
		this.innerView.setValue(this.innerModel.read());
		this.innerView.setRgbScale(this.innerModel.readRgbScale());
	}

	onclick() {
		this.innerModel.increment();
		this.innerView.setValue(this.innerModel.read());
		this.innerView.setRgbScale(this.innerModel.readRgbScale());
	}
}

class ButtonStateView extends HTMLElement {
	constructor() {
		super();

		this.innerModel = new ButtonStateModel();
		this.innerController = new ButtonStateController(this.innerModel, this);

		this.customButton = document.createElement('button');
		this.appendChild(this.customButton);
	}

	connectedCallback() {
		this.customButton.onclick = () => this.innerController.onclick();
		this.innerController.init();
	}

	setModel(model) {
		this.innerModel = model;
		this.innerController = new ButtonStateController(this.innerModel, this);
		this.innerController.init();
	}

	setValue(value) {
		this.customButton.innerText = value.toString();
	}

	setRgbScale(scale) {
        this.customButton.style.color = 'white'
		this.customButton.style.backgroundColor = `rgb(${scale}, 0, 0)`;
	}
}

customElements.define('x-button', ButtonStateView);

function main()
{
    let testButton = new ButtonStateView();
	document.body.appendChild(testButton);

	let Model2 = new ButtonStateModel2();
	let Button2 = new ButtonStateView();
    Button2.setModel(Model2);
	document.body.appendChild(Button2);
}


window.onload = main;