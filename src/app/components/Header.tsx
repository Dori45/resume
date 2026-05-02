"use client";

import { useEffect, useState } from "react";
import { Button } from "antd";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        I'am　<span className="name">Dori</span>
      </div>

      {/* Nav */}
      <nav className="nav">
        <a href="#about">關於我</a>
        <a href="#skills">技能</a>
        <a href="#experience">經歷</a>
        <a href="#projects">專案</a>
      </nav>

      {/* CTA */}
      {/* <div className="cta">
        <Button type="primary" shape="round">
          下載履歷
        </Button>
      </div> */}
    </header>
  );
}