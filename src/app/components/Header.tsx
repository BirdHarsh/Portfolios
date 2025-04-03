// src/app/components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css"; // Import CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/frontend.png" // Replace with your own logo path (e.g., /logo.svg)
            alt="Portfolio Logo"
            width={40}
            height={40}
          />
          <span className={styles["logo-text"]}>Frontend</span>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/" className={styles["nav-link"]}>
            Home
          </Link>
          <Link href="/about" className={styles["nav-link"]}>
            About
          </Link>
          <Link href="/projects" className={styles["nav-link"]}>
            Projects
          </Link>
          <Link href="/contact" className={styles["nav-link"]}>
            Contact
          </Link>
        </nav>

        {/* Let's Connect Button */}
        <a href="mailto:youremail@example.com" className={styles["connect-button"]}>
          Let's Connect
        </a>
      </div>
    </header>
  );
}
