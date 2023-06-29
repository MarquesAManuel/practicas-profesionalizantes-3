class TicketController {
    constructor() {
      this.model = new TicketModel();
      this.view = new TicketView('app-container');
      this.component = new TicketComponent(this.model, this.view);
    }
  }
  
  const controller = new TicketController();
  controller.view.initialize();
  