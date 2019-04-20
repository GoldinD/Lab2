let path = require('path'); 
let express = require('express'); 
let app = express();
let mainRouter = require('C:/Users/Dean/Desktop/Lab2/node_modules/express/lib/router/mainRoutes.js')

// mainRouter.get('/', function (req, res) {
//     res.send('Hello World'); 
// });
// mainRouter.get('/about', function(req, res){
//     res.sendFile(path.join(__dirname, 'views', 'about.html'));
// });

let port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server running on port", port);