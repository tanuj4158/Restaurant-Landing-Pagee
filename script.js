document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 50);
    });

    // Menu tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuSections = document.querySelectorAll('.menu-items');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Hide all menu sections
            menuSections.forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show selected menu section
            document.getElementById(category).classList.remove('hidden');
        });
    });

    // Sample menu data
    const menuData = {
        indian: [
            { name: 'Hyderabadi Biryani', description: 'Fragrant basmati rice cooked with tender lamb, saffron, and a blend of 15 spices', price: '599', image: 'https://i.pinimg.com/1200x/9d/9c/15/9d9c15d49cf1a9ee0eaef3beb28133bc.jpg' },
            { name: 'Butter Chicken', description: 'Tandoori chicken in a rich tomato and butter sauce with cream', price: '$16.99', image: 'https://i.pinimg.com/736x/22/26/0a/22260acab33ad32c1073fb10f751a4e3.jpg' },
            { name: 'Paneer Tikka Masala', description: 'Grilled cottage cheese in spiced tomato gravy', price: '$14.99', image: 'https://i.pinimg.com/736x/59/81/85/5981859da80c1d8580654daf371d0ffe.jpg' },
            { name: 'Dal Makhani', description: 'Black lentils slow-cooked with butter and cream', price: '$12.99', image: 'https://i.pinimg.com/736x/a4/61/fb/a461fb32fc95b0b1a61883c3e8668582.jpg' },
            { name: 'Garlic Naan', description: 'Traditional tandoor-baked bread with garlic butter', price: '$4.99', image: 'https://i.pinimg.com/736x/b1/9c/54/b19c54314e406aa224d3061b3d12668f.jpg' },
            { name: 'Samosa Chaat', description: 'Spiced potato samosas topped with yogurt and chutneys', price: '$8.99', image: 'https://i.pinimg.com/1200x/07/e5/da/07e5da375a1bf74af21d1adbdf5919f5.jpg' }
        ],
        italian: [
            { name: 'Truffle Risotto', description: 'Creamy arborio rice with wild mushrooms and white truffle oil', price: '$22.99', image: 'https://i.pinimg.com/736x/a1/ef/78/a1ef789c20d93c9978553eafc2226a94.jpg' },
            { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with pancetta, eggs, and pecorino', price: '$18.99', image: 'https://i.pinimg.com/736x/35/ee/c4/35eec4557d610d4fd10e62863aacd085.jpg' },
            { name: 'Margherita Pizza', description: 'Wood-fired pizza with San Marzano tomatoes and fresh basil', price: '$16.99', image: 'https://i.pinimg.com/1200x/9d/2f/62/9d2f62b46c1a23bd26df0d455c3a388f.jpg' },
            { name: 'Osso Buco', description: 'Milanese-style braised veal shanks with gremolata', price: '$28.99', image: 'https://i.pinimg.com/1200x/75/1d/e2/751de21fe5296b457740dff062694065.jpg' },
            { name: 'Tiramisu', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers', price: '$9.99', image: 'https://i.pinimg.com/736x/5c/6b/f0/5c6bf0c662a4d472d63ca0c2f3f8d443.jpg' }
        ],
        fusion: [
            { name: 'Masala Pizza', description: 'Wood-fired pizza topped with tandoori chicken and mint chutney', price: '$19.99', image: 'https://i.pinimg.com/1200x/45/41/44/4541441bcd7141caf3cfdc2586c278f6.jpg' },
            { name: 'Curry Risotto', description: 'Creamy risotto infused with Indian curry spices and paneer', price: '$17.99', image: 'https://i.pinimg.com/1200x/14/18/3e/14183edad29dd1692e2e9e197ee6a314.jpg' },
            { name: 'Naan Tacos', description: 'Soft naan bread filled with spiced lamb and mint raita', price: '$14.99', image: 'https://i.pinimg.com/736x/2a/a8/8a/2aa88ab56174fe1188e4576e52890cd2.jpg' },
            { name: 'Chai Tiramisu', description: 'Classic tiramisu infused with cardamom and chai tea', price: '$10.99', image: 'https://i.pinimg.com/1200x/1b/e5/6f/1be56ff1df540eb9674b4651048f65d0.jpg' }
        ],
        drinks: [
            { name: 'Mango Lassi', description: 'Traditional yogurt drink with fresh mango', price: '$5.99', image: 'https://i.pinimg.com/736x/df/0e/5a/df0e5a5f1a44db53b0109613f57c4143.jpg' },
            { name: 'Spiced Negroni', description: 'Classic negroni with Indian spice infusion', price: '$12.99', image: 'https://i.pinimg.com/1200x/0d/60/1b/0d601be60e73d77616c467603c2eaadc.jpg' },
            { name: 'Masala Chai', description: 'Traditional Indian spiced tea with milk', price: '$4.99', image: 'https://i.pinimg.com/736x/a1/16/c8/a116c8bba3420dd89a67e39434a4d0d6.jpg' },
            { name: 'Italian Wine Selection', description: 'Ask your server about our premium Italian wines', price: '$9.99+', image: 'https://i.pinimg.com/736x/86/a9/8b/86a98b4046725a1b59c45504b8e0373a.jpg' }
        ]
    };

    // Function to load menu items
    function loadMenuItems(category) {
        const section = document.getElementById(category);
        section.innerHTML = ''; // Clear existing items
        
        menuData[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-content">
                    <h3><span>${item.name}</span> <span class="price">${item.price}</span></h3>
                    <p>${item.description}</p>
                </div>
            `;
            section.appendChild(menuItem);
        });
    }

    // Load initial menu (Indian)
    loadMenuItems('indian');
    
    // Load other menus when their tabs are clicked
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            loadMenuItems(category);
        });
    });

    // Form submission
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real app, you would send this data to a server
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        console.log('Reservation data:', data);
        
        // Show confirmation
        alert('Thank you for your reservation! We will contact you shortly to confirm.');
        this.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Animate gallery items on scroll
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    galleryItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.5s ease';
        galleryObserver.observe(item);
    });
});