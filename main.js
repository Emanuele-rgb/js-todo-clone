
$(document).ready(function() {

var todoItems = [
  'prendere il latte',
  'scrivere email al collega',
  'pagare le bollette'
];

var list = $('.todo');
var newInput = $('.add-element')

for (var i = 0; i < todoItems.length; i++) {

  var elementList = $('.template li').clone();

  elementList.prepend(todoItems[i]);

  list.append(elementList);
}

//$('.todo li i').click(function(){
//  $(this).parent().remove();
// });

$('body').on('click','.todo li i', function(){
  $(this).parent().remove();
});


newInput.keyup(function(e){

  if(e.which == 13 || e.keyCode == 13) {
    var text = newInput.val().trim();
    console.log(text);


  if(text !== ''){
    var elementNew = $('.template li').clone();
    elementNew.prepend(text);
    list.append(elementNew);

    newInput.val('');
  }
}
});

$('body').on('click', '.todo li', function(){
  $(this).toggleClass('completed');
})


});
