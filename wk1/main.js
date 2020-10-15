'use strict';

/*Connect weekly notes to another weekly notes file*/
wk1.next = wk2;

/*Call the connected files to the console */
console.log(wk1);

/*STRUCTURE OF A NODE
 *Examples: of a 'node' 
 *const n1 = { the name of this node is n1
     data: 100;//
 }
 
 *const team { the name of this node is team
     data: name'
 } 
  
 */
//Write a JS function that selects an ol element from html, read a list of links from an array, and adds and
//element label & url from the list of list to a new 'li' to the ol element 
/*Create a class for the 'link' constructor in wk1's index.html
 * It must take in the 'DATA' & a 'POINTER'
 * by default set pointer 'next'to null
 * Take the data that's passed in & set it to the data property 
 * & do the same with the pointer 'next'.
 */

/************************************
 *Create a class node called links & 
 *************************************/
class links {
    constructor(label, next = url) { //next is usally set to null by default
        this.data = label; //data
        this.next = url; //pointer
    }
}

/********************************************
 *Pass in a constructor node called'links'
 ********************************************/
const links = new Links("Week1 notes");
/*console.log(links);*/

/***********************************************
 *Create a class node called inkedLinks
 ************************************************/
class LinkedLinks {
    constructor() {
        this.head = null; //Set the head and size properties
        this.size = 0;
    }


    /**********************************************
     * Create a method/fuction that inserts the first node'
     **********************************************/
    insertFirst(label) {
        this.head = new Links(label, this.head); // this.head pushes the data if not empty to 'next' pointer.
        this.size++;
    }

    /**********************************************
     * Create a method that inserts the last node'
     **********************************************/
    insertLast(label) {
        let node = new Links(label);
        let current;
        /*If empty, make it the head*/
        if (!this.head) {
            this.head = links;
        } else {
            current = this.head;

            while (current.next) { //Loop through index if current to the next value
                current = current.next;
            }
            current.next = links;
        }
        this.size++;
    }

    /**********************************************
     * Create a method that insert at the index*
     **********************************************/
    insertAt(label, index) {
        if (index > 0 && index > this.size) { //If index is out of range
            return;
            //If first index
            if (index === 0) {
                this.head = new Links(label, this.head); // This line can be reused
                return;
            }
            const links = new Links(label);
            let current, previous;

            //Set current to first
            current = this.head;
            let count = 0; //Set counter

            while (count < index) {
                previous = current; // Link(Node) before index
                count++;
                current = current.next; //Link(Node) after index
            }
            links.next = current; //Set next value to current link(node)
            previous.next = link; // Set next value to link(node)

            this.size++;
        }
    }

    /*******************************************************
     * Create a method that gets  an index(any where in btn)
     *******************************************************/
    getAt(index) {
        let current = this.head; //Set current var to .head (beginning)
        let count = 0; //Set count to 0
        while (current) { //Loop through current index
            if (count == index) { //Check to see if the index is initialize to 0
                console.log(current.label);
            }
            count++; //Increment the index
            current = current.next; //Move along the linked links
        }
        return null;
    }

    /**********************************************
     * Create a method that removes an index
     **********************************************/
    removeAt(index) {
        if (index > 0 && index > this.size) { //Check if the index is not out of range
            return;
        }
        let current = this.head; //Set to the first node(links)
        //initialize previous & count
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) { //If equal to 0 set the head to the next value
            this.head = current.next;
        } else {
            while (count < index) { // If not equal to 0 or if count is less than the index than increment) 
                count++; //Loop through index while incrementing
                previous = current; //Set prvious to current value
                current = current.next; //Set current to the next value

            }
            //Remove the element
            previous.next = current.next; //Set previous.next to current.next

        }
        this.size--; //Descrese the size
    }

    /**********************************************
     * Create a method that clears a list
     **********************************************/
    clearList() {
        this.head = null; //Set the head to null & decrement the size
        this.size = 0;
    }

    /*********************************************
     * Create a method that prints a list of data
     **********************************************/
    printListLabel() {
        let current = this.head;
        while (current) {
            /*console.log(current.label);*/
            current = current.next;

        }
    }
}

/**************************************************
* const ll = new LinkedLinks (); 
* Comment out when not using & change the parameters
* to 'label' data from html
**************************************************/
//Test: Locate the #ll
// ll.insertFirst(100);
// ll.insertFirst(200);
// ll.insertFirst(300);
// ll.insertFirst(400);

// //Test: Move the 500 to the #2 index and then the #0 index
// ll.insertFirst(500, 2);
// ll.insertFirst(500, 0);

// //Test: Determine if an index is out of range
// ll.insertFirst(500, 20);
// ll.insertFirst(500, 15);

// //Test: Get a specific value from the index if in range
// ll.getAt(15);
// ll.getAt(5);
// ll.getAt(3);
// /*console.log(ll);*/

// //Test: Remove the index from the linked list
// ll.removeAt(2);
// ll.removeAt(35);

// //Test: Clear the list from the index
// ll.clearList();

// //Test: Print the data list to the screen
// ll.printListLabel();