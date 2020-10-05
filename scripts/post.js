function enableEditMode(e, editBtn) {
    console.log(editBtn);

    var subject = document.getElementById("subject");
    var desciption = document.getElementById("description");
    console.log(subject.contentEditable);
    console.log(desciption.contentEditable);

    var subject = document.getElementById("subject");
    var desciption = document.getElementById("description");
    subject.style.border = '2px solid pink';
    subject.contentEditable = "true";
    desciption.style.border = '2px solid pink';
    desciption.contentEditable = "true";
    editBtn.style.display = 'none';

    //remove .btn class
    //needed for hiding editBtn
   
    if (editBtn.classList) {
        editBtn.classList.remove("btn");
    } else {
        var classes = editBtn.className.split(" ");
        var i = classes.indexOf("btn");

        if (i >= 0)
            classes.splice(i, 1);

        editBtn.className = classes.join(" ");
    }

    var saveBtn = document.getElementById("save-btn");
    saveBtn.style.display = 'inline-block';
    
}
//fucntion to save the content that are edited
function updateContent(e, saveBtn) {
    var subject = document.getElementById("subject");
    var desciption = document.getElementById("description");
    subject.style.border = "";
    desciption.style.border = "";
    subject.contentEditable = "false";
    desciption.contentEditable = "false";
    var editBtn = document.getElementById("edit-btn");
    editBtn.style.display = "inline-block";

    //toggle 'btn' class
    
    if (editBtn.classList) {
        editBtn.classList.toggle("btn");
    } else {
        var classes = editBtn.className.split(" ");
        classes.push("btn");
        editBtn.className = classes.join(" ");
    }
    saveBtn.style.display = "none";
    saveBtn.classList.toggle("btn");
}
// fucntion to add comment in stack fashion like the latest comment on the top
function addComments(e) {
    var inputComment = document.getElementById("InputComment");
    var comment = inputComment.value;
    var comments = document.getElementById("comments");
    if (comments.style.display == '') {
        comments.style.display = 'block';
    }
    oldcomments=comments.innerHTML;
    comments.innerHTML = '<p>' + comment + '</p>'+oldcomments;
    inputComment.value = inputComment.defaultValue;
}
//fucntion to update the number of likes for the comment 
function updateLikes(event, likeBtn) {
    var likeCounter = Number(likeBtn.getAttribute('data-likes'));
    if (likeCounter == 0) {
        likeBtn.innerHTML = 'Liked ' + '<i class="fas fa-thumbs-up"></i>';
    }
    likeCounter = likeCounter + 1;
    var likeInfo = document.getElementById('like-info');
    likeBtn.setAttribute("data-likes",String(likeCounter));
    var likeMsg = likeCounter == 1 ?' person likes this!':' people like this!';
    likeInfo.innerText = likeCounter + likeMsg;
}
