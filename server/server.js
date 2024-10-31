const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Antiestres Gran Tecla Enter', 
      oldPrice: 25000, 
      price: 15000, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_800828-MLA72266020440_102023-O.webp'
    },
    {
      id: 2, 
      name: 'Campera Keyboard programador',  
      oldPrice: 11500, 
      price: 11200, 
      urlImg: 'https://purodiseno.lat/wp-content/uploads/2023/04/CAMPERA-TECLADO-2-821x1024.jpg' 
    },
    { 
      id: 3, 
      name: 'Remera Desarrollador',  
      oldPrice: 1500, 
      price: 1000, 
      urlImg: 'https://images-cdn.ubuy.ae/658c61e72a899c417078c99b-basic-baby-logic-code-programming-funny.jpg' 
    },
    { 
      id: 3, 
      name: 'Taza Código De Programacion',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_786656-MLA46832914211_072021-O.webp' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});