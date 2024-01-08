function validateForm() {
    let fileInput = document.getElementById('resume');
    let file = fileInput.files[0];
    
    if (file) {
      //file name
      let fileName = file.name;
      
      // Check if the file extension is not PDF
      if (!fileName.endsWith('.pdf')) {
        alert('Please upload a PDF file.');
        return false; 
      }
    } else {
      // If no file is selected
      alert('Please select a file.');
      return false; 
    }
    
    // If everything is valid, show success message
    document.getElementById('jobApplicationForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    return false; 
}
  
