
# Arkitekt 3.0 Digital – Revit & Archicad Plattform

🎓 Ett initiativ för praktiskt lärande inom projekterande arkitektur. Inspirerad av boken *Arkitekt 3.0* av Jenny Erinstam & Nina Sangdahl, denna digitala plattform gör det möjligt att ladda ner konkreta exempel i Revit (.rvt) och Archicad (.pln) för varje projekteringsfas.

---

## 🚀 Funktioner

- 📁 Nedladdningsbara exempel: Fasadkompositioner, detaljer, mallar
- 📊 Fasersystem: Förstudie, Systemhandling, Bygghandling, m.m.
- 👩‍🎓 Studentläge med obegränsad tillgång
- 🔐 Freemium-modell (5 nedladdningar/dag för ej inloggade)
- 🌙 Fullt stöd för mörkt/ljust läge (HSL-baserat)
- 🎨 Designad med TailwindCSS och Shadcn/UI-principer

---

## 🧰 Teknisk stack

- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- HSL-färgsystem (Dark/Light mode)
- Semantiska färgvariabler: `--primary`, `--background`, `--secondary`, `--accent`, `--destructive`

---

## 📦 Kom igång

1. Klona eller ladda ner projektet  
2. Installera beroenden:

```bash
npm install
```

3. Starta utvecklingsservern:

```bash
npm run dev
```

4. Öppna `http://localhost:5173` i din webbläsare

---

## 📁 Struktur

```
arkitekt30-mockup/
├── index.html
├── tailwind.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

---

## 🧪 Att tänka på

- Inloggning och studentregistrering är simulerad (state-baserad)
- Nedladdningar visas som popup-meddelanden för demoändamål
- Du kan enkelt koppla in Firebase/Auth0/Stripe för full funktionalitet

---

## 📬 Kontakt / Samarbete

Vill du bidra eller föreslå förbättringar? Hör av dig!  
> © 2025 Arkitekt 3.0 Digital. Alla rättigheter reserverade.

