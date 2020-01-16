// // Get the modal
// var modalDel = document.getElementById("myModal");

// // Get the button that opens the modal
// var btnDel = document.getElementsByClassName('myBtn')[0];

// // Get the <span> element that closes the modal
// var spanDel = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btnDel.onclick = function () {
//     modalDel.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// spanDel.onclick = function () {
//     modalDel.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modalDel) {
//         modalDel.style.display = "none";
//         console.log('bro we here')
//     }
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// // Get the modal
// var modal = document.getElementById("myFlagModal");

// // Get the button that opens the modal
// var btn = document.getElementById('flag')

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[1];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }
// const commentBtn = document.getElementById('comment');
// commentBtn.disabled = true;
// const handleDisplayMatches = function () {

//     // get our matches
//     if (this.value.length > 0) {
//         commentBtn.disabled = false;        
//         commentBtn.style.backgroundColor = '#4F62E8';
//         commentBtn.style.cursor = 'pointer';

//     } else {
//         commentBtn.disabled = true;
//         commentBtn.style.backgroundColor =  '#7CEBBE';
//         commentBtn.style.cursor =  'context-menu';
//     }
// };


// const commentField = document.querySelector('input[name="comment"]');

// commentField.addEventListener('keyup', handleDisplayMatches);


// var link = document.getElementById("edit")
// link.onclick = function (e) {
//     e.preventDefault()
//     window.location.href = "./edit_article.html";
// };