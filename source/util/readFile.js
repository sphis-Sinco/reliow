export function getJSON(name) {
    // Fetch the JSON file
    json = fetch('assets/jsons/'+name + '.json')
        .then(response => {
            // Check if the response is ok (status code 200-299)
            if (!response.ok) {
                return 'Network response was not ok ' + response.statusText;
            }
            // Parse the JSON data
            return response.json();
        })
        .then(data => {
            // Log the JSON data to the console
            console.log('JSON data:', data);
            // Display the JSON data in the HTML
            return JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Handle any errors
            return 'There was a problem with the fetch operation:'+error;
        });

    return json;
}