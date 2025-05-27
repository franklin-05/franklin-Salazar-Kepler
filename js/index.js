
//Adding a copyright logo + name + current year
const createFooter=document.createElement('footer');
const today=new Date()
const thisYear=today.getFullYear()


const copyright= document.createElement('p')
const myName= 'Franklin Salazar';
const copyRightSymbol='\u00A9';
copyright.innerHTML = `${copyRightSymbol} ${myName} ${thisYear}`;
createFooter.appendChild(copyright)
document.body.appendChild(createFooter)
//Adding Skills

const skills=["JavaScript","HTML","CSS","Power Apps","Squarespace", "Wordpress"]
const skillSection=document.getElementById("skills")
const skillsList=skillSection.querySelector('ul')
for(let i=0;i<skills.length;i++){
    const skill=document.createElement('li')
    skill.innerText=skills[i]
    skillsList.appendChild(skill)
}
      

        // Selects messages from form
    //const messageForm = document.getElementById('leave_message'); // Or document.getElementById('leave_message');
    //messageForm.addEventListener("submit", function(event) {
      //  event.preventDefault(); // Prevent the default form submission

      //  const name = event.target.usersName.value; // Get the value of the usersName input
      //  const email = event.target.usersEmail.value; // Get the value of the usersEmail input
      //  const userMessage = event.target.usersMessage.value; // Get the value of the usersMessage input

      //  console.log(name); // Log the name
      ////  console.log(email); // Log the email
      //  console.log(userMessage); // Log the user message
   // });


    document.addEventListener("DOMContentLoaded", function() {
    const messageForm = document.getElementById('leave_message');
    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = event.target.usersName.value;
        const email = event.target.usersEmail.value;
        const userMessage = event.target.usersMessage.value;

        console.log(name);
        console.log(email);
        console.log(userMessage);
    
    const messageSection=document.getElementById('messages')
    const messageList=messageSection.querySelector('ul')
    const newMessage=document.createElement('li')
    newMessage.innerHTML=`<a href="mailto:${email}">${name}</a>
  <span>${userMessage}</span>`;

  const removeButton=document.createElement('button')
  removeButton.innerText='remove';
  removeButton.addEventListener("click", function(event) {
   const entry= event.target.parentNode;
   entry.remove()
});
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    console.log(messageList)
    messageForm.reset();
 });

    });
