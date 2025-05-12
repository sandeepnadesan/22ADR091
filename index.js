const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Avg_route=require('./routes/Avg_price')
const Correlation_Route=require('./routes/Correlation')
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());


app.use('/',Avg_route);
app.use('/',Correlation_Route)
app.use((err,res) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});