// Target date: February 24, 2022, 00:00:00 PST
const targetDate = new Date('2022-02-24T00:00:00-08:00');

function updateStopwatch() {
    // Get the current date and time in PST
    const currentDate = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });

    // Calculate the difference in milliseconds
    const difference = new Date(currentDate) - targetDate;

    // Calculate the number of days and hours
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;

    // Display the number of days and hours
    const stopwatch = document.getElementById('stopwatch');
    stopwatch.textContent = `Time Together: ${days} days and ${hours} hours`;
}

// Update the stopwatch every second
setInterval(updateStopwatch, 1000);

// Initial call to display the stopwatch immediately
updateStopwatch();
