const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: `from docker with pm2 ${process.pid}` });
});

app.listen(8000, () => console.log('listener on 8000 port'));

process.on('SIGINT', () => process.exit(err ? 1 : 0));