class TicketView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.ticketContainer = null;
    this.dialogContainer = null;

    this.confirmButton = null;
    this.cancelButton = null;

    this.dialogVisible = false;
  }

  bindAddTicket(handler) {
    this.dialogVisible = false;
    this.confirmButton.addEventListener('click', () => {
      handler(this.priorityInput.value, this.descriptionInput.value);
      this.hideDialog();
    });

    this.cancelButton.addEventListener('click', this.hideDialog);
  }

  createTicketElement(ticket) {
    const ticketElement = document.createElement('div');
    ticketElement.classList.add('ticket');

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = ticket.description;

    const priorityElement = document.createElement('div');
    priorityElement.classList.add('priority');
    priorityElement.textContent = ticket.priority;

    ticketElement.appendChild(descriptionElement);
    ticketElement.appendChild(priorityElement);

    return ticketElement;
  }

  render(tickets) {
    this.ticketContainer.innerHTML = '';

    tickets.forEach(ticket => {
      const ticketElement = this.createTicketElement(ticket);
      this.ticketContainer.appendChild(ticketElement);
    });
  }

  showDialog() {
    this.dialogContainer.style.display = 'flex';
    this.dialogVisible = true;
  }

  hideDialog = () => {
    this.dialogContainer.style.display = 'none';
    this.dialogVisible = false;
  }

  initialize() {
    this.ticketContainer = document.createElement('div');
    this.ticketContainer.classList.add('ticket-container');

    this.dialogContainer = document.createElement('div');
    this.dialogContainer.classList.add('dialog-container');
    this.dialogContainer.style.display = 'none';

    const dialog = document.createElement('div');
    dialog.classList.add('dialog');

    const confirmButton = document.createElement('button');
    confirmButton.classList.add('confirm-button');
    confirmButton.textContent = 'Aceptar';

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.textContent = 'Cancelar';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Prioridad:';
    const priorityInput = document.createElement('input');
    priorityInput.type = 'text';
    priorityInput.classList.add('priority-input');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Descripción:';
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.classList.add('description-input');

    dialog.appendChild(priorityLabel);
    dialog.appendChild(priorityInput);
    dialog.appendChild(descriptionLabel);
    dialog.appendChild(descriptionInput);
    dialog.appendChild(confirmButton);
    dialog.appendChild(cancelButton);

    this.dialogContainer.appendChild(dialog);

    this.container.appendChild(this.ticketContainer);
    this.container.appendChild(this.dialogContainer);

    this.priorityInput = priorityInput;
    this.descriptionInput = descriptionInput;
    this.confirmButton = confirmButton;
    this.cancelButton = cancelButton;
  }
}
