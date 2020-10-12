//MINECRAFT

/*
 * KEY
 * i = index
 * mob = mobData
*/
//Add eventlistener to the window that calls a func called 'loadData'
//Get the func & run it for each item in the 'minecraftData' array
// loadData() when coming from details
// get app from html (line 70)

//set the pageTitle back to original title
 // hide backBbutton
window.addEventListener('load', loadData);

function loadData() {    
    const app = document.getElementById('app');
    app.innerHTML = ''; 
    app.scrollTo(0,0);    
    document.getElementById('backButton').hidden = true;
    //document.querySelector('#backButton').hidden = true;

    document.querySelector('#pageTitle').innerText = "Minecraft Mobs"; 
   
    minecraftData.forEach( (mob, i) => {
        const mobNode = createMobNode(mob, i); 
        mobNode.addEventListener('click', viewMob);
        app.appendChild(mobNode);
    })
}

//Create elements for the 'createMobNode' func
// div.classList.add('i', 'mob' passing in the properties);
//Loop through each 'showDetails' iteration to get each obj
// and get value from mob  & spawning objs
//Pass in div 
// Set the innerText to mob.type

function createMobNode(mob, i, showDetails = false) {
    const div = document.createElement('div');    
    const img = document.createElement('img');
    
    div.id = i;
    img.src = mob.img;
    
    if (showDetails) {
        const h1 = document.getElementById('pageTitle');
        h1.innerText = mob.type;
        const desc = document.createElement('div');
        desc.innerHTML = `<h2>Description</h2>
                            ${mob.desc}`;

        const spawning = document.createElement('div');
        spawning.innerHTML = `<h2>Spawning</h2>
                            ${mob.spawning}`;

        
        div.appendChild(img);
        div.appendChild(desc);
        div.appendChild(spawning);

    } else {
        const h2 = document.createElement('h2');
        h2.innerText = mob.type;
        div.appendChild(h2);
        div.appendChild(img);
    }

    return div;
}


// Clear the screen and scroll to the top
// refresh the loop to the end of the 'app.innerHTML'
// scroll to the X & Y parameters
// Get back button w/ a default of false
// Pull id out of the event.currentTarget.id
// Get mob node details
function viewMob(event) {
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.scrollTo(0, 0);
  
    document.getElementById('backButton').hidden = false;
    //document.querySelector('#backButton').hidden = false;
    
    const id = event.currentTarget.id;
    // console.log('id', i);    
    const mobDetails = createMobNode(minecraftData[id], id, true);
    
    app.appendChild(mobDetails);    
}