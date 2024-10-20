// Vacation start and end dates
const startDate = new Date('2024-10-15T16:00:00');
const endDate = new Date('2024-10-25T08:00:00');

// Function to calculate the time difference and update the timer
function updateTimer() {
    const now = new Date();
    const totalTime = endDate - startDate;
    const timeElapsed = now - startDate;
    
    if (now >= endDate) {
        document.getElementById('vacation-status').textContent = "Vacation has ended!";
        document.getElementById('progress').style.width = '100%';
        clearInterval(interval);
        return;
    } else if (now < startDate) {
        document.getElementById('vacation-status').textContent = "Vacation hasn't started yet!";
        document.getElementById('progress').style.width = '0%';
        return;
    }
    
    const timeRemaining = endDate - now;
    
    // Calculate remaining days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Update HTML
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update progress bar
    const progress = (timeElapsed / totalTime) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

// Update the timer every second
const interval = setInterval(updateTimer, 1000);

// Initial call
updateTimer();
