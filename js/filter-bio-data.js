function filterBios() {
    const input  = document.getElementById('search').value.toLowerCase();
    const topics = document.querySelectorAll('.bio-group');
  
    for (const topic of topics) {
      const hotels  = topic.querySelectorAll('.bio-group-item');
      let allHidden = true;
  
      for (const hotel of hotels) {
        const term      = hotel.getAttribute('data-search-term').toLowerCase();
        const topicText = topic.querySelector('h2').textContent.toLowerCase();
  
        if (term.includes(input) || topicText.includes(input)) {
          hotel.classList.remove('hidden');
          allHidden = false;
        } else {
          hotel.classList.add('hidden');
        }
      }
  
      if (allHidden) {
        topic.classList.add('hidden');
      } else {
        topic.classList.remove('hidden');
      }
    }
  }