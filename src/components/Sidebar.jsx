import {
  BarChart2,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Menu,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const SIDEBAR_ITEMS = [
    {
      name: "Overview",
      icon: BarChart2,
      color: "#6361F1",
      href: "/",
    },
    {
      name: "Products",
      icon: ShoppingBag,
      color: "#EC4889",
      href: "/products",
    },
    {
      name: "Users",
      icon: Users,
      color: "#10B981",
      href: "/users",
    },
    {
      name: "Sales",
      icon: DollarSign,
      color: "#F59E0B",
      href: "/sales",
    },
    {
      name: "Orders",
      icon: ShoppingCart,
      color: "#8B5CF6",
      href: "/orders",
    },
    {
      name: "Analytics",
      icon: TrendingUp,
      color: "#3B82F6",
      href: "/analytics",
    },
    {
      name: "Settings",
      icon: Settings,
      color: "#6EE787",
      href: "/settings",
    },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-150 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 216 : 80 }}
    >
      <div className="h-full bg-slate-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-slate-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
