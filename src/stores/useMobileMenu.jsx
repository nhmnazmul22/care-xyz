import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMobileMenu = create()(
  persist(
    (set, get) => ({
      isMobileMenuOpen: false,
      setIsMobileMenuOpen: (open) => {
        set({ isMobileMenuOpen: open });
      },
    }),
    { name: "use mobile menu store" }
  )
);

export default useMobileMenu;
