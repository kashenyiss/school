// Sample events data
const events = [
    {
        date: '2025-06-17',
        title: 'Mid-Term Exams Begin',
        category: 'academic',
        details: 'Mid-term exams for all classes start. Ensure you have your timetables.'
    },
    {
        date: '2025-06-20',
        title: 'Sports Day',
        category: 'sports',
        details: 'Annual inter-house sports competitions. All students participate.'
    },
    {
        date: '2025-07-01',
        title: 'Fundraising Gala',
        category: 'fundraiser',
        details: 'Parents and well-wishers are invited to support our new library project.'
    },
    {
        date: '2025-07-10',
        title: 'Independence Day',
        category: 'holiday',
        details: 'School closed for national holiday.'
    }
];

function renderEvents(filter = 'all') {
    const eventsList = document.getElementById('events');
    eventsList.innerHTML = '';
    const filtered = filter === 'all' ? events : events.filter(e => e.category === filter);
    if (filtered.length === 0) {
        eventsList.innerHTML = '<li>No events found for this category.</li>';
        return;
    }
    filtered.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${event.title}</strong> <br><span>${event.date}</span><br><small>${event.details}</small>`;
        eventsList.appendChild(li);
    });
}

function renderCalendar() {
    const calendar = document.getElementById('event-calendar');
    calendar.innerHTML = '';
    events.forEach(event => {
        const div = document.createElement('div');
        div.className = 'calendar-event';
        div.innerHTML = `<span class="calendar-date">${event.date}</span> <span class="calendar-title">${event.title}</span>`;
        calendar.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
    renderCalendar();
    document.getElementById('event-category').addEventListener('change', (e) => {
        renderEvents(e.target.value);
    });
});