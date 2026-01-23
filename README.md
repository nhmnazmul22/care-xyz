# Care.xyz - Baby Sitting & Elderly Care Service Platform

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
</div>


<br />

<div align="center">
  <h3>🏠 Reliable & Trusted Care Services for Your Loved Ones</h3>
  <p>A modern web application that connects families with verified caregivers for children, elderly, and those recovering from illness.</p>
</div>

---

## 🎯 Overview

**Care.xyz** is a comprehensive web application that helps users book reliable and trusted care services for children,
elderly, or sick family members. Users can easily book services based on their required duration and location.

### Mission

To make caregiving **easy**, **secure**, and **accessible** for everyone.

### What We Offer

- 👶 **Baby Care** - Professional childcare and babysitting services
- 👴 **Elderly Care** - Compassionate care for seniors
- 🏥 **Sick People Care** - Support for those recovering from illness

---

## ✨ Key Features

### Core Functionality

| Feature                      | Description                                                   |
|------------------------------|---------------------------------------------------------------|
| 📱 **Responsive Design**     | Fully optimized for mobile, tablet, and desktop devices       |
| 🔐 **User Authentication**   | Email/Password login with Google Social Login support         |
| 📅 **Dynamic Booking**       | Select duration (hours/days), location hierarchy, and address |
| 💰 **Auto Cost Calculation** | Real-time total cost based on duration × service charge       |
| 📊 **Booking Status**        | Track status: Pending → Confirmed → Completed / Cancelled     |
| 🌓 **Theme Toggle**          | Light and dark mode support                                   |

### User Experience

- ✅ Multi-step booking wizard with progress indicators
- ✅ Location selection: Division → District → City → Area
- ✅ Form validation with real-time feedback
- ✅ Smooth animations powered by Framer Motion
- ✅ Toast notifications for user actions

---

### Authentication Flow

- New users register with: NID, Name, Email, Contact, Password
- Password requirements: 6+ characters, 1 uppercase, 1 lowercase
- Logged-in users are redirected appropriately (not back to log in)
- Private routes protected for authenticated users only

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/nhmnazmul22/care-xyz

# Navigate to project directory
cd care-xyz

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run start
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=
DATABASE_NAME=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

> ⚠️ **Note**: Never commit sensitive API keys to version control. Use environment variables for all configuration.

---

## 🔗 Links

| Resource           | URL                                     |
|--------------------|-----------------------------------------|
| 🌐 **Live Demo**   | https://care-xyz-silk.vercel.app/       |
| 📦 **GitHub Repo** | https://github.com/nhmnazmul22/care-xyz |

---

<div align="center">
  <p>© 2025 Care.xyz. All rights reserved.</p>
</div>
