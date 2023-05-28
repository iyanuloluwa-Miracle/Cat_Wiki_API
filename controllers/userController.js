const axios = require('axios');

// Endpoint to browse cat breeds from 'The Cat API'
exports.getBreeds = async(req, res) =>{
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds');
        const catBreeds = response.data;
        res.json(catBreeds);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cat breeds' });
    }
}

// Endpoint to search for a cat breed by name from 'The Cat API'
exports.searchBreeds = async(req,res) =>{
  const { name } = req.query;
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${name}`);
    const breed = response.data[0];
    if (breed) {
      res.json(breed);
    } else {
      res.status(404).json({ error: 'Breed not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cat breed' });
  }
}
// Endpoint to view photos of a cat breed by ID from 'The Cat API'
exports.viewBreeds = async(req,res) =>{
  const { id } = req.params;
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`);
    const photos = response.data.map(photo => photo.url);
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cat breed photos' });
  }

}

// Endpoint to retrieve top friendly cat breeds from 'The Cat API'
exports.topFriendlyBreeds = async(req,res) =>{
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds');
        const catBreeds = response.data;
        const friendlyBreeds = catBreeds.filter(breed => breed.temperament && breed.temperament.includes('friendly'));
        res.json(friendlyBreeds);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch top friendly cat breeds' });
    }
}

// Endpoint to retrieve intelligent cat breeds from 'The Cat API'
exports.intelligentBreeds = async(req,res)=>{
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds');
        const catBreeds = response.data;
        const intelligentBreeds = catBreeds.filter(breed => breed.intelligence !== undefined && breed.intelligence >= 7);
        res.json(intelligentBreeds);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch intelligent cat breeds' });
    }

}