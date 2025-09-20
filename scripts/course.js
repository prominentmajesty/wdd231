/* Courses data is kept here so rendering is data-driven.
   The script renders course cards, supports filtering, and computes total credits with reduce.
*/
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: 'Intro to programming building blocks: variables, decisions, loops, arrays, I/O.', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Basics of the web and simple site design and development.', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: 'Organized programming with functions, testing, and error handling.', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: 'Concepts of classes, objects, encapsulation, inheritance.', technology: ['C#'], completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: 'Create dynamic websites using JavaScript to respond to events and update content.', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: 'Focus on accessibility, performance, and basic API usage.', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

const coursesContainer = document.getElementById('courses');
const totalCreditsEl = document.getElementById('totalCredits');
const filterButtons = document.querySelectorAll('.filter');

function renderCourses(list) {
    coursesContainer.innerHTML = '';
    list.forEach(course => {
        const card = document.createElement('article');
        card.className = 'course' + (course.completed ? ' completed' : '');

        // choose an image based on subject to avoid oversized images
        const img = document.createElement('img');
        img.alt = `${course.subject} ${course.number}`;
        img.loading = 'lazy';
        img.src = course.subject === 'WDD' ? 'images/final_img1.webp' : 'images/money.jpeg';

        const content = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.textContent = `${course.subject} ${course.number} — ${course.title}`;
        const meta = document.createElement('div');
        meta.className = 'meta';
        meta.textContent = `${course.credits} credits • ${course.certificate}`;
        const p = document.createElement('p');
        p.textContent = course.description;

        content.appendChild(h4);
        content.appendChild(meta);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(content);
        coursesContainer.appendChild(card);
    });

    // compute total credits via reduce
    const total = list.reduce((sum, c) => sum + (c.credits || 0), 0);
    totalCreditsEl.textContent = total;
}

// initialize with all courses
renderCourses(courses);

// add filter button handlers
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        let filtered = courses;
        if (filter === 'WDD') filtered = courses.filter(c => c.subject === 'WDD');
        if (filter === 'CSE') filtered = courses.filter(c => c.subject === 'CSE');
        renderCourses(filtered);
    })
});
