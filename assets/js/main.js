// Milestone 1:
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili.
// Milestone 2 Coloriamo le icone per tipo
// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
console.log(icons);
// Milestone 2 Coloriamo le icone per tipo
 const iconsElem = document.getElementById("icons")
 let iconColour = "black"

 function createIconCard (name, prefix, family, element) {
    element.innerHTML += 
    `
    <div class="icon_card d-flex flex-column justify-content-center align-items-center pt-3 pb-2">
        <i class="${family} ${prefix}${name}" style="color: ${iconColour}; font-size: 40px;"></i>
        <span class="text-uppercase my-1">${name}</span>
    </div>
    `;
}
 icons.forEach(icon => {
    const {name, prefix, type, family} = icon;

    if (type === "animal") {
        iconColour = "#0051ff";
    } else if (type === "vegetable") {
        iconColour = "orange";
    } else if (type === "user") {
        iconColour = "#7f227f";
    }

    createIconCard(name, prefix, family, iconsElem);
 });

// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const selectElem = document.getElementById("filters");

selectElem.addEventListener("change", function(){
    iconsElem.innerHTML="";
    icons.forEach(icon => {
        const {name, prefix, type, family} = icon;
    
        if (type === "animal") {
            iconColour = "#0051ff";
        } else if (type === "vegetable") {
            iconColour = "orange";
        } else if (type === "user") {
            iconColour = "#7f227f";
        }
    
        
        if (type === selectElem.value) {
            createIconCard(name, prefix, family, iconsElem);
        } else if (selectElem.value === "All") {
            createIconCard(name, prefix, family, iconsElem);
        }
    });
})