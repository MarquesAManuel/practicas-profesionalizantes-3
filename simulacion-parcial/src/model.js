class TicketModel {
    constructor() {
      this.tickets = [];
      this.listeners = [];
    }
  
    addTicket(ticket) {
      this.tickets.push(ticket);
      this.notifyListeners();
    }
  
    getTickets() {
      return this.tickets;
    }
  
    subscribe(listener) {
      this.listeners.push(listener);
    }
  
    unsubscribe(listener) {
      this.listeners = this.listeners.filter(l => l !== listener);
    }
  
    notifyListeners() {
      this.listeners.forEach(listener => listener());
    }
  }
  