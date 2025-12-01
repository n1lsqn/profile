"use client";

import React, { useEffect, useState } from "react";

const preload = (url: string) => {
  const img = new Image();
  img.src = url;
};

export default function LoadingScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    preload('/assets/banner.png');
    preload('/assets/25-05-09 02-23-43 at_2.png');
    preload('/assets/bg_blur.png');

    const timer = setTimeout(() => setFadeOut(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-[url('/assets/bg_blur.png')] bg-cover backdrop-blur-xl
        transition-opacity duration-500
        ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-14 w-14 md:h-16 md:w-16" />
    </div>
  );
}