# Core ERP - Enterprise Resource Planning System

A modern, responsive web-based ERP (Enterprise Resource Planning) system built with HTML, CSS, and JavaScript. This application provides essential business management features including dashboard analytics, sales management, inventory tracking, accounting, and reporting capabilities.

## 🌟 Features

- **Dashboard Overview**: Real-time business metrics and KPI visualization
- **Sales Management**: Track orders, customers, and sales performance
- **Inventory Management**: Monitor stock levels, products, and categories
- **Financial Accounting**: Manage assets, liabilities, and equity
- **Reports & Analytics**: Generate comprehensive business reports
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## 🚀 Live Demo

The application is automatically deployed to GitHub Pages and accessible at:
`https://abdalrahmannida.github.io/core-erp/`

## 📁 Project Structure

```
core-erp/
├── index.html          # Main application HTML
├── styles/
│   └── main.css        # Application styling
├── js/
│   └── main.js         # Application JavaScript
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment workflow
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Charts**: Chart.js for data visualization
- **Icons**: Font Awesome for consistent iconography
- **Deployment**: GitHub Pages with GitHub Actions

## 🏃‍♂️ Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdalrahmanNida/core-erp.git
   cd core-erp
   ```

2. Open `index.html` in your web browser, or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## 🚀 Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy your application

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## 🎨 Customization

### Colors and Theming
The application uses CSS custom properties for easy theming. Main colors can be modified in the `styles/main.css` file:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #28a745;
    --danger-color: #dc3545;
}
```

### Adding New Features
1. Add new HTML sections to `index.html`
2. Style them in `styles/main.css`
3. Add functionality in `js/main.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [Chart.js](https://www.chartjs.org/) for charts
- [GitHub Pages](https://pages.github.com/) for hosting

## 📞 Support

If you have any questions or need support, please open an issue in the GitHub repository.

---

**Built with ❤️ for modern businesses**