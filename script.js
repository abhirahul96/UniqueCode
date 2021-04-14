// $('.form_control').submit(function (e) {

//     e.preventDefault();

//     console.log($(this).serialize()); //will be the serialized form
//     // $(this).append($(this).serialize() + '<br />');
// });
// $(document).ready(function () {
//     $('.form_control').submit(function (event) {
//         event.preventDefault();
//         // console.log($('#avatar')[0].files[0])
//         var data = new FormData()
//         //     {
//         //     "Name": $("#name").val(),
//         //     "email": $("#email").val(),
//         //     "phone": $("#phone").val(),
//         //     "address": $("#address").val(),
//         //     "unique_code": $("#unique_code").val(),
//         //     "avatar": $('#avatar')[0].files[0]
//         // }
//         data.set("Name", $("#name").val())
//         data.set("email", $("#email").val())
//         data.set("phone", $("#phone").val())
//         data.set("address", $("#address").val())
//         data.set("unique_code", $("#unique_code").val())
//         data.set("avatar", $('#avatar')[0].files[0])
//         var requestOptions = {
//             method: 'POST',
//             body: data,
//             redirect: 'follow',
//             Headers: {
//                 "Access-Control-Allow-Origin": "http://localhost:3000",
//                 "Access-Control-Allow-Headers": "X-Requested-With",
//             }
//         };
//         try {
//             fetch("http://localhost:3000/user/add-user", requestOptions)
//                 .then(response => response.text())
//                 .then(result => $('#error').val(result))
//                 .catch(error => $('#error').val(error));
//         } catch (err) {
//             console.log(err)
//         }
//         // var settings = {
//         //     "url": "http://localhost:3000/user/add-user",
//         //     "method": "POST",
//         //     "timeout": 0,
//         //     "processData": false,
//         //     "mimeType": "multipart/form-data",
//         //     "contentType": false,
//         //     "data": data,
//         //     "Headers": {
//         //         "Access-Control-Allow-Origin": "*",
//         //         "Access- Control - Allow - Headers": "X - Requested - With"
//         //     }
//         // };

//         // $.ajax(settings).done(function (response) {
//         //     console.log(response);
//         // });
//         event.preventDefault();
//     });
// });

function send(event) {
    event.preventDefault();
    var error = document.getElementById('error')
    // console.log($('#avatar')[0].files[0])
    var data = new FormData()
    //     {
    //     "Name": $("#name").val(),
    //     "email": $("#email").val(),
    //     "phone": $("#phone").val(),
    //     "address": $("#address").val(),
    //     "unique_code": $("#unique_code").val(),
    //     "avatar": $('#avatar')[0].files[0]
    // }
    data.set("Name", $("#name").val())
    data.set("email", $("#email").val())
    data.set("phone", $("#phone").val())
    data.set("address", $("#address").val())
    data.set("unique_code", $("#unique_code").val())
    data.set("avatar", $('#avatar')[0].files[0])
    var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow',
        Headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "X-Requested-With",
        }
    };
    try {
        fetch("http://localhost:3000/user/add-user", requestOptions)
            .then(response => response.text())
            .then(res => {
                document.getElementById('form_control').reset();
                error.textContent = res
            })
            .catch(err => {
                error.textContent = err
            });
    } catch (err) {
        error.textContent = err
    }

}