const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const suggestions = [
  {
    imageUrl: 'https://images.dog.ceo/breeds/malinois/n02105162_5417.jpg',
    caption: 'Malinois',
  },
  {
    imageUrl: 'https://images.dog.ceo/breeds/terrier-dandie/n02096437_4276.jpg',
    caption: 'Terrier Dandie',
  },
  {
    imageUrl: 'https://images.dog.ceo/breeds/terrier-cairn/n02096177_10483.jpg',
    caption: 'Terrier Cairn',
  },
  {
    imageUrl: 'https://images.dog.ceo/breeds/puggle/IMG_075018.jpg',
    caption: 'Puggle',
  },
  {
    imageUrl: 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
    caption: 'Terrier Welsh',
  },
  {
    imageUrl: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_3630.jpg',
    caption: 'Hound Afghan',
  },
];
app.get('/api/suggestion', (req, res) => {
  res.send({
    data: suggestions[Math.floor(Math.random() * suggestions.length)],
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
