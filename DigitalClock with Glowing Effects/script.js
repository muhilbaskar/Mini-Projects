document.addEventListener("DOMContentLoaded", () => {
    const time = document.querySelector("#time");

    function updateTime() {
        // Get the current UTC time
        let date = new Date();

        // Convert to IST (UTC+5:30)
        let utcHours = date.getUTCHours();
        let utcMinutes = date.getUTCMinutes();
        let utcSeconds = date.getUTCSeconds();

        let istHours = utcHours + 5;
        let istMinutes = utcMinutes + 30;
        let istSeconds = utcSeconds;

        // Adjust minutes and hours if necessary
        if (istMinutes >= 60) {
            istMinutes -= 60;
            istHours += 1;
        }

        if (istHours >= 24) {
            istHours -= 24;
        }

        // Determine AM/PM
        let period = istHours >= 12 ? 'PM' : 'AM';
        istHours = istHours % 12;
        istHours = istHours ? istHours : 12; // Convert hour '0' to '12'

        // Add leading zeros to hours, minutes, and seconds if needed
        istHours = istHours < 10 ? '0' + istHours : istHours;
        istMinutes = istMinutes < 10 ? '0' + istMinutes : istMinutes;
        istSeconds = istSeconds < 10 ? '0' + istSeconds : istSeconds;

        time.textContent = istHours + ":" + istMinutes + ":" + istSeconds + " " + period;
    }

    // Update the time every second
    setInterval(updateTime, 1000);

    // Initial call to display the time immediately when the page loads
    updateTime();
});
