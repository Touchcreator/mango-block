fetch("https://touchcreator.github.io/mango-block-files/policy", {cache: "no-store"})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text(); // or response.text(), response.blob(), etc.
  })
  .then(data => {
    if (!data.includes("allow")) {
        let url = chrome.runtime.getURL("data/block.html")
        window.location.href = url;
    }
  })
  .catch(error => console.error('Error:', error));
