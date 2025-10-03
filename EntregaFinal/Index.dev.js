"use strict";

var argumentos = process.argv.slice(2);

if (argumentos[0] === 'GET' && argumentos.length === 1) {
  var fetchdata = function fetchdata() {
    var response, data;
    return regeneratorRuntime.async(function fetchdata$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch('https://fakestoreapi.com/products'));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context.sent;
            console.log(data);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching data:", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };

  fetchdata();
} else if (argumentos[0] === 'POST') {
  var postdata = function postdata(title, price, category) {
    var response, data;
    return regeneratorRuntime.async(function postdata$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch('https://fakestoreapi.com/products', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                title: title,
                price: price,
                description: "This is a new product",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                category: category
              })
            }));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context2.sent;
            console.log(data);
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.error("Error posting data:", _context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
} else if (argumentos[0] === 'GET' && argumentos.length > 1) {
  var getByID = function getByID() {
    var idProducto, response, data;
    return regeneratorRuntime.async(function getByID$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idProducto = argumentos[1].slice(10);
            console.log("Buscamos el item con id: ".concat(idProducto));
            _context3.prev = 2;
            _context3.next = 5;
            return regeneratorRuntime.awrap(fetch("https://fakestoreapi.com/products/".concat(idProducto)));

          case 5:
            response = _context3.sent;
            _context3.next = 8;
            return regeneratorRuntime.awrap(response.json());

          case 8:
            data = _context3.sent;
            console.log(data);
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            console.error("Error fetching data:", _context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[2, 12]]);
  };

  getByID();
} else if (argumentos[0] === 'DELETE') {}

;