
$('#submit').on('click',function(event) {
    event.preventDefault()
let displayname = $('#name').val()
let comment = $('#message').val()
console.log(displayname)
    $('#middle').append(`
<div id="newContainer">
    <div id = 'container1'>${displayname}</div>
    <div id = 'container2'>${comment}</div>
    
    

 
    <div class="newComment newComment2">
        <input id='comm' type=text placeholder=Comment>
        <input id="submit2" type="submit" value="Submit">
    </div>




    <div id="newButtons">
        <div id="button3">
            <button class="edt" type="button">Edit</button>
        </div>
        <div id="button4">
            <button class="del" type="button">Delete</button>
        </div>
    </div>
</div>
    `
)}
)

$('#middle').on('click', '.edt', function(){

    let edit = $(this).parents()[2];
    let edit2 = $(edit).children()[2];
    let edit3 = $(edit2).toggleClass("newComment2");
    console.log(edit)
}
);

$('#middle').on('click', '.del', function(){
let deletePost = $(this).parents()[2];
let deletePost2 = deletePost.remove();
console.log(deletePost)
}
);

$('#middle').on('click', "#submit2", function(){
let editComment = $(this).prev().val();
let editSubmit = $(this).parents()[1];
let editSubmit2 = $(editSubmit).parent()[0];
let editSubmit3 = $(editSubmit2).children()[0];
let editSubmit4 = $(editSubmit3).children()[1];
let editSubmit5 = $(editSubmit4).text(editComment);

console.log(editSubmit4)

}
);
