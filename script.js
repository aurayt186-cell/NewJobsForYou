// Sample job data
const jobsData = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp Pakistan",
        location: "Karachi",
        category: "IT",
        salary: "PKR 150,000 - 250,000",
        description: "We are looking for an experienced software engineer with 5+ years of experience in full-stack development.",
        posted: "2 days ago"
    },
    {
        id: 2,
        title: "Data Analyst",
        company: "Finance Plus",
        location: "Lahore",
        category: "Finance",
        salary: "PKR 100,000 - 150,000",
        description: "Join our analytics team and help us make data-driven decisions for our growing company.",
        posted: "1 day ago"
    },
    {
        id: 3,
        title: "Healthcare Manager",
        company: "City Hospital",
        location: "Islamabad",
        category: "Healthcare",
        salary: "PKR 120,000 - 180,000",
        description: "Manage operations at our modern healthcare facility with a team of dedicated professionals.",
        posted: "3 days ago"
    },
    {
        id: 4,
        title: "English Teacher",
        company: "International School",
        location: "Lahore",
        category: "Education",
        salary: "PKR 80,000 - 120,000",
        description: "Teach English to students from grades 9-12 in our well-equipped school.",
        posted: "1 day ago"
    },
    {
        id: 5,
        title: "Marketing Executive",
        company: "Brand Solutions",
        location: "Karachi",
        category: "Marketing",
        salary: "PKR 90,000 - 140,000",
        description: "Lead marketing campaigns and strategy for our diverse client portfolio.",
        posted: "2 days ago"
    },
    {
        id: 6,
        title: "Mechanical Engineer",
        company: "Industrial Works",
        location: "Rawalpindi",
        category: "Engineering",
        salary: "PKR 130,000 - 200,000",
        description: "Design and develop mechanical systems for manufacturing plants.",
        posted: "3 days ago"
    }
];

// Sample news data
const newsData = [
    {
        id: 1,
        title: "Pakistan's Tech Industry Shows 45% Growth in 2026",
        excerpt: "The Pakistani technology sector continues to boom with record investments and job opportunities across major cities.",
        date: "June 8, 2026",
        icon: "📱"
    },
    {
        id: 2,
        title: "Top 10 Most In-Demand Skills for 2026",
        excerpt: "AI, Data Science, and Cloud Computing are leading the job market. Learn which skills will boost your career.",
        date: "June 7, 2026",
        icon: "🚀"
    },
    {
        id: 3,
        title: "How to Ace Your Job Interview: Expert Tips",
        excerpt: "Get insider advice from HR professionals on what hiring managers really look for during interviews.",
        date: "June 6, 2026",
        icon: "💼"
    }
];

// Load jobs on page load
document.addEventListener('DOMContentLoaded', function() {
    loadJobs(jobsData);
    loadNews(newsData);
    setupEventListeners();
});

// Load and display jobs
function loadJobs(jobs) {
    const jobsList = document.getElementById('jobsList');
    jobsList.innerHTML = '';
    
    if (jobs.length === 0) {
        jobsList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No jobs found. Try adjusting your filters.</p>';
        return;
    }
    
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <div class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</div>
            <div class="job-description">${job.description}</div>
            <div class="job-meta">
                <span class="job-salary">${job.salary}</span>
                <button class="apply-btn" onclick="applyJob('${job.title}')">Apply Now</button>
            </div>
            <small style="color: #999; display: block; margin-top: 10px;">Posted ${job.posted}</small>
        `;
        jobsList.appendChild(jobCard);
    });
}

// Load and display news
function loadNews(news) {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';
    
    news.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-image">${article.icon}</div>
            <div class="news-content">
                <div class="news-date">${article.date}</div>
                <div class="news-title">${article.title}</div>
                <p class="news-excerpt">${article.excerpt}</p>
                <a href="#" class="read-more">Read More →</a>
            </div>
        `;
        newsList.appendChild(newsCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    // Filter functionality
    document.getElementById('categoryFilter').addEventListener('change', filterJobs);
    document.getElementById('cityFilter').addEventListener('change', filterJobs);
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
    
    // Mobile menu
    document.querySelector('.hamburger').addEventListener('click', toggleMobileMenu);
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = jobsData.filter(job => {
        return job.title.toLowerCase().includes(searchInput) ||
               job.company.toLowerCase().includes(searchInput) ||
               job.location.toLowerCase().includes(searchInput);
    });
    
    loadJobs(filtered);
}

// Filter jobs
function filterJobs() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const cityFilter = document.getElementById('cityFilter').value;
    
    const filtered = jobsData.filter(job => {
        const categoryMatch = categoryFilter === '' || job.category === categoryFilter;
        const cityMatch = cityFilter === '' || job.location === cityFilter;
        return categoryMatch && cityMatch;
    });
    
    loadJobs(filtered);
}

// Apply for job
function applyJob(jobTitle) {
    alert(`Thank you for your interest in "${jobTitle}"!\n\nPlease sign up or log in to complete your application.`);
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}