var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"root",
    database: "bamazon"
});

// giving the manager options:
function promptManagerAction() {
    
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Please select an option:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
            filter: function(val) {
                if (val === "View Products for Sale") {
                    return "sale";
                } else if (val === "View Low Inventory") {
                    return "lowInventory";
                } else if (val === "Add to Inventory") {
                    return "addInventory";
                } else if (val === "Add New Product") {
                    return "newProduct";
                } else {
                    console.log("Error!");
                    exit(1);

                }
            }
        }
    ]).then(function(input) {
        if (input.option === "sale") {
            displayInventory();
        } else if (input.option === "lowInventory") {
            displayInventory();
        } else if (input.option === " addInventory") {
            displayInventory();
        } else if (input.option === " newProduc") {
            displayInventory();
        } else {
            console.log("Error");
        }
    })
}

function displayInventory() {
    
    querystr = "SELECT * FROM products";

    connection.query(querystr, function(err, data) {
        if (err) throw err;

        var strOut = "";
        for (var i = 0; i < data.length; i ++) {
            strOut = "";
            strOut += "Item ID: " + data[i].item_id + "//";
            strOut += "Product Name: " + data[i].product_name + "//";
            strOut += "Department: " + data[i].price + "//";
            strOut += "Price: " + data[i].price + "//";
            strOut += "Quantity: " + data[i].stock_quantity + "/n";

            console.log(strOut);
        }

        connection.end();
    })
}

// this function shows the products that have quantity less than 100.
function displayLowInventory() {
    querystr = "SELECT * FROM products WHERE stock_quantity < 100";

    connection.query(querystr, function(err, data) {
        if (err) throw err;
        console.log("low inventory items!")

        var strOut = "";
        for (var i=0; i< data.length; i++) {
            strOut = "";
            strOut += "Item ID: " + data[i].item_id + "//";
            strOut += "Product Name: " + data[i].product_name + "//";
            strOut += "Department: " + data[i].department_name + "//";
            strOut += "Price: " + data[i].price + "//";
            strOut += "Quantity" + data[i].stock_quantity + "/n";

            console.log(strOut);
        }

        connection.end();
    })
}

// making sure that the quantity always positive!
function validateInteger(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return "Undefined!";
    }
}

// making sure user supplying positive number
function validateNumeric(value) {
    var number = (typeof parseFloat(value)) === "number";
    var positive = parseFloat(value) > 0;

    if (number && positive) {
        return true;
    } else {
        return "Please enter positive number!"
    }
}
function addInventory() {
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Please enter the Item ID for stock_count update.",
            validate: validateInteger,
            filter: Number
        },
        {
            type: "input",
            name: "quantity",
            validate: validateInteger,
            filter: Number
        }
    ]).then(function(input) {
        var item = input.item_id;
        var addQuantity = input.quantity;
        
        var querystr = "SELECT * FROM products WHERE ?";
        
        conection.query(querystr, {item_id: item}, function(err, data) {
            if (err) throw err;

            if (data.length === 0) {
                console.log("Invalid ID! Please select a valid data");
            } else {
                var productData = data[0];

                var updateQuerystr = "UPDATE products SET stock_quantity = " + (product.stock_quantity + addQuantity) + "WHERE item_id = " + item;

                connection.query(updateQuerystr, function(err, data) {
                    if (err) throw err;
                    
                    console.log("Stock count for Item ID " + item +  "has been updated to " + (productData.stock_quantity + addQuantity));

                    connection.end();

                })

            }
        })
    })
}

function createNewProduct() {
    inquirer.prompt([
        {
            type: "input",
            name: "product_name",
            message: "Please enter new product name",
        },
        {
            type: "input",
            name: "department_name",
            message: "Which department does the new product belong to?",
        },
        {
            type: "input",
            name: "price",
            message: "Waht is the price per unit?",
            validate: validateNumeric
        },
        {
            type: "input",
            name: "stock_quantity",
            message: "How many items are in the stock?",
            validate: validateInteger
        }
    ]).then(function(input) {
        console.log("Adding New Item");

        var querystr = "INSERT INTO products SET ?";

        connection.query(querystr, input, function(error, result, fields) {
            if (errro) throw error;
            console.log("New product has been added to the inventory under Item ID ' + results.insertId ");
            connection.end();
        });
    })
}

function runBamazon() {
    promptManagerAction();
}
runBamazon();