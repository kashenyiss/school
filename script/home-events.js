// home-events.js
// News & Events dynamic loading for homepage
function loadHomeEvents() {
    // Example events (could be fetched from a server or static array)
    const events = [
        {
            date: 'June 20, 2025',
            title: 'Parents-Teachers Meeting',
            desc: 'All parents are invited for the termly meeting at the main hall, 10:00am.'
        },
        {
            date: 'July 2, 2025',
            title: 'Inter-House Sports Day',
            desc: 'A day of fun and competition among the school houses. All students to participate.'
        },
        {
            date: 'June 12, 2025',
            title: 'Science Fair',
            desc: 'Showcasing student projects and innovations in science and technology.'
        }
    ];
    const eventsDiv = document.getElementById('home-events');
    if (eventsDiv) {
        eventsDiv.innerHTML = `<ul class="event-list">` +
            events.map(event => `
                <li class="event-item">
                    <span class="event-date">${event.date}</span> <span class="event-title">${event.title}</span>
                    <div class="event-desc">${event.desc}</div>
                </li>
            `).join('') + `</ul>`;
    }
}
// Run on homepage load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('home-events')) {
        loadHomeEvents();
    }
});
