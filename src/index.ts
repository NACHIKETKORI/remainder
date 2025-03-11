
// app.ts
import ReminderDatabase from './remainder';  // Importing ReminderDatabase class

// Create an instance of ReminderDatabase
const reminderDb = new ReminderDatabase();

// Create some reminders
reminderDb.createReminder('1', 'Buy groceries', 'Milk, eggs, bread', '2025-03-12');
reminderDb.createReminder('2', 'Doctor appointment', 'Checkup at 3 PM', '2025-03-15');

// Get all reminders
console.log('All Reminders:', reminderDb.getAllReminders());

// Get a specific reminder
console.log('Reminder with id 1:', reminderDb.getReminder('1'));

// Update a reminder
reminderDb.updateReminder('1', 'Buy groceries', 'Milk, eggs, bread, butter', '2025-03-14');
console.log('Updated Reminder with id 1:', reminderDb.getReminder('1'));

// Remove a reminder
reminderDb.removeReminder('2');
console.log('All Reminders after removal:', reminderDb.getAllReminders());
