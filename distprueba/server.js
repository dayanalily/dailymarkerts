let express = require('express');
let path = require('path');
let app = express();
let port = 8089;

app.use(express.static('dailymarker-app'));

app.get('*', (req, res, next) => {
    res.sendFile(path.resolve('dailymarker-app/index.html'));
});

app.listen(port, () => {
    console.log("el servidor de express se ha iniciado en el puerto " +  port);
    
})