// Define the API endpoint and your API key
const apiUrl = 'https://api.themoviedb.org/3/movie/popular';
const apiKey = '';

// Make the API request
fetch(`${apiUrl}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    data.results.map(el=>console.log(el.title));
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

  const fetch = async()=>{
    const response = await fetch(`${apiUrl}?api_key=${apiKey}`)
    const data = await response.json()

  }