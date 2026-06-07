"use client";

import { useApp } from "@/context/AppContext";
import AboutView from "@/components/views/AboutView";
import HomeView from "@/components/views/HomeView";
import LabsView from "@/components/views/LabsView"; // Innovations View
import ProductsView from "@/components/views/ProductsView"; // Services View
import CareerView from "@/components/views/CareerView"; // Career View
import LegalView from "@/components/views/LegalView"; // Legal Sub-View
import SupportView from "@/components/views/SupportView"; // Support View
import { useEffect, useState } from "react";
import type { WindowView } from "@/lib/types";

const VIEWS: Record<WindowView, React.ComponentType> = {
  home: HomeView,
  about: AboutView,
  innovations: LabsView,
  services: ProductsView,
  career: CareerView,
  legal: LegalView,
  support: SupportView,
};

export default function WindowRouter() {
  const { activeWindow } = useApp();
  const [displayWindow, setDisplayWindow] = useState<WindowView>(activeWindow);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (activeWindow === displayWindow) return;

    let isMounted = true;
    const animFrame = requestAnimationFrame(() => {
      if (isMounted) setIsVisible(false);
    });

    const timer = setTimeout(() => {
      if (isMounted) {
        setDisplayWindow(activeWindow);
        setIsVisible(true);
      }
    }, 250); // Clean 250ms swap transition

    return () => {
      isMounted = false;
      cancelAnimationFrame(animFrame);
      clearTimeout(timer);
    };
  }, [activeWindow, displayWindow]);

  const View = VIEWS[displayWindow];

  return (
    <div
      className={`min-h-[calc(100vh-5rem)] pt-24 pb-10 sm:pt-28 sm:pb-12 ${
        isVisible ? "window-panel" : "window-exit"
      }`}
      role="main"
      aria-live="polite"
      aria-label={`${displayWindow} view`}
    >
      <div key={displayWindow}>
        <View />
      </div>
    </div>
  );
}
