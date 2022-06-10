var URL = 'http://localhost:5000/amigos';

let showFriends = function(){
    $('#lista').empty();
    $.get(`${URL}`, function(friends){
        friends.forEach(e => {
            let li = document.createElement('li');
            li.id = e.id;
            li.innerText = e.name;
            let list = document.getElementById('lista');
            list.appendChild(li);
          //$('#lista').append(`<li id= "{$e.id}"> ${e.name} X </li>`) //jquery. cualquiera de las dos opciones esta bien 
        })
    })
}
$("#boton").click(showFriends);

$('#search').click(function(){
    let id = $('#input').val();
    if(id){
        $.get(`${URL}/${id}`,function(friend){

            $('#amigo').text(`${friend.name} ${friend.age} ${friend.email}`);
            $('#input').val("");
        })
    } else{ 
        $('#amigo').text('Tenes que ingresar un ID');
    }
});

let deleteFriend= function(){
    let id= $('#inputDelete').val();
    if(id){
        $.get(`${URL}/${id}`, function(f){
            friend=f;
        });
        // url, type, success
        $.ajax({
            url: `${URL}/${id}`,
            type: "DELETE",
            success: function(){
                $('#success').text('Tu amigo fue eliminado correctaente');
                $('#inputDelete').val("");
                showFriends();
            }
        })
    } else{
        $('#success').text('Tenes que ingresar un ID');
    }
};
$('#delete').click(deleteFriend);