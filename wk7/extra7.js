'use strict';


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
  
  /***********************************
   * Add a new func called hikeName
   **********************************/
  function newHikeName() {
    const hikeName = createHikeName();
    const hikeNameDiv = createHikeNameElement(hikeName);
    addToList(hikeNameDiv);
    ls.saveTodo(hikeName);
  }
  
  /***********************************
   * Add a new func called date
   **********************************/
  function newDate() {
    const date = createDate();
    const dateDiv = createDateElement(date);
    addToList(dateDiv);
    ls.saveTodo(dateName);
  }
  
  
  /************************************
   * Add a new func called comment
   ***********************************/
  function newComment() {
    const comment = createComment();
    const commentDiv = createCommentElement(comment);
    addToList(commentDiv);
    ls.saveTodo(comment);
  }
  
  
  /*************************************
   * Add a new func called commentList
   ************************************/
  function newCommentList() {
    const commentList = createCommentList();
    const commentListDiv = createCommentListElement(commentList);
    addToList(commentListDiv);
    ls.saveTodo(commentList);
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
  
  /************************************
   * Add a getAllComments Method
   ***********************************/
  function getAllComments() {
    const getAllComments = creategetAllComments();
    const addCommentDiv = creategetAllCommentsElement(comment);
    addComment(getAllCommentsDiv);
    ls.saveComment(getAllComments);
  }
  
  
  /************************************
   * Add a renderCommentList Method
   ***********************************/
  function renderCommentList() {
    const renderCommentList = renderCommentList();
    const renderCommentListDiv = createrenderCommentListElement(comment);
    addComment(renderCommentListDiv);
    ls.saveComment(renderCommentList);
  }
  
  /************************************
   * Add a filterCommentsByName Method
   ***********************************/
  // function filterCommentsByName() {
  //     const filterCommentsByName = filterCommentsByName();
  //     const filterCommentsByName = createfilterCommentsByNameElement(comment);
  //     addfilterCommentsByName(filterCommentsByNameDiv);
  //     ls.saveComment(filterCommentsByName);
  // }
  
  function filterCommentsByName(id) {
    const filterCommentsByName = getfilterCommentsByName();
  
    const updatedfilterCommentsByName = commentList.filter(todo => comment.id != id)
    localStorage.setItem('commentList', JSON.stringify(updatedComments));
  }
  
  
  
  /************************************
   * Add an addComment Method
   ***********************************/
  function addNewComment() {
    const addNewComment = createAddNewComment();
    const addNewCommentDiv = createAddNewCommentElement(addNewComment);
    addNewComment(addNewCommentDiv);
    ls.saveNewComment(addNewComment);
  }
  
  
  /*************************************
   * Add a filterCommentsByName  method
   ************************************/
  function filterCommentsByName() {
    const addFilterCommentsByName = createFilterCommentsByName();
    const addCommentDiv = createfilterCommentsByNameElement(filterCommentsByName);
    addComment(addFilterCommentsByNameDiv);
    ls.saveTodo(addFilterCommentsByName);
  }
  
  /**********************************
   *A method to add an event listener 
   to the submit button.
   *********************************/
  function addEventListener() {
    const addEventListener = addEventListener();
    const addEventListenerDiv = createaddEventListener(comment);
    addComment(renderaddEventListenerDiv);
    ls.saveComment(addEventListener);
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
   *  Add the commentList tthat
   *  loads a list of all hikes
   *
   ****************************/
  function addHikeList(hikeListDiv) {
  
    document.querySelector('#hikeList').appendChild(hikeListDiv);
  }
  
  function addCommentList(commentListDiv) {
  
    document.querySelector('#commentList').appendChild(commentListDiv);
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
  
  /**********************************
   *A method to add an event listener 
   to the submit button.
   *********************************/
  document.getElementById("myBtn").addEventListener("click", function () {
    document.getElementById("comment").innerHTML = " ";
  });
  //OR
  
  
  var button = document.getElementById("displayButton");
  //var form = document.getElementById("formId");
  //form.addEventListener("submit",function(){console.log("something1"); return false;},false);
  button.addEventListener("submit", function () {
    console.log(" ");
    return false;
  }, false);
  
  function formDisplay() {
    console.log("check");
  }
  /***********************************
   * Add a comment type to use as a key
   **********************************/
  function getComment(comment) {
    const comment = localStorage.getItem('comment'); //key:'todoList'
  
    let comment = [];
  
    if (commentString) {
      comment = JSON.parse(commentString);
    }
    return comment;
  }
  
  export default {
    loadComments,
    newHikeName,
    newDate,
    newComment,
    newCommentList,
    createComment,
    getAllComments,
    renderCommentList,
    filterCommentsByName
  }