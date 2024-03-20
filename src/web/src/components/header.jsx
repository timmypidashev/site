"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa"; // Import hamburger icon


// Tabs(links to be converted into a tab menu)
const tabs = [
  { id: "/", label: "Home", color: "green" },
  { id: "projects", label: "Projects", color: "yellow" },
  { id: "resume", label: "Resume", color: "blue" },
  { id: "blog", label: "Blog", color: "purple" },
  { id: "shop", label: "Shop", color: "aqua" }
];

// Tab theme colors
const tabColors = {
  green: "bg-light-green-1 dark:bg-dark-green-1",
  yellow: "bg-light-yellow-1 dark:bg-dark-yellow-1",
  blue: "bg-light-blue-1 dark:bg-dark-blue-1",
  purple: "bg-light-purple-1 dark:bg-dark-purple-1",
  aqua: "bg-light-aqua-1 dark:bg-dark-aqua-1"
};

// Individual tab links
function Tab({ tab, activeTab, setActiveTab }) {
  return (
    <Link href={`/${tab.id}`} passHref>
      <motion.a
        onClick={() => setActiveTab(tab.id)}
        className={`${
          activeTab === tab.id ? "" : ""
        } 
        relative rounded-full
        lg:px-6 md:px-5 sm:px-4 lg:py-1.5 md:py-1.5 sm:py-1.5
        lg:mr-8 md:mr-4 sm:mr-2 lg:mb-1 md:mb-1 sm:mb-1
        lg:text-4xl md:text-3xl sm:text-2xl font-bold text-light-foreground dark:text-dark-foreground
        transition-all focus-visible:outline-2
      `}
        style={{
          WebkitTapHighlightColor: "transparent"
        }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 }
        }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === tab.id && (
          <motion.div
            layoutId="underline"
            className={`
            absolute inset-x-0 
            lg:bottom-0.5 md:bottom-0.5 sm:bottom-0.5 
            lg:h-1.5 md:h-1.5 sm:h-1 
            ${tabColors[tab.color]}
          `}
            style={{ marginLeft: "0.75em", marginRight: "0.75em", borderRadius: 9999 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        {tab.label}
      </motion.a>
    </Link>
  );
}

// List of tabs
function TabMenu({ tabs, activeTab, setActiveTab }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        },
        hidden: { opacity: 0 }
      }}
      className="hidden 2xl:flex xl:flex lg:flex md:flex space-x-1" // Hide on small screens
    >
      {tabs.map((tab) => (
        <Tab key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
      ))}
    </motion.div>
  );
}

function CollapsibleMenu({ tabs, activeTab, setActiveTab }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        },
        hidden: { opacity: 0 }
      }}
      className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex-col space-y-4" // Flex column layout
    >
      {tabs.map((tab) => (
        <motion.div
          key={tab.id}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 }
          }}
        >
          <Tab tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        </motion.div>
      ))}
    </motion.div>
  );
}

function Header() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <AnimatePresence>
        {mounted && (
          <>
            <TabMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <CollapsibleMenu tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
