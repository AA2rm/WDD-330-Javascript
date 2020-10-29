/*Create an export for the file*/

/****************************
 * Add a saveComment func that
 * calls getCommentist
 ***************************/
function saveComments(comment){
    const commentList = getCommentList();

    commentList.push(comment);
    localStorage.setItem('commentList', JSON.stringify(commentList));//gets from the commentList array
}


/****************************
 * Add a deleteComment func that
 * will getCommentList, locate the
 * id that's deleted from the
 * commentList
 ***************************/
function deleteComments(id) {
    const commentList = getCommentList();

    const updatedcomments = commentList.filter(comment => comment.id != id)
    localStorage.setItem('commentList', JSON.stringify(updatedComments));
}

/****************************
 * Add a getCommentList func that
 * gets the CommentList from the
 * localStorage
 ***************************/
function getCommentList(comment) {
    const commentListString = localStorage.getItem('commentList');//key:'commentList'
   
    let commentList = [];

    if (commentListString) {
        todoList =JSON.parse(commentListString);
    }
    return commentList;
}

/****************************************
 * Return an obj w/ the Comment property
 ***************************************/
export default {
    saveComments,
    getCommentList,
    deleteComments
}