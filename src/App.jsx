// Fil: src/App.jsx (ersätt din nuvarande med denna utökade)
import { useEffect, useState } from "react";
import UpgradeBanner from "./components/UpgradeBanner";
import StudentVerify from "./components/StudentVerify";
import UploadManager from "./components/UploadManager";
import { DAILY_FREE_LIMIT, getUser, setUser, resetDailyCounter } from "./store";

export default function App() {
    const [user, setUserState] = useState(getUser());
    const [showVerify, setShowVerify] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const updated = resetDailyCounter({ ...user });
        setUser(updated); setUserState(updated);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = () => {
        const u = { ...user, email: user.email || "demo@user.com" };
        setUser(u); setUserState(u);
    };
    const logout = () => { const blank = { email: null, plan: "free", verifiedStudent: false, downloadsToday: 0, downloadsDate: null }; setUser(blank); setUserState(blank); };

    const handleDownload = () => {
        const u = resetDailyCounter({ ...getUser() });
        if (!u.email) { alert("Logga in först"); return; }
        if (!u.verifiedStudent && u.plan !== "pro" && u.downloadsToday >= DAILY_FREE_LIMIT) {
            alert("Du har nått gränsen för gratisnedladdningar idag.");
            return;
        }
        u.downloadsToday += 1; setUser(u); setUserState(u);
        alert("Nedladdning påbörjad!");
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <button onClick={() => setDarkMode(!darkMode)} className="fixed top-4 right-4 bg-secondary text-primary px-4 py-2 rounded-md shadow">
                {darkMode ? '☀️ Ljust läge' : '🌙 Mörkt läge'}
            </button>

            <div className="min-h-screen bg-background text-primary">
                <header className="p-4 flex items-center justify-between">
                    <div className="font-semibold">Arkitekt 3.0 Digital</div>
                    <div className="flex items-center gap-3">
                        {user.email ? (
                            <>
                                <span className="text-sm text-secondary">{user.email} • {user.verifiedStudent ? 'Student' : user.plan.toUpperCase()}</span>
                                <button onClick={logout} className="px-3 py-2 rounded-md border">Logga ut</button>
                            </>
                        ) : (
                            <button onClick={login} className="px-3 py-2 rounded-md border">Logga in</button>
                        )}
                        <button onClick={() => setShowVerify(true)} className="px-3 py-2 rounded-md bg-primary text-background">Verifiera student</button>
                    </div>
                </header>

                <UpgradeBanner />

                <main className="p-6 space-y-12">
                    <section className="text-center py-12 bg-secondary rounded-md">
                        <h1 className="text-3xl font-bold mb-2">Från teori till praktik</h1>
                        <p className="text-sm text-secondary max-w-2xl mx-auto">Nedladdningsbara Revit- och Archicad-exempel, med freemium och studentläge.</p>
                        <div className="mt-4">
                            <button onClick={handleDownload} className="px-6 py-3 rounded-md shadow bg-primary text-background">Prova en nedladdning</button>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">Ladda upp & metadata (demo)</h2>
                        <UploadManager />
                    </section>
                </main>

                <footer className="text-center py-6 text-sm text-secondary">&copy; {new Date().getFullYear()} Arkitekt 3.0 Digital</footer>
            </div>

            {showVerify && <StudentVerify onClose={() => setShowVerify(false)} />}
        </div>
    );
}

// Fil: .env (lägg i Vercel Environment Variables i stället)
// VITE_PAYMENT_LINK_URL=https://buy.stripe.com/XXXXXXXXXXXX  // Skapa i Stripe Dashboard → Payment Links

// ===== Slut på patch =====
