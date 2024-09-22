// npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

var http = require("http");
//TODO - Use Employee Module here
var employees=require("./Employee.js");
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            ////The JSON. stringify() method converts JavaScript objects into strings.
            return res.end(JSON.stringify(employees))
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            
            let employeeNames = [];


            // // Loop through the employees array and build full names
            // for (let i = 0; i < employees.length; i++) {
            //     let fullName = employees[i].firstName + " " + employees[i].lastName;
            //     employeeNames.push(fullName);
            // }
            
            Object.values(employees).forEach(element => {
                element.forEach(el => {
                    employeeNames.push(el.firstName + " " + el.lastName)
                })     
            })


            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            employeeNames.sort();
            return res.end(JSON.stringify(employeeNames));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }

            // let totalSalary = 0;

            // for (let i = 0; i < employees.length; i++) {
            //     totalSalary += employees[i].Salary;
            // }
            
            // const totalSalary = employees.reduce((sum, emp) => sum + emp.Salary, 0);

            let totalSalary = 0;

            Object.values(employees).forEach(element => {
                element.forEach(el => {
                    totalSalary += el.Salary
                })     
            })

            const response = { "total_salary": totalSalary };

            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            return res.end(JSON.stringify(response));  
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})