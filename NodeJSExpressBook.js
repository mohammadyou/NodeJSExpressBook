var express = require('express');

var app = express();
app.engine('hbs',require('exphbs'));
app.set('view engine','hbs');
//app.locals.layout='default';
app.use(express.static(__dirname+'/public'));
app.set('port',process.env.PORT||3000);

app.get('/',function(req,res){
	var randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{layout:'main' , fortune:randomFortune});
});

app.use(function(req,res){
	res.status(404);
	res.send('This is 404 Page for not found');
});

app.listen(app.get('port'),function(){
	console.log('app started on the port: '+app.get('port'));
});

var fortunes = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];
