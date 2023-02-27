// ** TASKS ** //

//1 step - prompt with "What would you like to do?" showed to a user
//2 step - user can decide, what do to:
// 2.1 - 'new' - add a new to do thing (a prompt 'Enter new todo appears') == > user writes new to do in the prompt, in console - 'Collect eggs appers' and 'What would you like to do?' appears again.
// 2.2 - 'list' - console is showing a following message:
// ***********
// 0. Feed Turtles
// 1. Feed Chickens
// 2. Feed cats
// Number is important as we want to delete to do by using this index number!
// 2.3 'delete' - promp user a message - 'Enter a index you want to delete!', after entering index (1) message 'To do Removed' appears in a console and message 'What would you like to do appears again'
// 2.4 'quit' - quits a list and prints in the console 'Ok, you quit!'

let todos = [];
let action = prompt('What would you like to do?');

while (action !== 'new' && action !== 'list' && action !== 'delete' && action !== 'quit') {
    action = prompt('Please enter a valid command: "new", "list", "delete" or" "quit"');
};

while (action !== 'quit') {
    if (action === 'new') {
        action = prompt('Enter a new TO DO');
        todos.push(action);
        console.log('New TO DO is added to a list');
        action = prompt('What would you like to do?');
    } else if (action === 'list') {
        console.log('*****Your current DO TO list*****');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*********************************');
        action = prompt('What would you like to do?');
    } else if (action === 'delete') {
        action = parseInt(prompt('Enter an index to delete'));
        todos.splice(action, 1);
        console.log('TO DO item deleted!');
        action = prompt('What would you like to do next?')
    }
};

console.log('You quit the TO DO app!');


