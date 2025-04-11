$(document).ready(function() {
    $.getJSON('data.json', function (topSpots) {
        topSpots.forEach(function (spot) { 
            const { name, description, location } = spot;
            const [latitude, longitude] = location;

            const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

            // Create the table row
            const row = `
                <tr>
                    <td>${name}</td> <!-- Corrected: <td> properly closed -->
                    <td>${description}</td>
                    <td><a href="${mapLink}" target="_blank">View on Map</a></td>
                </tr>
            `;

            // Append the row to the table body
            $('#top-spots-table tbody').append(row);
        });
    });
});
