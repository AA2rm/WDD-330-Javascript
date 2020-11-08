/*Team 8 Activity*/
'use strict';

/*************************************
 * Request the Star Wars people API
 *************************************/

const SWurl = "https://swapi.dev/api/people";

/**************************************
 * Create a class that produces a list
 *************************************/
class PeopleList {
    constructor(url, list, next, prev) {
        this.update(url);
        this.next = next;
        this.element = list;
        this.prev = prev;
    }

/*****************************************
* Use a next & prev urls to build an UI
* a prev & next button that moves back &
* forth btn pgs
*****************************************/
    main() {
        this.prev.addEventListener('click', () => {
            if(this.prevURL !== null)
                this.update(this.prevURL);
        // Data from the API that gives a next URL
        });
        this.next.addEventListener('click', () => {
            if(this.nextURL !== null)
                this.update(this.nextURL);
        });
    }

/********************************************
 * Create a list that will fetch a list 
 * of names from the Star Wars API that
 * returns a JSON type of data and
 * add a promise using a .then()
 * ******************************************/
    update(url) {
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.updateList(data);
                this.setURLs(data);
            })
            .catch(error => console.log('There was an error: ', error));
    }
   

    setURLs(data) {
        this.prevURL = data.previous;
        this.nextURL = data.next;
    }

    // Iterate throught the array list
    updateList(data) {
        let text = '';
        for (let i = 0; i < data.results.length; i++) {
            text += `<li>${data.results[i].name}</li>`;
        }
        this.element.innerHTML = text;
    }
}

/***********************
 * Call the getJSON 
 **********************/
function getPeopleList(url) {
    return getJSON(url);
}

 /*****************************************
 * Enable the  next & prev buttons to 
 * display the list of people
 ***************************************/
window.onload = () => {
    const list = document.getElementById('list');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    let peopleList = new PeopleList(SWurl, list, next, prev);
    peopleList.main();
};



/*****************************************
 * Display the data from the list of people
 * of the Star Wars API & place it into the 
 * inner HTML doc
 ****************************************/
function renderPeopleList(people, peopleListElement) {
    peopleListElement.children[1].innerHTML = '';
    //loop through the list of people
    people.forEach(function(people) {
      //console.log(people);
      //create elements for list...tr
      let listItem = document.createElement('tr');
      listItem.innerHTML = `
          <td><a href="${people.url}">${people.name}</a></td>
          <td>${people.name}</td>
          <td>${people.gender}</td>
          <td>${people.birth_year}</td>
          <td>${people.homeworld}</td>
          `;
    listItem.addEventListener('click', function(event) {
        //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
        event.preventDefault();
        getShipDetails(people.url);
    });
     //add the list item to the list
     peopleListElement.children[1].appendChild(listItem);
    });
  }
  // need to write the code to render the details to HTML
  function renderPeopleDetails(peopleData) {
    console.log(peopleData);
  }
    