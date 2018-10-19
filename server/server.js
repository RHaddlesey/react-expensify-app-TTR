const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
	console.log('Server is UP!');
});

// notes
// 1st we create an express app = const app = express();
// 2nd we set up to serve the public folder = app.use(express.static(publicPath));
// next if it is not in the public folder then just return index.html
// then we tell it to set up on port 3000 as our production sever
