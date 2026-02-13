// Dynamically load navbar.html into #navbar-container
document.addEventListener('DOMContentLoaded', function() {
    // Dynamically load navbar.html into #navbar-container
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(html => {
                navbarContainer.innerHTML = html;
                // Set active class based on current page
                let page = window.location.pathname.split('/').pop();
                if (!page || page === '') page = 'index.html';
                // Remove active from all nav-items
                const navItems = navbarContainer.querySelectorAll('.nav-item');
                navItems.forEach(item => item.classList.remove('active'));
                // Find the link that matches the current page
                const navLinks = navbarContainer.querySelectorAll('a.nav-link');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && (href === page || (page === 'index.html' && href === './'))) {
                        // Add active to the parent li.nav-item
                        const parentLi = link.closest('.nav-item');
                        if (parentLi) parentLi.classList.add('active');
                    }
                });
            });
    }
    // Dynamically load footer.html into #footer-container
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        fetch('footer.html')
            .then(response => response.text())
            .then(html => {
                footerContainer.innerHTML = html;
            });
    }
    // Dynamically load certifications.html into #certifications-container
    const certificationsContainer = document.getElementById('certifications-container');
    if (certificationsContainer) {
        fetch('certifications.html')
            .then(response => response.text())
            .then(html => {
                certificationsContainer.innerHTML = html;
            });
    }
});