 $(document).ready(function() {
            // for datatable
            var table = $('#tableInfo').DataTable({
            });   
            $('#tableInfo').on("click", "button", function(){
              swal({
            title: "Are you sure ??",
            text: "Click on delete button to delete permanently",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            // Delete Row from datatable
            table.row($(this).parents('tr')).remove().draw(false);
            swal("Proof! Your imaginary data has been deleted!", {
              icon: "success",
            });
            window.location.href = href;
          } else {
            swal("Your imaginary data is safe!");
          }
        });  
      });
   
        });
        var counter = 1;
        // textbox validation
        function ValidateIPaddress(inputText)  
        {  
            var ipformat = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/; 
            ipformat = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/; 
            if(inputText.value.match(ipformat))  
                {  
                   // message notification
                    swal("Sucessfully!", "You enter the valid ip!", "success");
                    $("#ipAddress").val('');
                    $.getJSON('http://ipinfo.io/' + inputText.value, function(data){
                        // add data in datatable
                        $('#tableInfo').DataTable().row.add([
                        counter ++,
                        data.ip,
                        data.country,
                        data.postal,
                        "<td><button><i class='far fa-trash-alt'></i></button></td>",
                        ]).draw();
                    });
                    return true;
                }  
                else  
                {  
                  swal("Wrong!", "You enter the wrong ip!", "error");
                    $("#ipAddress").val('');
                }  
        }
