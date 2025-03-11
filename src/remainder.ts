// ReminderDatabase.ts
 class ReminderDatabase {
  private reminders: { [id: string]: { title: string, description: string, date: string } };

  constructor() {
    this.reminders = {};
  }

  // Create a reminder
  createReminder(id: string, title: string, description: string, date: string) {
    if (this.exists(id)) {
      console.log(`Reminder with id ${id} already exists.`);
      return;
    }
    this.reminders[id] = { title, description, date };
  }

  // Check if a reminder exists by id
  exists(id: string): boolean {
    return this.reminders.hasOwnProperty(id);
  }

  // Get all reminders
  getAllReminders() {
    return Object.entries(this.reminders).map(([id, reminder]) => ({
      id, ...reminder
    }));
  }

  // Get a specific reminder by id
  getReminder(id: string) {
    return this.reminders[id] || null;
  }

  // Remove a reminder by id
  removeReminder(id: string) {
    if (this.exists(id)) {
      delete this.reminders[id];
    } else {
      console.log(`Reminder with id ${id} not found.`);
    }
  }

  // Update a reminder by id
  updateReminder(id: string, title: string, description: string, date: string) {
    if (this.exists(id)) {
      this.reminders[id] = { title, description, date };
    } else {
      console.log(`Reminder with id ${id} not found.`);
    }
  }
}
export default ReminderDatabase;