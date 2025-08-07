
import { useState } from "react";

export default function Arkitekt30Mockup() {
  const [downloads, setDownloads] = useState(0);
  const MAX_FREE_DOWNLOADS = 5;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const handleDownload = () => {
    if (!isLoggedIn) {
      alert("Du måste logga in för att ladda ner.");
      return;
    }
    if (!isStudent && downloads >= MAX_FREE_DOWNLOADS) {
      alert("Du har nått gränsen för gratinerladdningar idag. Uppgradera till Pro eller kom tillbaka imorgon.");
      return;
    }
    setDownloads(downloads + 1);
    alert("Nedladdning påbörjad!");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleStudentRegister = () => {
    setIsLoggedIn(true);
    setIsStudent(true);
  };

  return (
    <div className="min-h-screen bg-background text-primary">
      {/* Hero Section */}
      <section className="text-center py-20 bg-secondary">
        <h1 className="text-4xl font-bold mb-4">Från teori till praktik</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Inspirerad av boken <em>Arkitekt 3.0</em>, ger denna plattform dig nedladdningsbara Revit- och Archicad-exempel för varje fas i projekteringsarbetet.
        </p>
        <div className="mt-6 space-x-4">
          <button onClick={() => alert("Innehållet kommer snart!")} className="px-6 py-3 rounded-md shadow bg-primary text-background">Utforska innehållet</button>
          <button onClick={handleLogin} className="px-6 py-3 rounded-md shadow border border-primary text-primary">Logga in</button>
        </div>
      </section>

      {/* Navigation / Phase Overview */}
      <section className="grid md:grid-cols-3 gap-8 p-10">
        {["Förstudie", "Systemhandling", "Bygghandling", "Produktion", "Digital leverans"].map((phase) => (
          <div key={phase} className="bg-background shadow rounded-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{phase}</h2>
            <p className="text-sm text-secondary mb-4">Kort introduktion till {phase.toLowerCase()} med länkar till relevanta exempel.</p>
            <button className="text-sm text-blue-600 hover:underline">Visa exempel</button>
          </div>
        ))}
      </section>

      {/* Content Block */}
      <section className="bg-secondary py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Revit & Archicad-exempel</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-background p-6 rounded-md shadow hover:shadow-md transition">
              <div className="h-40 bg-accent rounded mb-4"></div>
              <h3 className="text-lg font-semibold mb-1">Fasadkomposition {i}</h3>
              <p className="text-sm text-secondary">.RVT / .PLN • Densitet: Hög • Skede: Bygghandling</p>
              <button onClick={handleDownload} className="mt-3 text-sm text-blue-600 hover:underline">Ladda ner</button>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-secondary">
          Nedladdningar idag: {downloads} / {isStudent ? "Obegränsat (student)" : MAX_FREE_DOWNLOADS}
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-primary text-background">
        <h2 className="text-2xl font-bold mb-2">Gratis för studenter – alltid</h2>
        <p className="mb-4">Verifiera din e-postadress från skolan och få fri tillgång till allt innehåll.</p>
        <button onClick={handleStudentRegister} className="bg-background text-primary px-6 py-3 rounded-md shadow">Registrera studentkonto</button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-secondary">
        &copy; {new Date().getFullYear()} Arkitekt 3.0 Digital – Ett initiativ för praktiskt lärande
      </footer>
    </div>
  );
}
