# Empowering IT Consultants - Training & Placement Website

Welcome to the official React-based website for **Empowering IT Consultants**, a premier software training and placement institute located in Bangalore, India. This platform is designed to provide a modern, user-friendly interface to explore our courses, trainers, placement opportunities, and get in touch with us.

![Homepage Screenshot](./public/screenshot-homepage.jpg)

---

## 🚀 Features

- ⚡ **Modern React Frontend** – Built with React + Tailwind CSS for fast and responsive UI
- 🧭 **Multi-Page Routing** – Powered by React Router DOM
- 📱 **Mobile-Friendly Design** – Fully responsive for smartphones, tablets, and desktops
- 🎓 **Dynamic Slider on Homepage** – Highlights core offerings with carousel
- 📞 **Contact Modal** – Includes a request call back form with Formspree integration
- 📌 **Hiring Partners Section** – Showcases companies hiring our trainees
- 🌙 **Dark Mode Support** *(optional, configurable)*
- 📩 **Email + SMS Alerts** – Easily connect to services like Formspree and Twilio

---

## 🧑‍💻 Tech Stack

| Frontend         | UI & Styling     | Integrations     |
|------------------|------------------|------------------|
| React 18         | TailwindCSS      | Formspree (Email)|
| React Router DOM | Heroicons / Icons| Twilio (SMS)     |
| React Slick      |                 | Unsplash (Images)|

---

## 📂 Project Structure
it-consultancy-react/
│
├── public/                  # Static assets & favicon
├── src/
│   ├── components/          # Reusable components (e.g. Navbar, Footer)
│   ├── pages/               # Pages like Home, About, Courses, Contact
│   ├── data/                # JSON or JS-based dummy data
│   ├── App.jsx              # Main app routing component
│   └── index.js             # ReactDOM entry point
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # For Tailwind processing
├── package.json
└── README.md

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/it-consultancy-react.git
cd it-consultancy-react

2. Install Dependencies

npm install

3. Start the Development Server

npm run dev

Open http://localhost:5173 in your browser.

⸻

🔗 Deployment Options
	•	GitHub Pages – Vite + gh-pages Setup Guide
	•	Vercel – Recommended for ease and speed
	•	Netlify – Free, one-click continuous deployment

⸻

🔒 Form & SMS Setup

✉️ Email Notifications via Formspree
	1.	Visit Formspree.io
	2.	Create a form and copy the action endpoint (e.g. https://formspree.io/f/your-id)
	3.	Update your form in Contacts.jsx:

    <form action="https://formspree.io/f/your-id" method="POST">

    📲 Optional: SMS via Twilio

You can integrate Twilio with a backend (Node/Express) to trigger SMS after form submission.

⸻

📸 Screenshots

🔻 Homepage Hero Slider
📞 Contact Modal


⸻

🙌 Contributing

Feel free to fork this repo, raise issues, or contribute features, UI improvements, or bug fixes via PRs.

⸻

📧 Contact

Email: contact@empoweringitconsultants.com
Phone: +91 81061 10504
Location: BTM Layout, Bangalore, India

⸻

📝 License

This project is licensed under the MIT License.
---

Let me know if you want to include badges (e.g., Netlify/Vercel status, license, tech stack) or add custom deployment steps.