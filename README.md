# Expensely 💸

**Expensely** is a full-stack expense tracking app built for personal use. It helps users track and manage their daily expenses in a clean, intuitive interface — with a focus on both design and functionality. The app is currently under development and already includes core features such as expense creation, secure login, and balance summaries.

---

## ✨ Features

### 📱 **Mobile App** (React Native + Expo)
- View transactions with daily/total balance summaries
- Add new expenses with category, title, and amount
- Intuitive, mobile-friendly UI based on modern design principles

### 🔐 **Authentication**
- Secure login and session handling (currently using Clerk — will be replaced with custom auth)

### 🌐 **Backend**
- Express.js API with PostgreSQL (Neon)
- Rate limiting with Upstash Redis
- RESTful endpoints for managing expenses

---

## 🗂 Project Structure

```
.
├── mobile   # React Native (Expo) frontend
├── backend  # Express.js + PostgreSQL + Redis API
└── .env     # Environment variables (not committed)
```

---

## 📸 Screenshots

<img src="https://github.com/user-attachments/assets/737cc94d-9bd3-4063-bcb1-ae797834851d" width="250" />
<img src="https://github.com/user-attachments/assets/0778f26e-65b3-40ab-9764-5caeba5da91b" width="250" />

*Modern Sign Up and Sign In screens with charming visuals.*

---

## 🎥 Demo

<img src="https://github.com/user-attachments/assets/d8374e37-4afe-4ee4-b3fa-1bd89e748b60" width="300" />

*A quick demo showing how to add a new expense.*

---

## 🚧 Roadmap

- [ ] Replace Clerk with custom JWT-based authentication
- [ ] Add ability to share expenses with a friend
- [ ] Implement monthly/weekly analytics and charts
- [ ] Integrate AI insights for spending habits

---

## 🧪 Tech Stack

- **Frontend:** React Native, Expo Router, Axios
- **Backend:** Node.js, Express, PostgreSQL (Neon), Upstash Redis
- **Auth:** Clerk (temporary)
- **Dev Tools:** Postman, GitHub, EAS CLI

---

## 👨‍💻 Developer Note

This project is part of my personal portfolio and still evolving. It's been instrumental in improving my skills in full-stack development, mobile UI/UX design, API design, and backend performance (rate limiting).

Feel free to explore the codebase and reach out if you'd like to collaborate or learn more.

---
