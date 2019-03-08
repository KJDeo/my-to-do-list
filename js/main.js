const school = document.getElementById(`school`);
const personal = document.getElementById(`personal`);
const completed = document.getElementById(`completed`);

const todoList = [
  { name: `Prepare for IWB Charrette`, cat: 'school'},
  { name: `Buy gift for siblings birthday`, cat: 'personal'},
  { name: `Mail package to friend`, cat: 'personal'},
  { name: `Work on title sequence`, cat: 'school'},
  { name: `Finish Javascript for To-Do list`, cat: 'completed'},
  { name: `Plan marketing for the MTF Hackathon`, cat: 'school'},
  { name: `Dogsit for roommate`, cat: 'completed'},
];

school.innerHTML = todoList
                    .filter(item => item.cat == `school`)
                    .map(item => `<li>I need to ${item.name}.</li>`)
                    .join('');

personal.innerHTML = todoList
                    .filter(item => item.cat == `personal`)
                    .map(item => `<li>I need to ${item.name}.</li>`)
                    .join('');

completed.innerHTML = todoList
                    .filter(item => item.cat == `completed`)
                    .map(item => `<li>I need to ${item.name}.</li>`)
                    .join('');