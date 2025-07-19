# Future-For-Kids-Busara-School

Welcome to the **Future-For-Kids - Busara School** project!
This is a modern web application built with **Next.js** and integrated with **Firebase Studio** for backend services and real-time data management.


## 🚀 Getting Started

This project uses **Next.js App Router** and **TypeScript**, and connects to Firebase Studio for data and hosting.

### 📁 Entry Point

Start exploring the app from:

```
src/app/page.tsx
```

This is the root page of the application.

---

## 🛠️ Technologies Used

* [Next.js 13+ (App Router)](https://nextjs.org/docs/app)
* [TypeScript](https://www.typescriptlang.org/)
* [Firebase Studio](https://firebase.google.com/)

  * Firestore (database)
  * Firebase Auth
  * Hosting
  * Cloud Functions (optional)

---

## ⚙️ Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/future-for-kids-busara-school.git
cd future-for-kids-busara-school
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up Firebase:

* Create a Firebase project in [Firebase Console](https://console.firebase.google.com/)
* Add your `firebaseConfig` to a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:

```bash
npm run dev
```

---

## 📦 Project Structure

```bash
src/
├── app/
│   └── page.tsx        # Main entry point
├── components/         # Shared UI components
├── firebase/           # Firebase setup
├── styles/             # Global styles
└── utils/              # Utility functions
```

---

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License.

