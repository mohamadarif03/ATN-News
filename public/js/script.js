
//action update post
$('.editBtn').click(function(e) {
    e.preventDefault();
    var user = $(this).data('data')
    var role = $(this).data('role')
    console.log($(this).data('data'))
    //define variable
    // let post_id = $('#post_id').val();
    let nama   = $('#nama').val(user.username);
    let email = $('#email').val(user.email);
    let peran = $('#peran').val(role);
    let status = $('#status').val(user.status);
    // let token   = $("meta[name='csrf-token']").attr("content");
    
    //ajax
    // $.ajax({

    //     url: `/posts/${post_id}`,
    //     type: "PUT",
    //     cache: false,
    //     data: {
    //         "nama": nama,
    //         "email": email,
    //         "peran": peran,
    //         "status": status,
    //         // "_token": token
    //     },
    //     success:function(response){

    //         //show success message
    //         Swal.fire({
    //             type: 'success',
    //             icon: 'success',
    //             title: `${response.message}`,
    //             showConfirmButton: false,
    //             timer: 3000
    //         });

    //         //data post
    //         let post = `
    //             <tr id="index_${response.data.id}">
    //                 <td>${response.data.title}</td>
    //                 <td>${response.data.content}</td>
    //                 <td class="text-center">
    //                     <a href="javascript:void(0)" id="btn-edit-post" data-id="${response.data.id}" class="btn btn-primary btn-sm">EDIT</a>
    //                     <a href="javascript:void(0)" id="btn-delete-post" data-id="${response.data.id}" class="btn btn-danger btn-sm">DELETE</a>
    //                 </td>
    //             </tr>
    //         `;
            
    //         //append to post data
    //         $(`#index_${response.data.id}`).replaceWith(post);

    //         //close modal
    //         $('#modal-edit').modal('hide');
            

    //     },
    //     error:function(error){
            
    //         if(error.responseJSON.title[0]) {

    //             //show alert
    //             $('#alert-title-edit').removeClass('d-none');
    //             $('#alert-title-edit').addClass('d-block');

    //             //add message to alert
    //             $('#alert-title-edit').html(error.responseJSON.title[0]);
    //         } 

    //         if(error.responseJSON.content[0]) {

    //             //show alert
    //             $('#alert-content-edit').removeClass('d-none');
    //             $('#alert-content-edit').addClass('d-block');

    //             //add message to alert
    //             $('#alert-content-edit').html(error.responseJSON.content[0]);
    //         } 

    //     }

    // });

});