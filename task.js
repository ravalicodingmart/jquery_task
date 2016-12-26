$(document).ready(function(){
  $('#btn-create').click(function (e) {
  e.preventDefault();
      var new_name = $('#myForm').find('#new_name').val();
      var new_email = $('#myForm').find('#new_email').val();
      var new_phoneno = $('#myForm').find('#new_phoneno').val();

       $('table').append('<tr class="row-input"><td id="name">'+ new_name +'</td><td id="email">'+ new_email +'</td><td id="phoneno">'+ new_phoneno +'</td> <td><button id="btn-edit">edit</button></td><td><button id="btn-delete">delete</button></td></tr>');

    });
    $('#btn-reset').click(function(){
      document.getElementById("myForm").reset();
    });

    $(document).on("click", "#btn-delete" , function() {
      $('.row-input').remove();
    });

    var lastEditTr;

  $(document).on("click", "#btn-edit" , function() {


        lastEditTr = $(this).parent().parent();
         var td = $(lastEditTr).find('td');
            new_name = $(td["0"]).text();
            new_email = $(td["1"]).text();
            new_phoneno = $(td["2"]).text();
            $('#myForm').find('#new_name').val(new_name);
          $('#myForm').find('#new_email').val(new_email);
            $('#myForm').find('#new_phoneno').val(new_phoneno);

  });
            //document.getElementById("btn-create").style.visibility = 'hidden';
          //  document.getElementById("btn-update").style.visibility = 'visible';




              $('#btn-update').click(function (e) {
                       e.preventDefault();
                        var new_name1=$('#new_name').val();
                        var new_email1 =$('#new_email').val();
                        var new_phoneno1=$('#new_phoneno').val();

                        lastEditTr.find('#name').html(new_name1);
                        lastEditTr.find('#email').html(new_email1);
                        lastEditTr.find('#phoneno').html(new_phoneno1);



              });



    });
