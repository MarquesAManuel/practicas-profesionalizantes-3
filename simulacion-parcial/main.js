class TicketComponent {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.bindAddTicket(this.handleAddTicket);
      this.model.subscribe(this.render);
    }
  
    handleAddTicket = (priority, description) => {
      this.model.addTicket({ priority, description });
    }
  
    render = () => {
      const tickets = this.model.getTickets();
      this.view.render(tickets);
    }
  }