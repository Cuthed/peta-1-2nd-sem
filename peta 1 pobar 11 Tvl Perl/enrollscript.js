// JavaScript code
document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var studentName = document.getElementById('studentName').value;
    var parentName = document.getElementById('parentName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    
    // Here you can add code to handle form submission, like sending the data to a server or displaying a confirmation message
    console.log('Student Name:', studentName);
    console.log('Parent Name:', parentName);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
    
    // For now, let's just log the form data to the console
    alert('Enrollment form submitted successfully!');
    // You can replace the alert with your desired action
});