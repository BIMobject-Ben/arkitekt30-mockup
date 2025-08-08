// Fil: src/components/StudentVerify.jsx
import { useState } from "react";
import { getUser, setUser } from "../store";

const WHITELIST = [
  ".edu", ".ac.uk", ".kth.se", ".chalmers.se", ".umu.se", ".ltu.se", ".lth.se", ".gu.se", ".bth.se", ".ju.se"
];

export default function StudentVerify({ onClose }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);

  const handleVerify = () => {
    const lower = email.trim().toLowerCase();
    const ok = WHITELIST.some((d) => lower.endsWith(d));
    const user = getUser();
    user.email = lower || user.email;
    user.verifiedStudent = ok;
    user.plan = ok ? "student" : user.plan;
    setUser(user);
    setMsg(ok ? "Verifierad som student – obegränsad tillgång!" : "Kunde inte verifiera e‑postdomänen. Vi har markerat din förfrågan – vi återkommer.");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6">
      <div className="bg-background text-primary rounded-md shadow max-w-md w-full p-6">
        <h3 className="text-xl font-semibold mb-2">Verifiera student</h3>
        <p className="text-sm text-secondary mb-4">Ange din skol‑e‑post. Godkända domäner: {WHITELIST.join(", ")}</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="din@skola.edu"
          className="w-full border border-secondary rounded-md px-3 py-2 mb-3 bg-background text-primary"
        />
        <div className="flex gap-3">
          <button onClick={handleVerify} className="px-4 py-2 rounded-md bg-primary text-background">Verifiera</button>
          <button onClick={onClose} className="px-4 py-2 rounded-md border border-primary">Stäng</button>
        </div>
        {msg && <p className="mt-3 text-sm">{msg}</p>}
      </div>
    </div>
  );
}