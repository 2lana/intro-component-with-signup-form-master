$(document).ready(function()  {  
$("#form-submit").validate({
        rules: {
          fname: 'required',
                   
          lname: 'required',
          email: {
            required: true,
            email: true,
          },
          password: {
            required: true,
            minlength: 8,
          }
        },
        messages: {
          fname: 'First Name cannot be empty',
          lname: 'Last Name cannot be empty',
          email: 'Looks like this is not an email',
          password: 'Password cannot be empty'
        },
        
      });

      submitHandler: (function() {
        form.submit();
      })
});