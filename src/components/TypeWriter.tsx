"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[]; // Liste des mots ou phrases à afficher
  typingSpeed?: number; // Vitesse d’écriture
  deletingSpeed?: number; // Vitesse d’effacement
  delayBetweenTexts?: number; // Pause entre deux textes
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index % texts.length];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setText((prev) => currentText.slice(0, prev.length + 1));
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <span style={{ whiteSpace: "pre" }}>
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default Typewriter;
