# Abid Rafiq Quran Academy - Web Management System

A modernized, secure, and accessible platform for online Quran learning and academic management.

## 🚀 Core Features & Modernization

### 1. Accessibility & Persistent Experience
- **Unified Zoom Control**: Integrated a centralized accessibility system (`js/zoom.js`) allowing users to scale the interface from **80% to 200%**.
- **State Persistence**: Zoom levels are saved in `localStorage`, maintaining the user's preferred accessibility settings across page transitions.
- **Interactive Lesson Viewers**: 
    - **Noorani Qaida & Holy Quran**: Custom-built image viewers with "Type-and-Enter" page jumping.
    - **Adhkār & Duas**: Interactive database of 50+ Masnoon Duas and 28 Morning/Evening Adhkār with filtering capabilities.
    - **Mobile-Responsive**: Fluid transitions and optimized layouts for tablet and mobile devices.

### 2. Security & Content Protection
- **Anti-Theft Traps**: Unified security logic to prevent unauthorized content duplication.
    - **Context Menu Blocking**: Right-click is disabled globally (except on inputs).
    - **DevTools Protection**: Blocks F12, Ctrl+Shift+I, and View Source shortcuts.
    - **Asset Protection**: Prevents image dragging and text selection on educational content.

### 3. Analytics & SEO
- **Google Analytics**: Integrated (G-XXXXXXXXXX) for tracking user engagement and page performance.
- **Search Console**: Verified ownership for improved indexing and visibility.
- **Multilingual SEO**: Optimized meta tags for Arabic, Urdu, and English keywords.

---

## 👥 System Architecture & Roles

The system is built on a hierarchical structure with clear role separation:

### 👑 Admin (Super User)
- Full control over system configuration.
- Ability to create educational centers.
- Management of all supervisor and student accounts.

### 🎓 Supervisors (ID: 1 - 2999)
- Assigned to specific centers.
- Manage student grades and tracking progress for their assigned group.
- **Data Privacy**: Supervisors can only access information relevant to their own students.

### 📖 Students (ID: 3000+)
- Access to learning materials and personal progress reports.
- Multilingual interface support for diverse linguistic backgrounds.

---

## 🛠 Technical Stack
- **Frontend**: Bootstrap 5.2, CSS3 (Custom variables), Font Awesome 4.7.
- **Logic**: Vanilla JavaScript with decentralized state management (localStorage).
- **Assets**: Optimized image galleries for high-resolution Quranic text.

## 📁 Project Structure
- `index.html`: Main landing page and portal entry.
- `basic-lessons.html`: Interactive learning hub for Qaida, Duas, Nimaz, and Quran.
- `js/zoom.js`: Centralized accessibility and security "source of truth".
- `js/main.js`: UI logic and language switching.
- `css/style.css`: Core branding and component styling.
