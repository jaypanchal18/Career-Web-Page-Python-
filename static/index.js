 function filterList() {
    
    const keyword = document.getElementById('keywordInput').value.toLowerCase();
    const location = document.getElementById('locationInput').value.toLowerCase();
    const company = document.getElementById('companyInput').value.toLowerCase();
  
    // Get all job listings
    const jobListings = document.querySelectorAll('.job-listings .list');
  
   
    jobListings.forEach(listing => {
      const title = listing.querySelector('.word2').textContent.toLowerCase();
      const locationText = listing.querySelector('.word3 .place').textContent.toLowerCase();
      const companyText = listing.querySelector('.word1').textContent.toLowerCase();
  
      // if  listing matches the filter criteria
      const matchesKeyword = title.includes(keyword) || locationText.includes(keyword) || companyText.includes(keyword);
      const matchesLocation = locationText.includes(location);
      const matchesCompany = companyText.includes(company);
  
      // Show/hide 
      if (matchesKeyword && matchesLocation && matchesCompany) {
        listing.style.display = 'block'; // Show the listing
      } else {
        listing.style.display = 'none'; // Hide the listing
      }
    });
  }





