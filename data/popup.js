fetch("https://touchcreator.github.io/mango-block-files/policy", {cache: "no-store"})
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // or response.text(), response.blob(), etc.
    })
    .then(data => {
        if (!data.includes("allow")) {
            document.body.style.backgroundColor = "salmon";
        } else {
            document.body.style.backgroundColor = "greenyellow";
        }
    })
    .catch(error => console.error('Error:', error));


setInterval(() => {
    fetch("https://touchcreator.github.io/mango-block-files/policy", {cache: "no-store"})
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // or response.text(), response.blob(), etc.
    })
    .then(data => {
        if (!data.includes("allow")) {
            document.body.style.backgroundColor = "salmon";
        } else {
            document.body.style.backgroundColor = "greenyellow";
        }
    })
    .catch(error => console.error('Error:', error));
}, 1000)