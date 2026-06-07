"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { LegalDoc, WindowView, SupportTab } from "@/lib/types";

interface AppContextValue {
  activeWindow: WindowView;
  setActiveWindow: (view: WindowView) => void;
  activeLegalDoc: LegalDoc;
  openLegalDoc: (doc: LegalDoc) => void;
  activeSupportTab: SupportTab;
  openSupportTab: (tab: SupportTab) => void;
  scrollToContact: () => void;
  contactRef: React.RefObject<HTMLElement | null>;
  contactInterest: string;
  setContactInterest: (interest: string) => void;
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
  isInternshipModalOpen: boolean;
  openInternshipModal: () => void;
  closeInternshipModal: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeWindow, setActiveWindowState] = useState<WindowView>("home");
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDoc>("privacy");
  const [activeSupportTab, setActiveSupportTab] = useState<SupportTab>("help");
  const [contactInterest, setContactInterest] = useState<string>(
    "Build a Web/App Project"
  );
  const contactRef = useRef<HTMLElement | null>(null);

  // Modals state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  const openContactModal = useCallback(() => setIsContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setIsContactModalOpen(false), []);

  const openInternshipModal = useCallback(() => setIsInternshipModalOpen(true), []);
  const closeInternshipModal = useCallback(() => setIsInternshipModalOpen(false), []);

  const setActiveWindow = useCallback((view: WindowView) => {
    setActiveWindowState(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /** Navigate to the Legal view and open the specified document. */
  const openLegalDoc = useCallback(
    (doc: LegalDoc) => {
      setActiveLegalDoc(doc);
      setActiveWindowState("legal");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  /** Navigate to the Support view and open the specified document. */
  const openSupportTab = useCallback(
    (tab: SupportTab) => {
      setActiveSupportTab(tab);
      setActiveWindowState("support");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  const scrollToContact = useCallback(() => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <AppContext.Provider
      value={{
        activeWindow,
        setActiveWindow,
        activeLegalDoc,
        openLegalDoc,
        activeSupportTab,
        openSupportTab,
        scrollToContact,
        contactRef,
        contactInterest,
        setContactInterest,
        isContactModalOpen,
        openContactModal,
        closeContactModal,
        isInternshipModalOpen,
        openInternshipModal,
        closeInternshipModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

