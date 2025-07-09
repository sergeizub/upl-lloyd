import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Upload Lloyd Photo',
  description: '',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyByd5aLEn7eNAHgCDAu_RLS8dvjd-FL89I",
    authDomain: "lloyd-photo-uploader.firebaseapp.com",
    projectId: "lloyd-photo-uploader",
    storageBucket: "lloyd-photo-uploader.firebasestorage.app",
    messagingSenderId: "23166346375",
    appId: "1:23166346375:web:1eb1a1c20420d12f6c0422",
    measurementId: "G-NNHGXQB9KW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> 
      </body>
    </html>
  )
}
