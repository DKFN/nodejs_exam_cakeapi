const express = require('express')

const port = process.env.PORT || 3000;

const app = express();
const cakeRoutes = require('./routes/cake');

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({
    message: "Welcome to the cake API !"
}));

app.use('/api/cakes', cakeRoutes);

app.listen(port, () => console.log(`Cake API stated on port : ${port}`))
