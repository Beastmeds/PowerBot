# PowerBot — Website

Kleine statische Website für den WhatsApp Bot "PowerBot", mit den Seiten/Abschnitten:
- Home
- Premium
- Team
- About
- Kontakt
- Gruppen
- DSGVO

## Lokales Hosting
Du kannst die Datei `index.html` direkt im Browser öffnen oder einen lokalen Server starten (empfohlen für relative Pfade):

PowerShell (Python):

```powershell
# mit Python 3
py -3 -m http.server 8000
# dann im Browser öffnen: http://localhost:8000/
```

oder mit Node.js (http-server):

```powershell
npm install -g http-server; http-server -p 8000
```
oder lokal per npm (Projektabhängigkeit):

```powershell
npm install
npm run start
```

## Anpassen
- Text in `index.html` anpassen
- Farben & Styling in `css/style.css` ändern
- Bilder und Logos im `assets`-Ordner ersetzen

## DSGVO & Datenschutz
Die Datenschutztexte sind allgemeine Vorlagen. Bitte lass sie von einer zuständigen Rechtsstelle prüfen und ggf. anpassen.

## Deployment
- GitHub Pages: Repository pushen und GitHub Pages aktivieren oder den `website`-Ordner als Source angeben.
- Netlify, Vercel oder andere Static-Hosts sind ebenfalls möglich.

## Nächste Schritte / Verbesserungen
- Formular-Backend (Formspree, Netlify Forms, Serverless-Function) einrichten
- Professionelle Bilder & reales Logo nutzen
- Integration der WhatsApp Business API für Demo-Accounts
- Erweiterte DSGVO- und Cookie-Management-Funktionen

## Preise (PowerBot Premium)
- 7 Tage — 1€
- 14 Tage — 2€
- 1 Monat — 4€
- 3 Monate — 10€
- 6 Monate — 22€
- 1 Jahr — 44€

Das Zahlungssystem ist in Bearbeitung; derzeit ist die Bezahlung über die Seite deaktiviert. Bitte kontaktiere uns per `Kontakt` oder schreibe uns via WhatsApp, um ein individuelles Angebot zu erhalten.

## Befehle
Eine Übersicht über alle Bot-Befehle findest du jetzt im Ordner `commands` (Seite: `/commands/index.html`). Die Seiten erklären Verwendung, Beispiele und die nötigen Rechte.

## Design & Branding
- Die Seite hat ein überarbeitetes hell/dunkles Theme, modernere Typografie, CTA-Buttons und Feature-Card-Layouts.
- Du kannst Farben in `css/style.css` unter den CSS-Variablen (`--accent`, `--muted`) anpassen.
- Wenn du ein Branding-Bild oder Logo ersetzen möchtest, ändere `assets/logo.svg` und die Avatare in `assets/`.

## Animierter Hintergrund
- Die Website verwendet jetzt einen animierten Hintergrund mit einem rot → orange → gelb Farbverlauf.
- Du kannst die Farben ändern im `css/style.css` unter den Variablen `--gradient-1`, `--gradient-2`, `--gradient-3`.
- Die Animationsdauer und -geschwindigkeit lassen sich anpassen via `@keyframes gradientShift` oder `animation: gradientShift 22s linear infinite;` (ändere `22s` für kürzere/längere Zyklen).
- Für Benutzer mit "prefers-reduced-motion" wird die Animation deaktiviert, um Barrierefreiheit zu gewährleisten.

## Cookie Banner — Akzeptanz testen
- Klicke auf den `OK`-Button im Cookie-Banner → das Banner sollte verschwinden und `localStorage`-Eintrag `powerbot_cookie_ok` auf `'1'` gesetzt werden.
- Wenn du den DSGVO-Link öffnest (z. B. `dsgvo.html`), wird ebenfalls die Zustimmung gesetzt (sofern du `?acceptCookies=1` verwendest oder den DSGVO-Button klickst).
- Überprüfe den Zustand mit DevTools: `localStorage.getItem('powerbot_cookie_ok')` sollte `'1'` sein.

## Navigation & Seiten
Die Navigation wurde als klassische Seitenstruktur umgesetzt — wenn du auf einen Menüeintrag oder einen Button klickst, öffnet sich eine separate HTML-Seite (z. B. `premium.html`, `team.html`), statt auf der gleichen Seite nach unten zu scrollen.

Beachte: Das Klicken auf das DSGVO-Element oder den DSGVO-Link akzeptiert automatisch die Cookies (das setzt lokalen Storage `powerbot_cookie_ok = 1`), sodass das Cookie-Banner verschwindet. Das gilt auch, wenn du den DSGVO-Link in einem neuen Tab öffnest (`?acceptCookies=1` wird als Parameter verwendet).

Falls du lieber die ursprüngliche Single-Page-Scroll-Navigation möchtest, kann ich die Links wieder auf interne Anker zurücksetzen und ein sanftes Scrollverhalten anpassen.

Viel Erfolg mit dem Projekt — bei Wunsch kann ich eine React/Next.js Version oder ein Live-Demo-Backend erstellen.
