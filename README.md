# Imperial Fit - Gym Management System

Welcome to **Imperial Fit**, a modern Gym Management System built with React and Vite. This project provides a digital platform for managing gym operations, showcasing gym features, pricing, gallery, and contact options for members and visitors.

## Features

- **Landing Page** with hero section and call-to-action buttons
- **About Section** describing the gym's mission and facilities
- **Workout Sessions** highlighting featured programs and bootcamps
- **Pricing Plans** with detailed package information
- **Gallery** showcasing gym images
- **Contact Us** form with email integration (via EmailJS)
- **Footer** with contact info and social media links
- **Responsive Design** for desktop and mobile devices

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [EmailJS](https://www.emailjs.com/) (for contact form)
- [React Router](https://reactrouter.com/) (for routing)
- [Lucide React](https://lucide.dev/) (icons)
- [React Spinners](https://www.davidhu.io/react-spinners/) (loading indicators)
- [React Toastify](https://fkhadra.github.io/react-toastify/) (notifications)
- CSS (custom, responsive)

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd gym-management-system

   ```

2. **Install dependencies:**
   npm install

3. **Set up EmailJS:**

Create a .env file in the root directory.

# Add your EmailJS credentials:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id

4. **Start the development server:**
   npm run dev

5. **Open in browser:**

# Visit http://localhost:5173 (or the port shown in your terminal).

## Project Structure

├── public/
│ └── [static images and assets]
├── src/
│ ├── [App.jsx](http://_vscodecontentref_/0)
│ ├── [App.css](http://_vscodecontentref_/1)
│ ├── [main.jsx](http://_vscodecontentref_/2)
│ └── components/
│ ├── [AboutSection.jsx](http://_vscodecontentref_/3)
│ ├── [ContactUs.jsx](http://_vscodecontentref_/4)
│ ├── [Footer.jsx](http://_vscodecontentref_/5)
│ ├── [GallerySection.jsx](http://_vscodecontentref_/6)
│ ├── [Hero.jsx](http://_vscodecontentref_/7)
│ ├── [Navbar.jsx](http://_vscodecontentref_/8)
│ ├── [Pricing.jsx](http://_vscodecontentref_/9)
│ └── [WorkoutSession.jsx](http://_vscodecontentref_/10)
├── [index.html](http://_vscodecontentref_/11)
├── [package.json](http://_vscodecontentref_/12)
└── [vite.config.js](http://_vscodecontentref_/13)

# Customization

**Images:** Replace images in the public/ folder to personalize the gallery and backgrounds.
**Contact Form:** Configure your EmailJS account and update the .env file for email delivery.
**Styling:** Modify src/App.css for custom styles and branding.

# Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss what you would like to change.

# License

This project is for educational and demonstration purposes.
