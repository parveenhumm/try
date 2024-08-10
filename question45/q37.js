"use strict";
//parveenhumaira
//date: 10 August, 2024
Object.defineProperty(exports, "__esModule", { value: true });
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    let available_size = ["Small", "Medium", "Large", "Extra Large"];
    const sizeMessages = {
        "Small": "I love TypeScript!",
        "Medium": "Just right size!",
        "Large": "Spacious and comfy!",
        "Extra Large": "Extra roomy!"
    };
    if (available_size.includes(size)) {
        console.log(`You ordered ${size} shirt with message : ${message}`);
        if (size === "Small") {
            console.log("Special message for small size:", sizeMessages["Small"]);
        }
        else {
            console.log(sizeMessages[size]);
        }
    }
    else {
        console.log(`Invalid size. Please choose from: ${available_size.join(',')}`);
    }
}
make_shirt("Small", "Happy independence day");
