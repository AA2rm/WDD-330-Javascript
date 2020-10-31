/*HIKES COMMENTS*/
'use strict';

import ls from './hikes.js';

/**********************************
 *Add a button to the comment function
 *********************************/

document.querySelector('#addBtn').onclick = newComment;

// COMMENT MODEL
/************************************************
 * Build an additional class called CommentModel
 * that getAllComments when the app loads from the 
 * local storage; it will display a list of comments 
 * w/ type:hike.
 ***********************************************/
class CommentModel {
  constructor(type) {
    this.type = type;
    // retrieve a comment from local storage 
    this.comments = readFromLS(this.type) || [];
  }

/************************************************* 
Write the model code to retrieve and get the 
comments to/from the local storage.
*************************************************/
  // getAllComments at once from ls
  // and pass in a query argument
  getComments(q = null) {
    if (q === null) {
      // otherwise no query, get all comments of the type
      return this.comments;
    } else {
      // filterCommentsByName method name
      return this.comments.filter(el => el.name === q);
    }
  }

  // add(store) a comment to the local storage
  addComment(postName, comment) {
    const newComment = {
      name: postName,
      comment: comment,
      date: new Date()
    };
    this.comments.push(newComment);
    writeToLS(this.type, this.comments);
  }
}


/**************************************
 * Write a comment type to use as a key
**************************************/
function writeToLS(key, data) {
  // use JSON.stringify to convert obj to a string to store in localStorage.
  window.localStorage.setItem(key, JSON.stringify(data));
}

function readFromLS(key) {
  // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
  return JSON.parse(window.localStorage.getItem(key));
}




// COMMENT VIEW
const commentUI = `<div class="addComment">
  <h2>Add a comment</h2>
  <input type="text" id="commentEntry" />
  <button id="commentSubmit">Comment</button>
  </div>
  <h2>Comments</h2>
  <ul class="comments"></ul>`;

/********************************************
 * Create a renderCommentList method
 ********************************************/
function renderCommentList(element, comments) {
  // remove any  remaining comments from the list
  element.innerHTML = '';
  // add the new list of comments
  comments.forEach(el => {
    let item = document.createElement('li');
    item.innerHTML = `
              ${el.name}: ${el.comment}
        `;

    element.appendChild(item);
  });
}



// COMMENTS CONTROLLER
/********************************************
 * Create a class with a constructor to act 
 * as the controller called Comments. The 
 * constructor should set a local property 
 * called type when the class is instantiated.
 *******************************************/
class Comments {
  constructor(type, commentElementId) {
    this.type = type;
    this.commentElementId = commentElementId;
    //Creates a new module for the comment code.
    this.model = new CommentModel(this.type);
  }


  /*****************************************
   * Use an element.ontouchend = callback to 
   * attach to the button 
   *****************************************/
  addSubmitListener(postName) {
    // use element.ontouchend adds(attaches) only one listener at a time to the button.
    document.getElementById('commentSubmit').ontouchend = () => {
      // debugger;
      this.model.addComment(
        postName, // name of hike comment
        document.getElementById('commentEntry').value
      );
      document.getElementById('commentEntry').value = '';
      this.showCommentList(postName); 
    };
  }

  // class showCommentsList {
  //   constructor(type, showCommentListElementId) {
  //     this.type = type;
  //     this.showCommentsListElementId = showComementListsElementId;
  //     // Return static text or log something out to the console.
               
  //     return this.commentList = "test"(this.type) || [];  
  //     console.log(test);
  //   }
  /*************************************************
   * Create a method in the class called the 
   * showCommentsList method when the hike list is 
   * displayed
   * **********************************************/

  // Add the name of the const to provide the name of the class to instantiate, 
  // & so the const  will initialize the new obj.
  showCommentList(q = null) {
    try {
      const parent = document.getElementById(this.commentElementId);
      // Insert your comment class into the hike class by adding a new instance of the comment class in the constructor. 
      // The new operator returns a reference to the obj it created
      if (!parent) throw new Error('comment parent not found');
      // check if the commentUI code has been added yet
      
      if (parent.innerHTML === '') {
        parent.innerHTML = commentUI;
      }
      if (q !== null) {
        // displaysa postfix arg, show comments w/ new comment button
        document.querySelector('.addComment').style.display = 'block';
        this.addSubmitListener(q);
      } else {
        // hide the comment 
        document.querySelector('.addComment').style.display = 'none';
      }
      // get the comments from the model
      let comments = this.model.getComments(q);
      if (comments === null) {        
        comments = [];
      }
      renderCommentList(parent.lastChild, comments);
      // avoid an error if there are no comments yet.
    } catch (error) {
      console.log(error);
    }
  }
}
export default Comments;


























