/* HIKES COMMENTS*/

//Requirements:
// JavaScript methods are actions that can be performed on objects.
// A JavaScript method is a property containing a function definition.
// Methods are functions stored as object properties.

/**********************************************************
 * Methods: newComment, addComment, createComment,
 * getComment, loadComment, deleteComment, createCommentElement
 * *******************************************************/

// Properties are the values associated with a JavaScript object.
// A JavaScript object is a collection of unordered properties.
// Properties can usually be changed, added, and deleted, but some are read only.
// objectName.property         // person.age
// or
// objectName["property"]      // person["age"]
// or
// objectName[expression]      // x = "age"; person[x]

/**********************************************************
 * Properties: inputComment, loadComment, saveComment, updateComents
 * *******************************************************/

// A getAllComments and renderCommentList method.
// A comment type to use as a key.
// A filterCommentsByName method.
// A method to add an event listener to the submit button.
// An addComment method

/**********************************************************/
//*Import files into the comments file*/
/*import utils from './utils.js'*/;
import ls from './ls.js';


/*********************************
 * Add a  button to the comment func
 ********************************/

document.querySelector('#addBtn').onclick = newComment;

/****************************
 *  Add a loadComments func
 ****************************/
function loadComments() {
    const commentList = ls.getCommentList();

    commentList.forEach(comment => {
        const el = createCommentElement(comment)
        addCommentList(el);
    })
}

/****************************
 * Add a comment func
 ***************************/
function newComment() {
    const comment = createComment();
    const commentDiv = createCommentElement(comment);
    addToList(commentDiv);
    ls.saveTodo(comment);
}

/****************************
 * Create a createComment func
 ***************************/
function createComment() {
    const input = document.querySelector('#commentInput');
    const newComment = {
            name: hikeName,
            date: new Date(),
            content: comment
          };
    
    const commentDiv = createCommentElement(comment);
    input.value = '';
    return newComment;
}

/****************************
 * Pass in the elements into
 * the createComments func
 ***************************/
function createCommentElement(comment) {
    // commentdiv
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    // completebtn
    const completebtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');

    // comment content
    const commentContent = document.createElement('div');
    commentContent.innerText = comment.content;
    commentContent.classList.add('comment-content');

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', comment.id);
    deleteBtn.classList.add('comment-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteComment;

    commentDiv.appendChild(completeBtn);
    commentDiv.appendChild(commentContent);
    commentDiv.appendChild(deleteeBtn);

    return commentDiv;
}

/****************************
 *  Add the list to the doc
 *
 ****************************/

function addCommentList(commentDiv) {

    document.querySelector('#comment').appendChild(commentDiv);
}

/****************************
 *  Add the event handlers
 ****************************/
function deleteComment(e) {
    const btn = e.currentTarget;
    ls.deleteComment(btn.getAttribute('data-id'));
    document.querySelector('#comments').innerHTML = '';
    loadComments();
}