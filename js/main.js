// Core ERP Application JavaScript

// Initialize application when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupNavigation();
    setupModals();
    initializeChart();
    loadSampleData();
});

// Application initialization
function initializeApp() {
    console.log('Core ERP Application initialized');
    
    // Set current year in any date displays
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach(element => {
        element.textContent = currentYear;
    });
    
    // Initialize any tooltips or interactive elements
    initializeInteractiveElements();
}

// Navigation system
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Update URL hash without scrolling
            history.pushState(null, null, `#${sectionId}`);
            
            // Load section-specific data
            loadSectionData(sectionId);
        });
    });
    
    // Handle initial page load with hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        const targetLink = document.querySelector(`[data-section="${hash}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
}

// Modal system
function setupModals() {
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        
        // Focus on first input if available
        const firstInput = modal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Chart initialization (using Chart.js)
function initializeChart() {
    const ctx = document.getElementById('salesChart');
    if (ctx && window.Chart) {
        const salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Monthly Sales',
                    data: [12000, 19000, 15000, 25000, 22000, 30000],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });
    }
}

// Load section-specific data
function loadSectionData(sectionId) {
    switch(sectionId) {
        case 'dashboard':
            updateDashboardData();
            break;
        case 'sales':
            updateSalesTable();
            break;
        case 'inventory':
            updateInventoryTable();
            break;
        case 'accounting':
            updateAccountingData();
            break;
        case 'reports':
            updateReportsData();
            break;
    }
}

// Dashboard data updates
function updateDashboardData() {
    // Simulate real-time data updates
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach(card => {
        const changeElement = card.querySelector('.card-change');
        if (changeElement) {
            // Add a subtle animation to show data is live
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        }
    });
}

// Sales table updates
function updateSalesTable() {
    const salesTableBody = document.querySelector('#salesTable tbody');
    if (salesTableBody) {
        // Add loading state
        salesTableBody.style.opacity = '0.6';
        
        // Simulate API call delay
        setTimeout(() => {
            salesTableBody.style.opacity = '1';
            console.log('Sales data updated');
        }, 500);
    }
}

// Inventory table updates
function updateInventoryTable() {
    const inventoryTableBody = document.querySelector('#inventoryTable tbody');
    if (inventoryTableBody) {
        // Add loading state
        inventoryTableBody.style.opacity = '0.6';
        
        // Simulate API call delay
        setTimeout(() => {
            inventoryTableBody.style.opacity = '1';
            console.log('Inventory data updated');
        }, 500);
    }
}

// Accounting data updates
function updateAccountingData() {
    const summaryCards = document.querySelectorAll('.summary-card');
    summaryCards.forEach(card => {
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
}

// Reports data updates
function updateReportsData() {
    const reportCards = document.querySelectorAll('.report-card');
    reportCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        }, index * 100);
    });
}

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .dashboard-card, .report-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Add click animations to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('div');
            const size = 60;
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.6s linear;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Sample data loading
function loadSampleData() {
    // This function would normally load data from an API
    console.log('Sample data loaded');
    
    // Simulate progressive data loading
    setTimeout(() => {
        document.querySelectorAll('.dashboard-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, Math.random() * 500);
        });
    }, 100);
}

// Report generation
function generateReport() {
    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    button.disabled = true;
    
    // Simulate report generation
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        
        // Show success message
        showNotification('Report generated successfully!', 'success');
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : '#0c5460'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 1001;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        opacity: 0.7;
        margin-left: 1rem;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Export functions for global access
window.openModal = openModal;
window.closeModal = closeModal;
window.generateReport = generateReport;