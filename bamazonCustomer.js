// requiring the dependencies
var Inquirer = require("inquirer");
var mysql = require("mysql");

// connecting to database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: bamazon
});

// this function validates 
function validateInput(value) {
    // it make sure that the input is an integer
    var integer = Number.isInteger(parseFloat(value));
    //math.sign() it returns the sign of the number whether its negatiive or positive
    var sign = math.

    // making sure that the number is grater than 1
    if (integer && (sign === 1)) 
        return true;
    } else {
        return "Enter a number grater ot equall to one";
    }
}
// asking users which product they would like to buy by ID.
function promptUserPurchase() {
    console.log("PromptUserPurchase!");
    
    Inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            massage: "Please Enter the ID of the product you would like to purchase.",
            validate: validateInput,
            filter: Number
        },
        {
            type: "input",
            name: "quantity",
            message: "How many do you want?",
            filter: Number
        }
    ]).then(function(input) {
        var item = input.item_id;
        var quantity = input.quantity;

        // to make sure that we have enough product!
        var querrystr = "SELECT * FROM products WHERE ?";
        connection.query(querrystr, {item_id: item}, function(err, data) {
            if(err) throw err;

            // data entry validation check
            if(data.length === 0) {
                console.log("The data is not valid!");
                displayInventory();
            } else {
                var productData = data[0];
                // if we have the product in stock then
                if(quantity <= productData.stock_quantity) {
                    console.log("YAY! we have the product in stock!");

                    // query string
                    var updatequerystr = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + "WHERE itrm_id = " + item;

                    // after order went through updating the inventory
                    connection.query(updateQueryStr, function(err, data) {
                        if(err) throw err;
                        console.log("thanks for shopping!");
                        console.log("Your total is :" + productData * quantity);

                        // ending database connection
                        connection.end();
                    })
                } else {
                    console.log("Oh no! we don't have this product. Please chose something else.");
                    displayInventory();
                }
            }
        })
    })
}

// this function shows the database data in the console.
function displayInventory() {
    querrystr = "SELECT * FROM products";

    connection.query(querrystr, function(err, data) {
        if(err) throw err;

        var strOut = "";
        for (var i=0; i< data.length; i++) {
            strOut = "";
            strOut += "item ID: " + data[i].item_id + "//";
            strOut += "Product Name: " + date[i].product_name + "//";
            strOut += "Department: " + data[i].depatment_name + "//";
            strOut += "Price: " + data[i].pricee } "/n";

            console.log(strOut);
        }
    )}
}

// this function runs the displayInventory function 
function runBamazon() {
    displayInventory();
    runBamazon();
}


