import { useEffect, useState } from "react";

const NOTIFICATIONS = [
  "Ahmed just joined 🔥",
  "New member added ✅",
  "Raj just joined 🔥",
  "Priya just joined! 🎉",
  "Mohamed just joined 🔥",
  "New member added ✅",
  "Carlos just joined 🚀",
  "Aisha just joined 🔥",
  "New update posted! 📊",
  "Vikram just joined 🔥",
];

interface Notification {
  id: number;
  text: string;
  exiting: boolean;
}

let notifId = 0;

export function LiveNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const showNext = () => {
      const id = ++notifId;
      const text = NOTIFICATIONS[index % NOTIFICATIONS.length];
      setIndex((i) => i + 1);

      setNotifications((prev) => [...prev, { id, text, exiting: false }]);

      // Start exit animation after 3s
      setTimeout(() => {
        setNotifications((prev) =>
          prev.map((n) => (n.id === id ? { ...n, exiting: true } : n)),
        );
        // Remove after exit animation
        setTimeout(() => {
          setNotifications((prev) => prev.filter((n) => n.id !== id));
        }, 350);
      }, 3000);
    };

    const interval = setInterval(showNext, 4500 + Math.random() * 2000);
    // Show first one after 2s
    const initial = setTimeout(showNext, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, [index]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        left: "16px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        pointerEvents: "none",
      }}
    >
      {notifications.map((n) => (
        <div
          key={n.id}
          className={n.exiting ? "notification-exit" : "notification-enter"}
          style={{
            background: "rgba(20, 20, 27, 0.95)",
            border: "1px solid rgba(41, 121, 255, 0.4)",
            borderRadius: "999px",
            padding: "10px 18px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#f2f4ff",
            backdropFilter: "blur(12px)",
            boxShadow:
              "0 0 12px rgba(41,121,255,0.3), 0 4px 16px rgba(0,0,0,0.4)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#2979ff", marginRight: 6 }}>●</span>
          {n.text}
        </div>
      ))}
    </div>
  );
}
