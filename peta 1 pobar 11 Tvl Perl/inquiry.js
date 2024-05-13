document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

     // Here you can add code to handle form submission, like sending the data to a server or displaying a confirmation message

     console.log('Name:', name);
     console.log('Email:', email);
     console.log('Message:', message);

     // For now, let's just log the form data to the console

     alert('Form submitted successfully!');
     
    // You can replace the alert with your desired action
});