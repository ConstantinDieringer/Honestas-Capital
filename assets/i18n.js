/* ══════════ Sprache: Deutsch ⇄ Englisch ══════════
   Deutsch steht im HTML. Dieses Skript tauscht Texte und Attribute anhand des Wörterbuchs aus.
   Wahl wird im Browser gemerkt; ?lang=en bzw. ?lang=de im Link setzt sie direkt. */
(function () {
  'use strict';
  var EN = {
    // Kopf & allgemein
    'honestas.capital — Startseite': 'honestas.capital — Home',
    'Hauptnavigation': 'Main navigation',
    'Kontakt': 'Contact',
    'Kontakt aufnehmen': 'Get in touch',
    'Menü öffnen': 'Open menu',
    'Menü schließen': 'Close menu',
    'Sprache wählen': 'Choose language',
    'Deutsch': 'German',
    'Englisch': 'English',
    // Hero
    'Software für die': 'Software for',
    'Fertigung.': 'manufacturing.',
    'Kapital und Erfahrung für B2B-Software in der Industrie.': 'Capital and experience for B2B software in industry.',
    'Business Angel · seit 2017': 'Business angel · since 2017',
    'Vom Startup': 'From startup',
    'Als Business Angel beteiligen wir uns an jungen B2B-Software-Unternehmen für die': 'As business angels, we invest in young B2B software companies for',
    'Fertigung': 'manufacturing',
    '— mit Kapital, Erfahrung und Netzwerk.': '— with capital, experience and network.',
    'zum Marktführer.': 'to market leader.',
    'Wir investieren': 'We invest',
    'Startups.': 'startups.',
    'Als Business Angel beteiligen wir uns an jungen B2B-Software-Unternehmen für die Fertigung — mit Kapital, Erfahrung und Netzwerk.': 'As business angels, we invest in young B2B software companies for manufacturing — with capital, experience and network.',
    '30–300k €': '€30–300k',
    'pro Beteiligung': 'per investment',
    'Beteiligungen im Portfolio': 'investments in our portfolio',
    'Pre-Seed bis Later Stage': 'Pre-seed to later stage',
    'in jeder Phase': 'at every stage',
    'Rotierende Getriebewelle aus goldenen Punkten': 'Rotating gear shaft made of golden dots',
    // Kennzahlen
    'In Zahlen': 'In numbers',
    'Jahre Beteiligungserfahrung': 'Years of investment experience',
    'seit Gründung 2017': 'since our founding in 2017',
    'Aktive Beteiligungen': 'Active investments',
    'überwiegend Industrie-Software': 'mostly industrial software',
    'davon Software für die Fertigung': 'of which software for manufacturing',
    'Engineering, Einkauf, Produktion, Energie': 'Engineering, procurement, production, energy',
    'Jahre M&A-Erfahrung': 'Years of M&A experience',
    'von der Vorbereitung bis zum Exit': 'from preparation to exit',
    'Euro Ticketgröße': 'Euro ticket size',
    'pro Beteiligung, mit Co-Investoren auch mehr': 'per investment, more with co-investors',
    'Kennzahl wählen': 'Choose a figure',
    'Kennzahl 1': 'Figure 1', 'Kennzahl 2': 'Figure 2', 'Kennzahl 3': 'Figure 3', 'Kennzahl 4': 'Figure 4', 'Kennzahl 5': 'Figure 5',
    '9 Jahre Beteiligungserfahrung, seit Gründung 2017': '9 years of investment experience, since our founding in 2017',
    '8 aktive Beteiligungen, überwiegend Industrie-Software': '8 active investments, mostly industrial software',
    '5 davon Software für die Fertigung': '5 of them software for manufacturing',
    '15 Jahre M&A-Erfahrung': '15 years of M&A experience',
    '30.000 bis 300.000 Euro Ticketgröße pro Beteiligung': '€30,000 to €300,000 ticket size per investment',
    // Fokus
    'Fokus': 'Focus',
    'Wo wir investieren': 'Where we invest',
    'B2B-Software, die in produzierenden Unternehmen arbeitet. Dort haben wir die meiste Erfahrung und das dichteste Netzwerk.': 'B2B software that works inside manufacturing companies. That is where we have the most experience and the densest network.',
    'Engineering & Konstruktion': 'Engineering & Design',
    'CAD, PLM und Produktentwicklung — Software, die Konstruktion und Fertigung enger zusammenbringt.': 'CAD, PLM and product development — software that brings design and manufacturing closer together.',
    'Im Portfolio': 'In our portfolio',
    'Einkauf & Supply Chain': 'Procurement & Supply Chain',
    'Spend Analytics, Sourcing und Lieferantenmanagement für den industriellen Mittelstand.': 'Spend analytics, sourcing and supplier management for industrial mid-sized companies.',
    'Produktion & Shopfloor': 'Production & Shop Floor',
    'Digitale Prozesse für Produktion, Montage und Shopfloor — dort, wo die Wertschöpfung passiert.': 'Digital processes for production, assembly and the shop floor — where value is created.',
    'Kosten & Nachhaltigkeit': 'Cost & Sustainability',
    'Kalkulations-, Kosten- und CO₂-Daten, mit denen R&D und Einkauf bessere Entscheidungen treffen.': 'Costing, cost and CO₂ data that help R&D and procurement make better decisions.',
    'Energie & Betriebskosten': 'Energy & Operating Costs',
    'Software, die Energieeinkauf und Betriebskosten in der Industrie planbar macht.': 'Software that makes energy procurement and operating costs in industry predictable.',
    'Immobilien': 'Real Estate',
    'Neben Software beteiligen wir uns an ausgewählten, nachhaltigen Immobilienprojekten.': 'Alongside software, we invest in selected, sustainable real estate projects.',
    // Unser Beitrag
    'Unser Beitrag': 'What we bring',
    'Kapital allein macht kein Unternehmen groß.': 'Capital alone doesn’t build a great company.',
    'Kapital': 'Capital',
    'Erfahrung': 'Experience',
    'Netzwerk': 'Network',
    '30.000 bis 300.000 Euro pro Beteiligung, in jeder Phase. Größere Runden stemmen wir gemeinsam mit befreundeten Business Angels.': '€30,000 to €300,000 per investment, at any stage. Larger rounds we handle together with business angels we know and trust.',
    'Operative Hilfe in Vertrieb, Marketing, Produkt und Strategie — dazu 15 Jahre M&A-Erfahrung für die nächste Finanzierungsrunde.': 'Hands-on support in sales, marketing, product and strategy — plus 15 years of M&A experience for your next funding round.',
    'Zugang zu Industriekunden, Co-Investoren, Partnern und Talenten — über Jahre in der Fertigungsbranche aufgebaut.': 'Access to industrial customers, co-investors, partners and talent — built up over years in the manufacturing industry.',
    // Ablauf
    'Ablauf': 'Process',
    'In fünf Schritten zur Beteiligung': 'Five steps to an investment',
    'Transparent von Anfang an — jeder Schritt zeigt, was von dir und was von uns kommt.': 'Transparent from the start — each step shows what comes from you and what comes from us.',
    'Schritt 01': 'Step 01', 'Schritt 02': 'Step 02', 'Schritt 03': 'Step 03', 'Schritt 04': 'Step 04', 'Schritt 05': 'Step 05',
    'Pitch einreichen': 'Submit your pitch',
    'Schick uns eine kompakte Unterlage: Produkt, Markt, Team, aktuelle Zahlen und wofür das Kapital gedacht ist. Die wichtigste Frage vorab: Wo berührt dein Produkt die Fertigung?': 'Send us a concise deck: product, market, team, current figures and what the capital is for. The most important question up front: where does your product touch manufacturing?',
    'Person arbeitet am Laptop an einer Unterlage': 'Person working on a document on a laptop',
    'Erstgespräch': 'First meeting',
    'Ein persönliches Gespräch, in dem beide Seiten prüfen, ob es passt. Wir erklären offen, wie wir arbeiten — und wo wir nicht der richtige Partner sind.': 'A personal conversation in which both sides check whether it’s a fit. We’re open about how we work — and where we’re not the right partner.',
    'Zwei Personen im Gespräch am Tisch': 'Two people talking at a table',
    'Wir schauen genau hin: Team, Geschäftsmodell, Markt, Produkt, Zahlen, rechtliche Struktur. Am schwersten wiegt das Team — die Menschen entscheiden, ob Markt und Produkt gelingen.': 'We take a close look: team, business model, market, product, numbers, legal structure. The team carries the most weight — people decide whether market and product succeed.',
    'Analyse von Unterlagen und Zahlen am Schreibtisch': 'Analysing documents and figures at a desk',
    'Term Sheet & Beteiligung': 'Term sheet & investment',
    'Konditionen klar auf dem Tisch, Beteiligungs- und Syndikatsvertrag, Notartermin, Closing. Bei größeren Runden koordinieren wir weitere Angels — du hast trotzdem nur einen Ansprechpartner.': 'Clear terms on the table, investment and syndicate agreement, notary appointment, closing. For larger rounds we coordinate additional angels — you still have just one point of contact.',
    'Unterschrift auf einem Vertrag': 'Signing a contract',
    'Gemeinsam wachsen': 'Growing together',
    'Ab hier beginnt die eigentliche Arbeit: Unterstützung in Vertrieb, Marketing, Produkt und Strategie, Zugang zu unserem Netzwerk — und die Vorbereitung auf die nächste Runde. Bis hin zum Exit.': 'This is where the real work begins: support in sales, marketing, product and strategy, access to our network — and preparation for the next round. All the way to exit.',
    'Team arbeitet gemeinsam an Laptops': 'Team working together on laptops',
    // Portfolio
    'Beteiligungen': 'Investments',
    'Acht Beteiligungen, überwiegend Software für die Fertigung. Klick auf ein Logo für mehr Infos.': 'Eight investments, mostly software for manufacturing. Click a logo for more details.',
    'Simplifier – mehr Infos': 'Simplifier – more details',
    'tacto – mehr Infos': 'tacto – more details',
    'Assemblio – mehr Infos': 'Assemblio – more details',
    'tset – mehr Infos': 'tset – more details',
    'ENIO – mehr Infos': 'ENIO – more details',
    'onu.energy – mehr Infos': 'onu.energy – more details',
    'Intershop Communications – mehr Infos': 'Intershop Communications – more details',
    'MEDICENT Baden – mehr Infos': 'MEDICENT Baden – more details',
    'Details zur Beteiligung': 'Investment details',
    'Website besuchen': 'Visit website',
    'Details schließen': 'Close details',
    'Deutschland': 'Germany',
    'Wien, AT': 'Vienna, AT',
    'Österreich': 'Austria',
    'Produktion & Prozesse': 'Production & Processes',
    'Börsennotiert': 'Listed',
    'Führender Low-Code-Anbieter, der Unternehmen bei der Digitalisierung ihrer Prozesse unterstützt.': 'Leading low-code provider that helps companies digitalise their processes.',
    'SaaS-Einkaufsbetriebssystem für den Mittelstand — Spend Analytics, Lieferantenmanagement, Sourcing und Abbildung des Lieferkettengesetzes.': 'SaaS procurement operating system for mid-sized companies — spend analytics, supplier management, sourcing and supply chain act compliance.',
    'Erzeugt mit KI aus CAD-Daten in Minuten digitale Montageanweisungen und automatisierte Stücklisten — und verbindet so Engineering und Produktion.': 'Uses AI to turn CAD data into digital assembly instructions and automated bills of materials within minutes — connecting engineering and production.',
    'Revolutioniert Produktkostenberechnung und Carbon-Footprint-Kalkulation mit intelligenten Algorithmen — für effizientere R&D- und Einkaufsprozesse.': 'Transforms product cost and carbon footprint calculation with intelligent algorithms — for more efficient R&D and procurement processes.',
    'eMobility-Software mit Beteiligung der Deutschen Telekom: Backend für Verwaltung, Monitoring und Verrechnung von Ladestationen.': 'eMobility software with Deutsche Telekom as a shareholder: back end for managing, monitoring and billing charging stations.',
    'SaaS-Lösung, die den Energieeinkauf im Mittelstand neu denkt — niedrigere und vor allem planbare Energiekosten.': 'SaaS solution that rethinks energy procurement for mid-sized companies — lower and, above all, predictable energy costs.',
    'Börsennotiertes deutsches Unternehmen, das als Erfinder des eCommerce gilt.': 'Listed German company regarded as the inventor of e-commerce.',
    'Ärztezentrum mit über 3.000 m² und mehr als 40 Ärzt:innen — mit eigenem OP inklusive Eingriffs- und Aufwachraum, 24/7 buchbar.': 'Medical centre with more than 3,000 m² and over 40 doctors — with its own operating theatre including procedure and recovery rooms, bookable 24/7.',
    // Co-Investment
    'Meistens allein. Wenn nötig,': 'Usually alone. When needed,',
    'zu mehreren': 'together',
    'Bei den meisten Beteiligungen steigen wir allein ein. Braucht ein Vorhaben mehr, holen wir befreundete Business Angels dazu — mit mehr Kapital und mehr Know-how.': 'We make most investments on our own. If a venture needs more, we bring in business angels we know — with more capital and more know-how.',
    'Szenario wählen': 'Choose a scenario',
    'Der Regelfall': 'The usual case',
    'Größere Runde': 'Larger round',
    'Ansprechpartner': 'Points of contact',
    '30.000–300.000 €': '€30,000–300,000',
    'Größere Beträge': 'Larger amounts',
    '+ weitere Business Angels': '+ additional business angels',
    'Co-Investment besprechen': 'Discuss co-investment',
    'Honestas Capital ist der eine Ansprechpartner deines Unternehmens; bei größeren Runden kommen befreundete Business Angels über Honestas dazu.': 'Honestas Capital is your company’s single point of contact; for larger rounds, business angels we know join through Honestas.',
    'Dein': 'Your',
    'Unternehmen': 'Company',
    'Eine Entscheidung, ein Ansprechpartner, kurze Wege.': 'One decision, one point of contact, short paths.',
    'Mehr Kapital und Know-how — und trotzdem nur ein Ansprechpartner.': 'More capital and know-how — and still just one point of contact.',
    // Team
    'Ein starkes Team': 'A strong team',
    'Porträt von Claudia Dieringer': 'Portrait of Claudia Dieringer',
    'Porträt von Thomas Dieringer': 'Portrait of Thomas Dieringer',
    'Geschäftsführerin': 'Managing Director',
    'Geschäftsführer': 'Managing Director',
    'LinkedIn-Profil': 'LinkedIn profile',
    // Kontakt
    'Erzähl uns von deiner Idee.': 'Tell us about your idea.',
    'Wir suchen Software-Unternehmen, deren Produkte in produzierenden Unternehmen arbeiten, und nachhaltige Immobilienprojekte — dazu Business Angels, mit denen sich größere Runden stemmen lassen. Schreib uns, wir melden uns persönlich zurück.': 'We’re looking for software companies whose products work inside manufacturing companies, and for sustainable real estate projects — plus business angels to help shoulder larger rounds. Write to us and we’ll get back to you personally.',
    '1120 Wien, Österreich': '1120 Vienna, Austria',
    'Vor- und Nachname': 'First and last name',
    'E-Mail': 'Email',
    'name@unternehmen.com': 'name@company.com',
    'Firmenname': 'Company name',
    'Sektor': 'Sector',
    'Software für produzierende Unternehmen': 'Software for manufacturing companies',
    'Andere B2B-Software': 'Other B2B software',
    'Immobilienprojekt': 'Real estate project',
    'Co-Investment-Anfrage': 'Co-investment inquiry',
    'Worum geht es?': 'What is it about?',
    'Kurz zu Produkt, Markt, Team und aktuellem Stand …': 'Briefly: product, market, team and current status …',
    'Pitch Deck anhängen — [UPLOAD-FELD ANBINDEN]': 'Attach pitch deck — [CONNECT UPLOAD FIELD]',
    'Absenden': 'Send',
    'Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß': 'By sending, you agree to the processing of your data in accordance with our',
    'Datenschutzerklärung': 'Privacy Policy',
    'zu.': '.',
    'Anfrage über die Website': 'Inquiry via the website',
    // FAQ
    'Häufige Fragen': 'Frequently asked questions',
    'Deine Frage ist nicht dabei?': 'Can’t find your question?',
    'Schreib uns direkt.': 'Write to us directly.',
    'In welche Unternehmen investiert ihr?': 'What kind of companies do you invest in?',
    'In B2B-Software, deren Produkte in produzierenden Unternehmen arbeiten — in Engineering, Einkauf, Produktion, Kalkulation und Energie. Dazu kommen ausgewählte, nachhaltige Immobilienprojekte.': 'In B2B software whose products work inside manufacturing companies — in engineering, procurement, production, costing and energy. In addition, we invest in selected, sustainable real estate projects.',
    'Wie hoch ist ein typisches Investment?': 'How large is a typical investment?',
    'Typischerweise 30.000 bis 300.000 Euro pro Beteiligung. Für größere Beträge holen wir befreundete Business Angels dazu.': 'Typically €30,000 to €300,000 per investment. For larger amounts, we bring in business angels we know.',
    'In welcher Phase steigt ihr ein?': 'At what stage do you invest?',
    'In jeder Entwicklungsstufe — von der frühen Phase bis zum etablierten Unternehmen. Entscheidend ist, ob wir mehr beitragen können als Kapital.': 'At any stage — from early phase to established company. What matters is whether we can contribute more than capital.',
    'Was bekomme ich außer Kapital?': 'What do I get besides capital?',
    'Operative Unterstützung in Vertrieb, Marketing, Produkt und Strategie, Zugang zu unserem Netzwerk in der Fertigungsbranche und die Vorbereitung auf die nächste Finanzierungsrunde.': 'Hands-on support in sales, marketing, product and strategy, access to our network in the manufacturing industry, and preparation for the next funding round.',
    'Investiert ihr auch in B2C oder Consumer-Apps?': 'Do you also invest in B2C or consumer apps?',
    'Nein. Dort fehlt uns das Netzwerk, mit dem wir wirklich helfen könnten — und dann wären wir nur Geldgeber.': 'No. We lack the network there to genuinely help — and then we would just be providers of money.',
    'Wie läuft der Prozess ab?': 'What does the process look like?',
    'Pitch einreichen, Erstgespräch, Due Diligence, Term Sheet und Beteiligung — danach wachsen wir gemeinsam. Die Details findest du oben im Ablauf.': 'Submit your pitch, first meeting, due diligence, term sheet and investment — after that, we grow together. You’ll find the details in the process section above.',
    'Investiert ihr allein oder mit anderen?': 'Do you invest alone or with others?',
    'Meistens allein: eine Entscheidung, ein Ansprechpartner. Bei größeren Runden koordinieren wir befreundete Business Angels — du hast trotzdem nur einen Ansprechpartner.': 'Usually alone: one decision, one point of contact. For larger rounds we coordinate business angels we know — you still have just one point of contact.',
    'Wie schnell bekomme ich eine Antwort?': 'How quickly will I get an answer?',
    'Wir melden uns persönlich zurück. Eine Absage kommt bei uns schnell und mit Begründung — das ist für beide Seiten besser als ein höflicher Prozess ohne Ergebnis.': 'We get back to you personally. If it’s a no, you’ll hear it quickly and with reasons — better for both sides than a polite process without a result.',
    'Wo sitzt ihr?': 'Where are you based?',
    'In Wien. Am meisten beitragen können wir bei Unternehmen in Österreich und Deutschland.': 'In Vienna. We can contribute the most to companies in Austria and Germany.',
    // Fußzeile
    '© 2026 Honestas Capital Beteiligungs GmbH · Wien': '© 2026 Honestas Capital Beteiligungs GmbH · Vienna',
    'Impressum': 'Legal notice',
    'Datenschutz': 'Privacy',
    'Nach oben': 'Back to top',
    // Impressum
    'Impressum — honestas.capital': 'Legal notice — honestas.capital',
    'Impressum und Offenlegung der Honestas Capital Beteiligungs GmbH.': 'Legal notice and disclosure of Honestas Capital Beteiligungs GmbH.',
    'Zur Startseite': 'Back to home',
    'Offenlegung und Angaben zur Honestas Capital Beteiligungs GmbH.': 'Disclosure and information about Honestas Capital Beteiligungs GmbH.',
    'Angaben gemäß § 5 ECG, § 14 UGB und § 25 MedienG': 'Information pursuant to § 5 ECG, § 14 UGB and § 25 MedienG (Austria)',
    'Medieninhaberin und Herausgeberin': 'Media owner and publisher',
    'Anschrift': 'Address',
    'Telefon': 'Phone',
    'Geschäftsführung': 'Management',
    'Unternehmensgegenstand': 'Business purpose',
    'Beteiligung an Unternehmen': 'Investments in companies',
    '[bitte prüfen]': '[please check]',
    'Rechtsform': 'Legal form',
    'Gesellschaft mit beschränkter Haftung': 'Limited liability company (GmbH)',
    'Firmenbuchnummer': 'Company register number',
    '[FN ergänzen]': '[add FN]',
    'Firmenbuchgericht': 'Register court',
    'Handelsgericht Wien': 'Commercial Court of Vienna',
    'UID-Nummer': 'VAT ID',
    '[UID ergänzen]': '[add VAT ID]',
    'Kammerzugehörigkeit': 'Chamber membership',
    'Wirtschaftskammer Wien': 'Vienna Economic Chamber',
    'Grundlegende Richtung der Website': 'Purpose of this website',
    'Information über die Beteiligungstätigkeit der Honestas Capital Beteiligungs GmbH, ihren Investitionsfokus und ihr Portfolio sowie Möglichkeit zur Kontaktaufnahme für Gründer:innen, Unternehmen und Co-Investoren.': 'Information about the investment activities of Honestas Capital Beteiligungs GmbH, its investment focus and portfolio, and a way for founders, companies and co-investors to get in touch.',
    'Haftung für Inhalte': 'Liability for content',
    'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Die Informationen stellen kein Angebot und keine Anlageberatung dar.': 'The content of this website has been prepared with the greatest possible care. However, we accept no liability for the accuracy, completeness or timeliness of the content. The information does not constitute an offer or investment advice.',
    'Haftung für Links': 'Liability for links',
    'Unsere Website enthält Links zu externen Websites, etwa zu unseren Portfoliounternehmen. Auf deren Inhalte haben wir keinen Einfluss; für sie ist der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Werden uns Rechtsverletzungen bekannt, entfernen wir die betreffenden Links umgehend.': 'Our website contains links to external websites, for example to our portfolio companies. We have no influence on their content; the respective provider is responsible for it. No legal violations were apparent at the time of linking. If we become aware of any infringements, we will remove the links concerned immediately.',
    'Urheberrecht und Bildnachweise': 'Copyright and image credits',
    'Texte und Gestaltung dieser Website unterliegen dem Urheberrecht. Die Logos der Portfoliounternehmen sind Marken bzw. Werke der jeweiligen Inhaber und werden mit deren Einverständnis gezeigt': 'The texts and design of this website are protected by copyright. The logos of the portfolio companies are trademarks or works of their respective owners and are shown with their consent',
    'Fotos:': 'Photos:',
    '(Unsplash-Lizenz). Porträtfotos: Honestas Capital.': '(Unsplash licence). Portrait photos: Honestas Capital.',
    'Hinweis: Die mit eckigen Klammern markierten Angaben bitte ergänzen bzw. prüfen. Wir empfehlen, Impressum und Datenschutzerklärung vor der Veröffentlichung rechtlich prüfen zu lassen.': 'Note: please complete or check the details marked in square brackets. We recommend having the legal notice and privacy policy reviewed by a lawyer before publication.',
    // Datenschutz
    'Datenschutz — honestas.capital': 'Privacy — honestas.capital',
    'Datenschutzerklärung der Honestas Capital Beteiligungs GmbH.': 'Privacy policy of Honestas Capital Beteiligungs GmbH.',
    'Stand: Oktober 2026': 'As of October 2026 · The German version is legally binding.',
    '1. Verantwortlicher': '1. Controller',
    'Honestas Capital Beteiligungs GmbH, Wagenseilgasse 5, 1120 Wien, Österreich': 'Honestas Capital Beteiligungs GmbH, Wagenseilgasse 5, 1120 Vienna, Austria',
    'E-Mail:': 'Email:',
    '· Telefon:': '· Phone:',
    '2. Allgemeines': '2. General',
    'Der Schutz deiner personenbezogenen Daten ist uns wichtig. Wir verarbeiten Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG). In dieser Erklärung informieren wir dich, welche Daten beim Besuch dieser Website verarbeitet werden.': 'Protecting your personal data is important to us. We process data exclusively on the basis of the statutory provisions, in particular the General Data Protection Regulation (GDPR) and the Austrian Data Protection Act (DSG). This policy explains which data is processed when you visit this website.',
    '3. Hosting und Server-Logfiles': '3. Hosting and server log files',
    'Diese Website wird bei': 'This website is hosted by',
    '[Hosting-Anbieter ergänzen]': '[add hosting provider]',
    'betrieben. Beim Aufruf der Website werden durch den Webserver technisch notwendige Daten verarbeitet, etwa IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browser und Betriebssystem. Diese Daten dienen dem sicheren und stabilen Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO) und werden nach': '. When you visit the website, the web server processes technically necessary data such as IP address, date and time of access, page requested, browser and operating system. This data serves the secure and stable operation of the website (Art. 6(1)(f) GDPR) and is deleted after',
    '[Speicherdauer ergänzen]': '[add retention period]',
    'gelöscht.': '.',
    '4. Kontaktaufnahme': '4. Contacting us',
    'Wenn du uns per E-Mail oder Telefon kontaktierst, verarbeiten wir die von dir übermittelten Daten (z. B. Name, E-Mail-Adresse, Unternehmen, Inhalt der Anfrage), um deine Anfrage zu bearbeiten (Art. 6 Abs. 1 lit. b und f DSGVO).': 'If you contact us by email or phone, we process the data you provide (e.g. name, email address, company, content of your inquiry) in order to handle your inquiry (Art. 6(1)(b) and (f) GDPR).',
    'Das Kontaktformular auf unserer Website überträgt keine Daten an einen Server: Beim Absenden öffnet sich dein E-Mail-Programm mit einer vorbereiteten Nachricht an uns. Erst wenn du diese E-Mail selbst abschickst, erhalten wir deine Angaben.': 'The contact form on our website does not transmit any data to a server: when you submit it, your email program opens with a prepared message to us. We only receive your details once you send that email yourself.',
    'Wir speichern Anfragen so lange, wie es zur Bearbeitung und für eine mögliche Zusammenarbeit erforderlich ist, bzw. solange gesetzliche Aufbewahrungspflichten bestehen.': 'We store inquiries for as long as is necessary to handle them and for a possible collaboration, or as long as statutory retention obligations apply.',
    '5. Cookies und Tracking': '5. Cookies and tracking',
    'Diese Website verwendet keine Cookies, keine Analyse- oder Tracking-Werkzeuge und keine Social-Media-Plugins.': 'This website uses no cookies, no analytics or tracking tools and no social media plugins. Your language choice is stored locally in your browser only.',
    '6. Externe Inhalte': '6. External content',
    'Zur einheitlichen Darstellung der Schrift binden wir „Inter“ über Google Fonts ein (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Dabei wird deine IP-Adresse an Google übermittelt; eine Übermittlung in die USA kann nicht ausgeschlossen werden. Rechtsgrundlage ist unser berechtigtes Interesse an einer einheitlichen Darstellung (Art. 6 Abs. 1 lit. f DSGVO).': 'For consistent typography we load the “Inter” font via Google Fonts (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland). In doing so, your IP address is transmitted to Google; a transfer to the USA cannot be ruled out. The legal basis is our legitimate interest in a consistent presentation (Art. 6(1)(f) GDPR).',
    '[Empfehlung: Schrift lokal einbinden, dann entfällt dieser Abschnitt]': '[Recommendation: host the font locally, then this section can be removed]',
    'Bilder von Unsplash': 'Images from Unsplash',
    'Einige Fotos werden direkt von den Servern von Unsplash (Unsplash Inc., USA) geladen. Dabei wird deine IP-Adresse an Unsplash übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.': 'Some photos are loaded directly from the servers of Unsplash (Unsplash Inc., USA). In doing so, your IP address is transmitted to Unsplash. The legal basis is Art. 6(1)(f) GDPR.',
    '[Empfehlung: Bilder lokal speichern, dann entfällt dieser Abschnitt]': '[Recommendation: store the images locally, then this section can be removed]',
    'Links zu anderen Websites': 'Links to other websites',
    'Links zu LinkedIn oder zu den Websites unserer Portfoliounternehmen sind einfache Verweise. Erst wenn du einen Link anklickst, werden Daten an den jeweiligen Anbieter übertragen; dort gelten dessen Datenschutzbestimmungen.': 'Links to LinkedIn or to the websites of our portfolio companies are simple links. Data is only transmitted to the respective provider once you click a link; their privacy policy then applies.',
    '7. Deine Rechte': '7. Your rights',
    'Dir stehen grundsätzlich folgende Rechte zu:': 'In principle, you have the following rights:',
    'Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)': 'Access to the data stored about you (Art. 15 GDPR)',
    'Berichtigung unrichtiger Daten (Art. 16 DSGVO)': 'Rectification of inaccurate data (Art. 16 GDPR)',
    'Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)': 'Erasure (Art. 17 GDPR) and restriction of processing (Art. 18 GDPR)',
    'Datenübertragbarkeit (Art. 20 DSGVO)': 'Data portability (Art. 20 GDPR)',
    'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)': 'Objection to processing (Art. 21 GDPR)',
    'Für die Ausübung deiner Rechte genügt eine E-Mail an': 'To exercise your rights, simply send an email to',
    '8. Beschwerderecht': '8. Right to lodge a complaint',
    'Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt, kannst du dich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde, Barichgasse 40–42, 1030 Wien,': 'If you believe that the processing of your data violates data protection law, you can lodge a complaint with the supervisory authority. In Austria, this is the Data Protection Authority (Datenschutzbehörde), Barichgasse 40–42, 1030 Vienna,',
    'Hinweis: Diese Datenschutzerklärung ist auf den aktuellen Stand der Website zugeschnitten. Die markierten Stellen bitte ergänzen und den Text vor der Veröffentlichung rechtlich prüfen lassen.': 'Note: this privacy policy is tailored to the current state of the website. Please complete the marked passages and have the text reviewed by a lawyer before publication.'
  };

  var DE = {};
  Object.keys(EN).forEach(function (k) { if (!(EN[k] in DE)) DE[EN[k]] = k; });
  var ATTRS = ['aria-label', 'alt', 'placeholder', 'title', 'content'];
  var norm = function (t) { return t.replace(/\s+/g, ' ').trim(); };

  var lang = 'de';
  try {
    var q = (location.search.match(/[?&]lang=(de|en)\b/) || [])[1];
    lang = q || localStorage.getItem('hc-lang') || 'de';
  } catch (e) {}

  // Übersetzt einen deutschen Text (für Skripte, die Texte selbst setzen)
  window.hcT = function (t) { return lang === 'en' && EN[t] ? EN[t] : t; };
  window.hcLang = function () { return lang; };

  function swap(t) {
    var k = norm(t);
    if (!k) return null;
    var v = lang === 'en' ? EN[k] : DE[k];
    if (!v) return null;
    var lead = /^\s/.test(t) ? ' ' : '', tail = /\s$/.test(t) ? ' ' : '';
    return lead + v + tail;
  }

  // Beim Wechsel nach Englisch merkt sich jeder Knoten seinen deutschen Originaltext;
  // zurück auf Deutsch wird dieser wiederhergestellt (eindeutig, auch wenn zwei Texte gleich übersetzt sind).
  function translate(cur, store, key) {
    if (lang === 'en') {
      var r = swap(cur);
      if (r === null || r === cur) return null;
      store[key] = { de: cur, en: r };
      return r;
    }
    var s = store[key];
    if (s && s.en === cur) { delete store[key]; return s.de; }
    return swap(cur);
  }

  function apply(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.nodeName;
        return p === 'SCRIPT' || p === 'STYLE' ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var n, r;
    while ((n = w.nextNode())) {
      n.__hc = n.__hc || {};
      r = translate(n.nodeValue, n.__hc, 't');
      if (r !== null && r !== n.nodeValue) n.nodeValue = r;
    }
    var els = root.querySelectorAll('[aria-label],[alt],[placeholder],[title],meta[name="description"]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      el.__hc = el.__hc || {};
      for (var j = 0; j < ATTRS.length; j++) {
        var a = ATTRS[j], val = el.getAttribute(a);
        if (val && (r = translate(val, el.__hc, a)) !== null) el.setAttribute(a, r);
      }
    }
  }
  var titleStore = {};

  function setLang(l, save) {
    lang = l === 'en' ? 'en' : 'de';
    document.documentElement.lang = lang;
    apply(document.body);
    apply(document.head);
    var dt = translate(document.title, titleStore, 'title'); if (dt) document.title = dt;
    var btns = document.querySelectorAll('.hc-lang button');
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-lang') === lang ? 'true' : 'false');
    if (save) { try { localStorage.setItem('hc-lang', lang); } catch (e) {} }
    document.dispatchEvent(new CustomEvent('hc:lang', { detail: lang }));
  }
  window.hcSetLang = setLang;

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.hc-lang button');
    if (b) setLang(b.getAttribute('data-lang'), true);
  });
  if (lang === 'en') setLang('en', false);
})();
