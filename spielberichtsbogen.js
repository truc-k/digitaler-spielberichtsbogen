document.getElementById("kontrollfeld-punkte-1").addEventListener("click", testJSONfile);

function testJSONfile() {
    // importing the fs module
    const fs = require("fs");

    // initializing a JavaScript object
    const user = {
        id: 1,
        completeName: "Jennifer Jones",
        age: 20,
    };

    // converting the JSON object to a string
    const data = JSON.stringify(user);

    // writing the JSON string content to a file
    fs.writeFile("data.json", data, (error) => {
        // throwing the error
        // in case of a writing problem
        if (error) {
            // logging the error
            console.error(error);

            throw error;
        }

        console.log("data.json written correctly");
    });

}