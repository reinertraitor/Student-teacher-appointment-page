function bookAppointment() {
    // Get the form values
    var studentName = document.getElementById('student-name').value;
    var teacherName = document.getElementById('teacher-name').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    // Do something with the form values (e.g., send them to a server, store in a database, etc.)
    
    // Display a success message
    alert('Appointment booked successfully!');
    
    // Reset the form
    document.getElementById('student-name').value = '';
    document.getElementById('teacher-name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
  }
  