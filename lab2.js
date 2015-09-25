// JavaScript source code


var http = require('http');
//require node's url module to parse the url's queryString
var url = require('url');
//create the server to run the page
http.createServer(function (req, res) {
    // get the queryString and parse the subtotal as a float value

    var qs = url.parse(req.url, true).query;
    
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);

    //calculate tax and total
   
        if (method === 'add') {

            var result = x + y;
            var sign = '+';
            
            res.write(x + sign + y + '=' + result);
            res.end();
        }
      else  if (method === 'subtract') {
            var result = x - y;
            var sign = '-';
            
            res.write(x + sign + y + '=' + result);
            res.end();
        }
    else if (method === 'multiply') {
            var result = x * y;
            var sign = '*';
         
            res.write(x + sign + y + '=' + result);
            res.end();
        }
      else  if (method === 'divide') {
            var result = x / y;
            var sign = '/';
           
            res.write(x + sign + y + '=' + result);
            res.end();
        }
   else  {

     res.write('Sorry method must one of add,subtract,multiply and divide');
     res.end();
        }

    


  
   
    
}).listen(3000);
// page runs at http://localhost:3000/tax-cal.js?subtotal=x






