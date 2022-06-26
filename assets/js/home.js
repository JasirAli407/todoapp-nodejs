let todoList = document.querySelectorAll('.to-do-item');



// to strike a line on checked checkbox
for(let i of todoList){

    i.getElementsByTagName('input')[0].addEventListener('change', function(){
    
     if(this.checked){
        i.getElementsByTagName('span')[0].style.textDecoration = 'line-through';

        i.querySelector('.list-date').style.textDecoration = "line-through"

     }

     else{
        i.getElementsByTagName('span')[0].style.textDecoration = 'none';
        i.querySelector('.list-date').style.textDecoration = 'none';
     }
    })
}