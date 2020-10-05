var postList = [
    {
        "id": "card_1",
        "author": "Colby Fayock",
        "subject":"What is linting and how can it save your time"
    }
];

function initUI(){
    var postId = window.sessionStorage.getItem('postId');
    console.log(postId);
}



function addComments(e){
    var comment = document.getElementById('InputComment').value;
    var comments = document.getElementById('comments');
    comments.innerHTML += '<p>' + comment + '</p>';
}

let likes = 0 ;
function incLikes()
{   likes = likes + 1 ;
    console.log(likes) ;
    let ContentChange = document.getElementById('like-number-update') ;
   if(likes === 1)
   {
       ContentChange.innerHTML = `${likes} person likes this` ;
   }
   else
   {
    ContentChange.innerHTML =`${likes} people have like this !` ;
   }
}

function EditSaveClicked()
{
    let variable1 = document.getElementById("edit-btn");
    let UpdateHeading = document.getElementById("author") ;
    let UpdatePara = document.getElementById("content") ;
    if(variable1.textContent.includes('Edit'))
    {
        variable1.innerHTML = 'Save &#x1f4be;' ;
        UpdateHeading.setAttribute('contenteditable' , "true") ;
        UpdatePara.setAttribute('contenteditable' , 'true') ;
        UpdateHeading.style.border = '1px black solid' ;
        UpdatePara.style.border = '1px black solid' ;
    }
    else if(variable1.textContent.includes('Save'))
    {
        variable1.innerHTML = 'Edit &#x270D;'
        UpdateHeading.setAttribute('contenteditable' , "false") ;
        UpdatePara.setAttribute('contenteditable' , 'false') ;
        UpdateHeading.style.border = '';
        UpdatePara.style.border = '' ;
    }
    
}