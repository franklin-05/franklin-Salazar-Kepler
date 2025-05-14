
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