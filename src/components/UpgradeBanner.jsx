// Fil: src/components/UpgradeBanner.jsx
import { getUser } from "../store";

export default function UpgradeBanner() {
  const user = getUser();
  if (user.plan === "pro" || user.verifiedStudent) return null;
  const link = import.meta.env.VITE_PAYMENT_LINK_URL || "#"; // Skapa Payment Link i Stripe Dashboard
  return (
    <div className="bg-secondary p-4 text-center">
      <span className="mr-3">Du har {user.downloadsToday || 0} / 5 gratisnedladdningar idag.</span>
      <a href={link} className="underline">Uppgradera till Pro</a>
    </div>
  );
}