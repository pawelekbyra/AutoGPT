"use client";
import React from "react";

// --- DATA ---
const PINATA_GATEWAY =
  "https://yellow-elegant-porpoise-917.mypinata.cloud/ipfs";

const KORDYS_IMAGES_URL = "/gallery/wyrok_kordysa";
const BADI_IMAGES_URL = "/gallery/wyrok_badi";
const NYDEK_IMAGES_URL = "/gallery/nydek";
const JANOV_IMAGES_URL = "/gallery/janov";

const VIDEO_CID = "bafybeifkquvqp6cewygbgoqsm3vm6kni3d4wy6medzc7nbsczziswmmv7u";
const ARREST_VIDEO_CID =
  "bafybeickwaxlebikfa2aax7mwk7xnp56n6vqmnw7mafponnztlzinf73iy";

const KORDYS_PDF_URL = `${PINATA_GATEWAY}/bafybeibzxfsg5s4kiuf2kzmbdtmfutfjk75ej5zrpt2igan4aldvqc3oq`;
const BADI_PDF_URL = `${PINATA_GATEWAY}/bafkreietkosain6ftde7f3li5ic34qhkwuglz2tu2kfcpbvrwhslskhwza`;
const MUNAY_WAYBACK_URL =
  "https://web.archive.org/web/20230607033503/https://munaysonqo.com/retreats/";

const VIDEO_ARREST_METADATA = {
  name: "Nalot policji na ośrodek ayahuaski w Hermanovicach",
  description:
    "Pełna dokumentacja policyjnej interwencji i aresztowania grupy organizującej nielegalne ceremonie ayahuaski. Materiał dowodowy w sprawie Jarosława Kordysa.",
  thumbnailUrl: `${JANOV_IMAGES_URL}/janov1.jpg`,
  contentUrl: `${PINATA_GATEWAY}/${ARREST_VIDEO_CID}/videoplayback.m3u8`,
  uploadDate: "2020-10-15T09:00:00+01:00",
};

const VIDEO_STEFANEK_METADATA = {
  name: "Wyznania Krzysztofa Stefanka o przejęciu Janówa",
  description:
    "Relacja z pierwszej ręki dotycząca darowizny nieruchomości w Janowie od Michała Kicińskiego dla Stowarzyszenia Natury Zew.",
  thumbnailUrl: `${JANOV_IMAGES_URL}/janov2.jpg`,
  contentUrl: `${PINATA_GATEWAY}/${VIDEO_CID}/YTDowncom_YouTube_Media_4Xujw-krjxs_001_1080p-1.m3u8`,
  uploadDate: "2024-11-01T12:00:00+01:00",
};

const generateKordysPages = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const pageNumber = String(i + 1).padStart(4, "0");
    const fileName = `30T_5_2021-1_page-${pageNumber}.jpg`;
    return `${KORDYS_IMAGES_URL}/${fileName}`;
  });
};

const generateBadiPages = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const pageNumber = String(i + 1).padStart(4, "0");
    const fileName = `wyrok_page-${pageNumber}.jpg`;
    return `${BADI_IMAGES_URL}/${fileName}`;
  });
};

const GALLERY_NYDEK = [
  `${NYDEK_IMAGES_URL}/nydek01.jpg`,
  `${NYDEK_IMAGES_URL}/nydek02.jpg`,
  `${NYDEK_IMAGES_URL}/nydek03.jpg`,
  `${NYDEK_IMAGES_URL}/nydek04.jpg`,
  `${NYDEK_IMAGES_URL}/nydek05.jpg`,
  `${NYDEK_IMAGES_URL}/nydek06.jpeg`,
];

const GALLERY_WYROK_KORDYS = generateKordysPages(25);
const GALLERY_WYROK_BADI = generateBadiPages(3);

const GALLERY_JANOV = [
  `${JANOV_IMAGES_URL}/janov1.jpg`,
  `${JANOV_IMAGES_URL}/janov2.jpg`,
  `${JANOV_IMAGES_URL}/janov3.jpg`,
  `${JANOV_IMAGES_URL}/janov4.jpg`,
  `${JANOV_IMAGES_URL}/janov5.jpg`,
  `${JANOV_IMAGES_URL}/janov6.jpg`,
  `${JANOV_IMAGES_URL}/janov8.jpg`,
  `${JANOV_IMAGES_URL}/janov9.jpg`,
  `${JANOV_IMAGES_URL}/janov10.jpg`,
  `${JANOV_IMAGES_URL}/janov11.jpg`,
  `${JANOV_IMAGES_URL}/janov12.jpg`,
  `${JANOV_IMAGES_URL}/janov13.jpg`,
  `${JANOV_IMAGES_URL}/janov14.jpg`,
  `${JANOV_IMAGES_URL}/janov15.jpg`,
  `${JANOV_IMAGES_URL}/janov16.jpg`,
  `${JANOV_IMAGES_URL}/janov17.jpg`,
  `${JANOV_IMAGES_URL}/janov18.jpg`,
  `${JANOV_IMAGES_URL}/janov19.jpg`,
  `${JANOV_IMAGES_URL}/janov20.jpg`,
  `${JANOV_IMAGES_URL}/janov21.jpg`,
  `${JANOV_IMAGES_URL}/janov23.jpg`,
  `${JANOV_IMAGES_URL}/janov24.jpg`,
  `${JANOV_IMAGES_URL}/janov25.jpg`,
  `${JANOV_IMAGES_URL}/janov26.jpg`,
];

const EvidenceGrid = () => {
  return (
    <div className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <h3 className="col-span-full mb-4 font-display text-2xl font-bold uppercase tracking-widest text-ink">
        ⚖️ Galeria Dowodów
      </h3>

      {/* Wezwanie Kiciński */}
      <div className="evidence-card group relative flex flex-col overflow-hidden text-left">
        <div className="aspect-[3/4] overflow-hidden bg-parchment-warm">
          <img
            src={`${KORDYS_IMAGES_URL}/wezwanie/wezwanie_kicinski.png`}
            alt="Wezwanie Kiciński"
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="bg-parchment-light/90 p-4">
          <h4 className="mb-1 font-display text-sm font-bold uppercase tracking-tight text-ink">
            Wezwanie Kiciński
          </h4>
          <p className="font-mono text-[10px] text-ink-light">
            Wezwanie dla M. Kicińskiego
          </p>
          <p className="font-mono text-[10px] text-ink-light">
            Sygn. WD-I-3186/23
          </p>
          <a
            href={`${KORDYS_IMAGES_URL}/wezwanie/wezwanie_kicinski.png`}
            target="_blank"
            className="mt-3 block text-[10px] font-bold text-wine hover:text-wine-light"
          >
            POKAŻ DOWÓD
          </a>
        </div>
      </div>

      {/* Wyrok Kordys */}
      <div className="evidence-card group relative flex flex-col overflow-hidden text-left">
        <div className="aspect-[3/4] overflow-hidden bg-parchment-warm">
          <img
            src="/gallery/wyrok_kordysa/30T_5_2021-1_page-0001.jpg"
            alt="Wyrok Kordys"
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="bg-parchment-light/90 p-4">
          <h4 className="mb-1 font-display text-sm font-bold uppercase tracking-tight text-ink">
            Uzasadnienie Wyroku: J. Kordys
          </h4>
          <p className="font-mono text-[10px] text-ink-light">
            Sygn. 30 T 5/2021
          </p>
          <details className="mt-2">
            <summary className="cursor-pointer text-[10px] font-bold text-wine transition-colors hover:text-wine-light">
              POKAŻ STRONY (25)
            </summary>
            <div className="mt-2 flex flex-col gap-2">
              {GALLERY_WYROK_KORDYS.map((img, i) => (
                <a
                  key={i}
                  href={img}
                  target="_blank"
                  className="text-[9px] text-ink-medium underline hover:text-wine"
                >
                  Strona {i + 1}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>

      {/* Wyrok Badi */}
      <div className="evidence-card group relative flex flex-col overflow-hidden text-left">
        <div className="aspect-[3/4] overflow-hidden bg-parchment-warm">
          <img
            src="/gallery/wyrok_badi/wyrok_page-0001.jpg"
            alt="Wyrok Badi"
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="bg-parchment-light/90 p-4">
          <h4 className="mb-1 font-display text-sm font-bold uppercase tracking-tight text-ink">
            Wyrok Skazujący: Bartosz B.
          </h4>
          <p className="font-mono text-[10px] text-ink-light">
            Sygn. 66 T 146/2021
          </p>
          <details className="mt-2">
            <summary className="cursor-pointer text-[10px] font-bold text-wine transition-colors hover:text-wine-light">
              POKAŻ STRONY (3)
            </summary>
            <div className="mt-2 flex flex-col gap-2">
              {GALLERY_WYROK_BADI.map((img, i) => (
                <a
                  key={i}
                  href={img}
                  target="_blank"
                  className="text-[9px] text-ink-medium underline hover:text-wine"
                >
                  Strona {i + 1}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>

      {/* Dokumentacja Janów */}
      <div className="evidence-card group relative flex flex-col overflow-hidden text-left">
        <div className="aspect-[3/4] overflow-hidden bg-parchment-warm">
          <img
            src="/gallery/janov/janov1.jpg"
            alt="Dokumentacja Janów"
            className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="bg-parchment-light/90 p-4">
          <h4 className="mb-1 font-display text-sm font-bold uppercase tracking-tight text-ink">
            Dokumentacja: Janów
          </h4>
          <p className="font-mono text-[10px] text-ink-light">KW LV 127</p>
          <details className="mt-2">
            <summary className="cursor-pointer text-[10px] font-bold text-wine transition-colors hover:text-wine-light">
              POKAŻ GALERIĘ
            </summary>
            <div className="mt-2 flex flex-col gap-2">
              {GALLERY_JANOV.map((img, i) => (
                <a
                  key={i}
                  href={img}
                  target="_blank"
                  className="text-[9px] text-ink-medium underline hover:text-wine"
                >
                  Zdjęcie {i + 1}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>

      {/* Posiadłość Nýdek */}
      <div className="evidence-card group relative flex flex-col overflow-hidden text-left">
        <div className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-parchment-warm">
          <span className="text-4xl">🏠</span>
        </div>
        <div className="flex-grow bg-parchment-light/90 p-4">
          <h4 className="mb-1 font-display text-sm font-bold uppercase tracking-tight text-ink">
            Posiadłość w Nýdku
          </h4>
          <p className="font-mono text-[10px] text-ink-light">
            KW LV 832 (M. Iwiński)
          </p>
          <details className="mt-2">
            <summary className="cursor-pointer text-[10px] font-bold text-wine transition-colors hover:text-wine-light">
              POKAŻ GALERIĘ
            </summary>
            <div className="mt-2 flex flex-col gap-2">
              {GALLERY_NYDEK.map((img, i) => (
                <a
                  key={i}
                  href={img}
                  target="_blank"
                  className="text-[9px] text-ink-medium underline hover:text-wine"
                >
                  Zdjęcie {i + 1}
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTS ---

const BrandHeader = () => {
  return (
    <div className="flex w-full flex-col border-b-4 border-ink py-8 text-center">
      <h1 className="mb-2 font-display text-6xl font-black tracking-tighter text-ink md:text-8xl">
        NASZA GAZETKA
      </h1>
      <div className="mb-4 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-ink md:text-sm">
        <span>📰 Niezależne Media</span>
        <div className="hidden h-4 border-l border-ink sm:block"></div>
        <div className="text-center font-display tracking-[0.2em] text-ink">
          NIEDZIELA, 1 MARCA 2026
        </div>
        <div className="hidden h-4 border-l border-ink sm:block"></div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">Serwis Śledczy</span>
          <span className="text-wine">📄</span>
          <span className="ml-1 border-l border-ink pl-2 font-display text-wine md:inline">
            Nr 01
          </span>
        </div>
      </div>
    </div>
  );
};

const CaseFile = ({
  title,
  children,
  icon = "📄",
}: {
  title: string;
  children: React.ReactNode;
  icon?: string;
}) => (
  <div className="my-8 rounded-sm border-l-4 border-ink bg-parchment/30 p-6 shadow-sm">
    <h4 className="mb-4 flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-ink">
      {icon} {title}
    </h4>
    <div className="font-body leading-relaxed text-ink-medium">{children}</div>
  </div>
);

const PullQuote = ({
  quote,
  author,
  source,
}: {
  quote: string;
  author: string;
  source: string;
}) => (
  <div className="my-12 border-l-4 border-wine pl-6 font-display text-xl italic text-ink-medium">
    &bdquo;{quote}&rdquo;
    <cite className="mt-4 block text-sm not-italic text-ink-light">
      &mdash; {author}, {source}
    </cite>
  </div>
);

const LocationStampUI = ({
  name,
  plot,
  lv,
}: {
  name: string;
  plot: string;
  lv: string;
}) => (
  <div className="inline-flex items-center gap-3 rounded-sm border border-sepia-light bg-parchment-warm/20 px-4 py-2 font-mono text-xs text-ink shadow-sm">
    <span className="text-lg">🔍</span>
    <span className="font-bold">🏠 {name}</span>
    <span className="text-ink-light">|</span>
    <span>LV {lv}</span>
    <span className="text-ink-light">|</span>
    <span>Działka: {plot}</span>
  </div>
);

const TransactionStampUI = ({
  label,
  value,
  subDetails,
}: {
  label: string;
  value: string;
  subDetails?: string;
}) => (
  <div className="inline-flex flex-col gap-1 rounded-sm border border-sepia-light bg-parchment-warm/20 px-4 py-3 font-mono text-xs text-ink shadow-sm">
    <div className="flex items-center gap-2">
      <span className="text-lg">🔍</span>
      <span className="font-bold">📜 {label}</span>
    </div>
    <div className="font-bold text-wine">{value}</div>
    {subDetails && (
      <div className="text-[10px] text-ink-light">{subDetails}</div>
    )}
  </div>
);

const ArticleVideoPlayer: React.FC<{ src: string; poster: string }> = ({
  src,
  poster,
}) => {
  return (
    <div className="group relative aspect-video w-full overflow-hidden bg-black shadow-lg">
      <video
        controls
        poster={poster}
        className="h-full w-full"
        src={src}
      ></video>
    </div>
  );
};

export default function Page() {
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Eliksir Wiedźmina – Śledztwo: Michał Kiciński i tajemnica Janowa",
    description:
      "Pełna dokumentacja śledztwa: Michał Kiciński, Jarosław Kordys i prokurator Jolanta Świdnicka. Ayahuasca, Janów i tragiczna śmierć uczestniczki.",
    image: [`${KORDYS_IMAGES_URL}/wezwanie/wezwanie_kicinski.png`],
    datePublished: "2024-03-03",
    author: [
      {
        "@type": "Person",
        name: "Detektyw Polutek",
        url: "mailto:detektyw.polutek@protonmail.com",
      },
    ],
  };

  const videoArrestSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: VIDEO_ARREST_METADATA.name,
    description: VIDEO_ARREST_METADATA.description,
    thumbnailUrl: VIDEO_ARREST_METADATA.thumbnailUrl,
    uploadDate: VIDEO_ARREST_METADATA.uploadDate,
    contentUrl: VIDEO_ARREST_METADATA.contentUrl,
  };

  const videoStefanekSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: VIDEO_STEFANEK_METADATA.name,
    description: VIDEO_STEFANEK_METADATA.description,
    thumbnailUrl: VIDEO_STEFANEK_METADATA.thumbnailUrl,
    uploadDate: VIDEO_STEFANEK_METADATA.uploadDate,
    contentUrl: VIDEO_STEFANEK_METADATA.contentUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoArrestSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoStefanekSchema),
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center px-6 pt-0">
        <BrandHeader />
      </div>

      <div className="relative z-10 mx-auto flex w-full flex-grow flex-col">
        <div className="flex w-full flex-col items-center justify-center px-6 pb-6 pt-0 text-center">
          <img
            src="/zdjeciehej.png"
            alt="Wiedźmini z eliksirem"
            className="mb-1 h-32 object-contain mix-blend-multiply contrast-200 grayscale md:h-[180px]"
          />

          <h2 className="mb-1 w-full text-ink">
            <span className="block font-display text-4xl font-black uppercase leading-none tracking-tight md:text-[5.5rem]">
              Eliksir Wiedźmina
            </span>
            <span className="mt-1 block whitespace-nowrap font-body text-sm font-medium uppercase italic tracking-widest text-ink-medium md:text-2xl">
              Mroczna tajemnica twórców CD Projekt
            </span>
          </h2>

          <div className="mx-auto mt-2 max-w-3xl px-4">
            <div className="gradient-divider mx-auto mb-4 w-32"></div>
            <p className="font-body text-base italic leading-snug text-ink-medium md:text-xl">
              Ayahuasca, policyjne naloty i tragedia, o której nie miał się nikt
              dowiedzieć. Publicznie dostępne akta i rejestry ujawniają, jak
              twórcy gry &quot;Wiedźmin&quot; finansowali szamańskie podziemie.
            </p>
          </div>
        </div>

        <article className="relative z-10 mx-auto w-full max-w-3xl flex-grow px-6 pb-0 pt-2">
          <div className="article-prose prose prose-lg prose-headings:font-display prose-headings:font-bold prose-blockquote:not-italic max-w-none">
            {/* article-prose handles link & text colors */}

            <p className="drop-cap mt-0 leading-relaxed">
              W 2020 roku media obiegły doniesienia o rozbiciu grupy polskich
              szamanów w czeskich <strong>Hermanovicach</strong>. Policyjny
              nalot, aresztowanie <strong>Jarosława i Karoliny Kordysów</strong>
              , a następnie surowe wyroki &ndash; 8,5 oraz 5,5 roku więzienia za
              prowadzenie nielegalnego biznesu polegającego na organizacji tzw.
              &quot;ceremonii&quot;, podczas których klientom podawano
              egzotyczny psychodelik &ndash; ayahuaskę.
            </p>

            <p>
              Ayahuaska to tradycyjny wywar z amazońskich roślin o silnym
              działaniu halucynogennym. Ze względu na wysoką zawartość DMT &ndash;
              substancji psychodelicznej wywołującej intensywne wizje i zmiany
              stanu świadomości, jej posiadanie i podawanie jest w Polsce i
              Czechach zabronione. Finałem medialnego spektaklu Kordysów było
              ułaskawienie przez czeskiego prezydenta po dwóch latach odsiadki.
            </p>

            <p>
              Kurtyna opadła, temat ucichł. Ale czy to na pewno koniec tej
              historii? W cieniu tego głośnego procesu toczył się drugi &ndash;
              cichy i błyskawiczny, zakończony dyskretnym wyrokiem, o którym nikt
              nawet w mediach się nie zająknął. Analiza sądowych dokumentów
              prowadzi do zdumiewających wniosków.
            </p>

            <p>
              W przygranicznym Janowie funkcjonował drugi, bliźniaczy
              ayahuaskowy ośrodek, którego współwłaścicielem okazał się
              miliarder &ndash; <strong>Michał Kiciński</strong>.
            </p>

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              Świadek B.
            </h2>

            <p>
              W obszernym i publicznie dostępnym uzasadnieniu{" "}
              <a href="#galeria">wyroku</a> Jarosława Kordysa pojawia się postać
              świadka Bartosza B.
            </p>

            <p>Zgodnie z aktami:</p>

            <CaseFile title="Zeznania świadka B." icon="✉️">
              &quot;Świadek B. odnośnie osoby oskarżonego [Jarosława Kordysa]
              oświadczył, że zna się z nim ok. 8 lat, a poznali się w
              Holandii&quot;.
              <br />
              <br />
              &quot;Świadek B. potwierdził, że i on sam w przeszłości prowadził
              warsztaty&quot;, a obecnie sam &quot;jest przedmiotem dochodzenia
              policji w Krnowie właśnie z powodu ceremonii&quot;.
            </CaseFile>

            <p>Akta ujawniają również skalę zarzutów wobec Bartosza B.:</p>

            <CaseFile title="Zarzuty wobec Bartosza B.">
              &quot;(...) wymieniony był sprawdzany w związku z występkiem
              niedozwolonej produkcji i innego obchodzenia się ze środkami
              odurzającymi (...) albowiem miał w roku 2014 zlecić przesłanie na
              swój adres przesyłki pocztowej przechwyconej na lotnisku w Lipsku
              RFN zawierającej 4,5 kg DMT, a 6.6.2018 miało dojść do zatrzymania
              przesyłki pocztowej we Frankfurcie nad Menem RFN zawierającej 2000
              g meskaliny i 38,6 g substancji DMT.&quot;
            </CaseFile>

            <p>
              Intrygujący fragment dotyczy własności &quot;bazy&quot;. Dokumenty
              stwierdzają:
            </p>

            <CaseFile title="Własność nieruchomości">
              &quot;(...) budynek rodzinny w miejscowości Janów (...), który
              jest częściowo użytkowany do stałego zamieszkania, a częściowo
              jako komercyjny obiekt noclegowy&quot;
              <br />
              <br />
              &quot;Świadek [Bartosz B.] potwierdził, że w Janowie jest
              właścicielem jednej dziesiątej nieruchomości&quot;.
            </CaseFile>

            <p>Do kogo należała reszta? Sąd wskazuje wprost:</p>

            <CaseFile title="Ustalenia Sądu">
              &quot;...w odniesieniu do nieruchomości będących współwłasnością{" "}
              <strong>Bartosza B.</strong> i <strong>Michała D. K.</strong>
              &quot;.
            </CaseFile>

            <p>
              W Czechach księgi wieczyste są jawne i dostępne online. Wystarczy
              wejść na stronę Katastru Nieruchomości, wyszukać{" "}
              <a href="#galeria">działkę w Janowie</a> i za niewielką opłatą
              pobrać jej pełną historię.
            </p>

            <div className="my-8 flex justify-start">
              <LocationStampUI name="JANOV U KRNOVA" plot="st. 281" lv="127" />
            </div>

            <p>
              Pobrany dokument nie pozostawia wątpliwości: w latach 2012&ndash;2023
              współwłaścicielami nieruchomości byli:
              <br />
              Bartosz Badowski (10%)
              <br />
              <span className="highlight-wine">
                Michał Dawid Kiciński (90%)
              </span>
            </p>

            <p>
              Drugie imię &ndash; Dawid &ndash; idealnie wypełnia lukę w zanonimizowanym
              skrócie &quot;Michal D. K.&quot;.{" "}
              <span className="highlight-wine">
                Wspólnikiem szamana był twórca &quot;Wiedźmina&quot; &ndash; jeden z
                najbogatszych Polaków.
              </span>
            </p>

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              Na podsłuchu
            </h2>

            <p>
              Przełom w sprawie organizatorów ayahuaskowych ceremonii w 2020
              roku nastąpił dzięki policyjnej technice operacyjnej. Telefon
              Kordysa był na stałym podsłuchu, a funkcjonariusze słuchali na
              żywo, gdy w dniu 24.08.2020 r. doszło do nerwowej wymiany zdań
              pomiędzy Badowskim i Kordysym.
            </p>

            <p>
              Kordys zadzwonił do Badowskiego wyraźnie zaniepokojony wieściami,
              które do niego dotarły. Bał się, że tragedia, o której huczało w
              kuluarach, może zniszczyć ich imperium. Sąd w uzasadnieniu wyroku
              precyzyjnie rekonstruuje ten moment:
            </p>

            <CaseFile
              title="Rekonstrukcja rozmowy (Uzasadnienie Sądu)"
              icon="🔍"
            >
              &quot;oskarżony [Jarosława Kordysa] omawia z B., że dotarła do
              niego informacja, że w obiekcie w Janowie{" "}
              <span className="font-bold underline decoration-wine decoration-4 underline-offset-4">
                zmarła jakaś kobieta
              </span>
              &quot;.
            </CaseFile>

            <p>
              W rozmowie pojawia się też wątek zagrożenia ze strony osoby
              trzeciej &ndash; mężczyźni omawiają szantażystę, który chce iść na
              policję. Kordys wprost pyta wspólnika:
            </p>

            <CaseFile title="Pytanie Kordysa" icon="🔍">
              &quot;W jakim zagrożeniu jest nasza praca?&quot;
            </CaseFile>

            <p>
              Odpowiedź na to pytanie znajduje się w aktach sprawy i nie
              pozostawia złudzeń co do intencji rozmówców. W uzasadnieniu wyroku
              Kordysa czytamy:
            </p>

            <div className="my-12 border-l-4 border-wine pl-6 font-display text-xl italic text-ink-medium">
              &quot;Z ich rozmowy wynika, że nie zajmowali się w zasadzie samym
              faktem śmierci, lecz raczej obawą, aby to nie przyciągnęło uwagi
              policji.&quot;
            </div>

            <p>
              Dla sądu był to koronny dowód na to, że oskarżeni prowadzili
              nielegalny biznes, a nie działalność duchową &ndash; śmierć człowieka
              była dla nich jedynie &quot;psuciem interesów&quot;.
            </p>

            <p>
              Cynizm tej konwersacji sięga zenitu chwilę później. Gdy tylko
              ustalili strategię uciszenia plotek, natychmiast przeszli do
              logistyki dostaw narkotyku. Sąd odnotowuje, że zaraz po
              dywagacjach o śmierci i szantażu, rozmówcy wracają do interesów:
            </p>

            <CaseFile title="Kontynuacja rozmowy" icon="🔍">
              &quot;Następnie w rozmowie omawiają zamówienia «herbaty» z dżungli
              i to, czy im tego «nie zepsują», ekscytując się nagraniem od
              dostawcy, który «siedzi w dżungli i gotuje».&quot;
            </CaseFile>

            <p>
              Dla policjantów, którzy słyszeli to w czasie rzeczywistym, przekaz
              był jasny: w obiekcie mogło dojść do tragedii, a sprawcy martwili
              się jedynie o ciągłość dostaw.
            </p>

            <p>
              Zaledwie dwa dni po tym telefonie, 26.08.2020 czescy policjanci
              weszli do posiadłości w Janowie. Efekty rewizji opisano w wyroku
              Kordysa:
            </p>

            <CaseFile title="Protokół rewizji">
              &quot;w nieruchomości zabezpieczono rzeczy... oprócz marihuany
              zabezpieczono również substancje zawierające DMT o objętości ok. 2
              kg&quot;.
            </CaseFile>

            <p>
              Podczas policyjnej interwencji zidentyfikowano tam 15 obywateli
              Polski, którzy mieli brać udział w ceremonii. Wśród nich, stali
              bywalcy i bliscy znajomi Badowskiego &ndash;{" "}
              <strong>Krzysztof Stefanek</strong> i{" "}
              <strong>Lena Drzewińska</strong>, których obecność w momencie
              wkroczenia służb ma znaczenie w kontekście późniejszej ich roli w
              tej historii.
            </p>

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              Cena wolności
            </h2>

            <p>
              Kiedy 26 sierpnia 2020 roku czeska policja weszła do posiadłości w
              Janowie, należącej do Bartosza Badowskiego i miliardera Michała
              Kicińskiego, Jarosław Kordys w Hermanovicach wciąż czuł się
              bezpiecznie. Nie wiedział jeszcze, że zegar zaczął odliczać czas
              do jego własnej katastrofy. Zaledwie 7 tygodni po cichym nalocie
              na Badowskiego policja zapukała do Kordysów.
            </p>

            <p>
              15 października 2020 roku sielankę w ich ośrodku przerwał huk
              granatów ogłuszających. Czeska jednostka antyterrorystyczna nie
              bawiła się w półśrodki: zamaskowani funkcjonariusze z długą bronią
              wdarli się do budynku, rzucając na ziemię przyszłych bohaterów
              głośnego skandalu.
            </p>

            <div className="my-12 w-full overflow-hidden rounded-sm shadow-md">
              <ArticleVideoPlayer
                src={VIDEO_ARREST_METADATA.contentUrl}
                poster=""
              />
            </div>
            <div className="mb-12 mt-1 border-l-2 border-sepia pl-3 font-body text-sm text-ink-light">
              <span className="mr-2 text-xs font-bold uppercase text-ink">
                Materiał Operacyjny:
              </span>
              Nagranie z policyjnego nalotu na ośrodek w Hermanovicach
              (15.10.2020)
            </div>

            <p>
              Co wydarzyło się w ciągu tych niespełna dwóch miesięcy? Odpowiedź
              kryje się w jednym czeskim terminie prawnym:
            </p>

            <div className="my-12 flex gap-4 rounded-r-lg border-l-4 border-amber bg-parchment-warm/40 p-5 shadow-sm">
              <span className="mt-1 text-3xl">⚖️</span>
              <div>
                <strong className="mb-1 block font-display text-lg font-bold text-ink">
                  Dohoda o vině a trestu
                </strong>
                <div className="font-body text-lg leading-relaxed text-ink-medium">
                  Ugoda o winie i karze. Czeska procedura karna pozwalająca
                  oskarżonemu na dobrowolne poddanie się karze w zamian za
                  łagodniejszy wyrok, bez przeprowadzania pełnego procesu
                  dowodowego i wzywania świadków.
                </div>
              </div>
            </div>

            <p>
              Bartosz &quot;Badi&quot; Badowski, wspólnik jednego z
              najbogatszych Polaków, błyskawicznie zrozumiał swoje położenie. W
              obliczu zabezpieczonych dowodów &ndash; w tym 2 kilogramów substancji z
              DMT i marihuany &ndash; wybrał strategię, która miała uchronić go przed
              wieloletnim więzieniem. Postanowił &quot;kupić&quot; sobie
              wolność.
            </p>

            <p>
              Ugoda pozwoliła na zamknięcie jego teczki bez wywoływania
              świadków, co w praktyce oznaczało, że mechanizmy działania
              janowskiego ośrodka nigdy nie wybrzmiały echem w publicznej
              debacie, chroniąc Badowskiego przed krzyżowym ogniem pytań i
              zeznaniami, które mogłyby pogrążyć także jego cichego wspólnika.
            </p>

            <p>
              Cena wolności Badowskiego okazała się być wysoka dla jego kolegi z
              branży. Zeznania &quot;Badiego&quot; były dla prokuratury
              bezcennym materiałem dowodowym, który pozwolił domknąć łańcuch
              poszlak w sprawie Kordysów.
            </p>

            <p>
              Na mocy <a href="#galeria">wyroku</a> z dnia 2 listopada 2021 roku
              Bartosz Badowski został uznany winnym popełnienia &quot;zbrodni
              niedozwolonej produkcji i innego obchodzenia się ze środkami
              odurzającymi&quot;.
            </p>

            <p>Sąd ustalił, że:</p>

            <CaseFile title="Ustalenia wyroku skazującego Bartosza B.">
              &quot;co najmniej od bliżej nieustalanej daty w 2015 roku do
              26.08.2020 [...] oferował, organizował i co najmniej w 441
              przypadkach zrealizował w nieregularnych odstępach czterodniowe i
              dziesięciodniowe pobyty [...] ukierunkowane na tzw. duchowe
              ćwiczenia spirytualne&quot;
              <br />
              <br />
              &quot;udostępnił uczestnikom do użycia bliżej nieustaloną ilość
              substancji psychotropowych, a mianowicie tzw. ayahuascę
              zawierającą dimetylotryptaminę (DMT) oraz tzw. marihuanę
              zawierającą tetrahydrokannabinol (THC)&quot;
              <br />
              <br />
              &quot;przechowywał łącznie 1902,79 grama materiału roślinnego
              (...), który zawierał łącznie 37,24 grama substancji czynnej
              dimetylotryptaminy (DMT) oraz 92,29 grama tzw. narkotyku
              marihuany&quot;.
            </CaseFile>

            <p>
              Podczas, gdy Jarosław Kordys został skazany na 8,5 roku
              pozbawienia wolności Bartosz Badowski, którego sprawa dotyczyła
              tego samego procederu, tych samych substancji, regionu i czasu
              trwania działalności, dzięki ugodzie i współpracy z wymiarem
              sprawiedliwości, zakończył sprawę wyrokiem w zawieszeniu.
            </p>

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              Cisza po burzy
            </h2>

            <p>
              Choć Badowski zaprzestał prowadzenia działalności szamańskiej,
              posiadłość w Janowie nie opustoszała &ndash; zamieszkali z nim
              wspomniani wcześniej Krzysztof Stefanek i Magdalena Drzewińska.
              Ich obecność u boku &quot;Badiego&quot; w tamtym czasie rzuca cień
              na ich późniejszą rolę; nie byli to wszakże niewinni obserwatorzy,
              lecz ludzie, którzy mimo tego, że sami byli obecni podczas
              policyjnej interwencji, pozostali lojalni wobec byłego szamana.
            </p>

            <p>
              Będąc tak blisko Badowskiego, doskonale znali mroczną tajemnicę
              śmierci Ilony. Ich decyzja o zamieszkaniu z człowiekiem, który in
              obliczu tragedii martwił się o &quot;ciągłość dostaw&quot;,
              dowodzi, że w pełni akceptowali reguły zmowy milczenia.
            </p>

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              Kiciński
            </h2>

            <p>
              W cieniu tych wyroków pozostaje inciąż niewyjaśniona rola cichego
              wspólnika. Michał Kiciński to nie jest postać, która o ayahuasce
              jedynie &quot;słyszała&quot; &ndash; on stał się jej nieoficjalnym
              ambasadorem w polskich mediach głównego nurtu. W licznych
              wywiadach (m.in. dla &quot;Focusa&quot;, &quot;Newsweeka&quot;) z
              niezwykłą precyzją opisuje on mechanizmy działania psychodelików.
              Kiciński publicznie opowiada o lekcjach pokory, jakie dała mu
              &quot;medycyna&quot;, o spotkaniach z szamanami i o tym, jak napar
              z dżungli otwiera &quot;nową rzeczywistość&quot;.
            </p>

            <PullQuote
              quote="Po ayahuasce jest szansa na to, żeby sobie nie ściemniać."
              author="Michał Kiciński"
              source="Newsweek, 30 maja 2016 r."
            />

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              &quot;Błąd z Badim&quot;
            </h2>

            <p>
              Michał Kiciński wiedział o Ilonie. Jego konfrontacja z organami
              ścigania nabrała formalnego kształtu dopiero jesienią 2023 roku.
              21 września 2023 roku miliarder osobiście odebrał wezwanie do
              stawiennictwa w charakterze świadka w sprawie o sygnaturze
              WD-I-3186/23. Miało się ono odbyć 18.10.2023. Na wezwaniu
              czytelnie było napisane, że przesłuchanie będzie dotyczyć
              &quot;pobytu w Janowie&quot;.
            </p>

            <div className="my-12 flex flex-col items-center">
              <a href="/wezwanie_kicinski.png" target="_blank">
                <img
                  src={`${KORDYS_IMAGES_URL}/wezwanie/wezwanie_kicinski.png`}
                  alt="Wezwanie na policję"
                  className="w-48 cursor-pointer rounded border border-sepia-light mix-blend-multiply shadow-md grayscale sepia transition-opacity hover:opacity-90"
                />
              </a>
              <p className="mt-2 w-48 text-center font-mono text-xs uppercase tracking-wider text-ink-light">
                Skan wezwania (Kliknij)
              </p>
            </div>

            <p>
              Reakcja miliardera na zainteresowanie organów ścigania była
              błyskawiczna. Zwrócił się bezpośrednio do autora zawiadomienia &ndash;
              wysyłając mu wiadomość mailową z propozycją swoistej pokuty.
              Zamiast wyjaśnień prokuratorskich zaoferował przelew na cel
              charytatywny, nazywając lata nielegalnego procederu młodzieńczą
              naiwnością.
            </p>

            <CaseFile title="Wiadomość prywatna od M. Kicińskiego" icon="✉️">
              &quot;(...) Tak mogę zapłacić za swój błąd z Badim. Podaj mi
              Fundacje lub Stowarzyszenie (najlepiej powiązaną z hospicjum lub
              domami dziecka, bo tu widzę morze potrzeb i dużo cierpienia) i
              wpłacę tam dobrowolnie kwotę darowizny, w ramach Przeprosin
              wszechświatowi, za moją młodzieńczą naiwność i brak
              przenikliwości. Fundacja / Stowarzyszenie musi być uznana i z
              tradycjami, a nie jakaś organizacja krzak. Wyślę Ci potwierdzenie
              przelewu. (...)&quot;
            </CaseFile>

            <p>
              Do przesłuchania doszło tydzień przed terminem wskazanym na
              wezwaniu &ndash; 11 października 2023 roku o godzinie 15:00 w Komendzie
              Rejonowej Policji Warszawa II. W protokole Kiciński przyjmuje
              linię opartą na braku świadomości co do charakteru działalności
              prowadzonej w jego posiadłości.
            </p>

            <CaseFile title="Zeznanie do protokołu">
              &quot;Nie mam żadnej wiedzy co się działo na mojej farmie, in
              której jestem 90% udziałowcem (...) wynajmowałem tę
              nieruchomość.&quot;
            </CaseFile>

            <p>
              Gdy w toku czynności padło kluczowe pytanie o jego własny udział in
              ceremoniach ayahuaski w Janowie, odpowiedź była lakoniczna:
            </p>

            <CaseFile title="Odpowiedź na pytanie o udział">
              &quot;nie brałem udziału w takich ceremoniach w latach 2016&ndash;2023,
              a o wcześniejszym okresie{" "}
              <span className="font-bold underline decoration-wine decoration-4 underline-offset-4">
                odmawiam odpowiedzi
              </span>
              &quot;
            </CaseFile>

            <p>
              W kontekście złożonych zeznań warto zauważyć, że miliarder jest
              właścicielem luksusowego ośrodka Munay Sonqo w Peru, o którym
              wielokrotnie wspominał w wywiadach.
            </p>

            <p>
              W przeciwieństwie do Europy, peruwiańskie prawo zezwala na
              komercyjne prowadzenie ceremonii z ayahuascą. Ośrodek Kicińskiego
              oferuje tam w pełni jawną i profesjonalną sprzedaż usług o profilu
              bliźniaczym do tych, które w Czechach są zakazane, co inciąż jest
              eksponowane na stronie internetowej.
            </p>

            <p>
              Fakt, że Kiciński w momencie przesłuchania zarządzał legalnym
              biznesem ayahuaskowym w Ameryce Południowej, stawia pod znakiem
              zapytania jego deklarowaną nieświadomość co do profilu
              działalności w Janowie.
            </p>

            <p>Co na to Bartosz Badowski?</p>

            <CaseFile title="Fragment korespondencji B. Badowskiego" icon="✉️">
              &quot;Przelewy wysyłałem z mojego konta ING, które mam do tej pory
              [...]. Tytuł &bdquo;wynajem&quot;. (...) Dopóki zarabiałem &ndash; dzieliłem się z
              nim zyskiem.(...) Michał wiedział dokładnie co się dzieje na
              farmie i czerpał z tego zyski przez wiele wiele lat. (...)
              Rozważam też wizytę na Policji w Czechach &ndash; ja poniosłem prawne
              konsekwencje za prowadzenie ceremonii, ale Kiciński &ndash; żadnych.
              Mimo, że to on czerpał z tego największe zyski, to on był nade mną
              i był większościowym właścicielem farmy.&quot;
            </CaseFile>

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              Anonimowy filantrop
            </h2>

            <p>
              W listopadzie 2025 roku na kanale YouTube &quot;
              <strong>Osada Natury Zew</strong>&quot; pojawia się nagrany rok
              wcześniej film, w którym obecny gospodarz,{" "}
              <strong>Krzysztof Stefanek</strong>, snuje opowieść o powstaniu
              &quot;Osady&quot;. W sielskiej scenerii, z uśmiechem na ustach,
              buduje narrację o cudownym zbiegu okoliczności i tajemniczym
              dobroczyńcy.
            </p>

            <p>
              Stefanek wspomina, jak wspólnie z grupą przyjaciół pomagał
              uporządkować sprawy własnościowe, by obiekt &quot;znalazł się in
              jednych rękach&quot;. Kluczowy moment tej opowieści Stefanek
              datuje z niezwykłą precyzją:
            </p>

            <CaseFile title="Wypowiedź K. Stefanka">
              &quot;Ostatecznie{" "}
              <span className="highlight-wine">23 października 2023 roku</span>{" "}
              ten człowiek do nas zadzwonił powiedział, że wspólnie z żoną
              zdecydowali, że oni by chcieli to miejsce przekazać in
              darowiźnie&quot;
            </CaseFile>

            <p>
              Stefanek przedstawia to jako efekt &quot;researchu&quot;
              darczyńcy, który rzekomo urzekła wizja działalności non-profit.
            </p>

            <div className="my-12 w-full overflow-hidden rounded-sm shadow-md">
              <ArticleVideoPlayer
                src={VIDEO_STEFANEK_METADATA.contentUrl}
                poster=""
              />
            </div>
            <div className="mb-12 mt-1 border-l-2 border-sepia pl-3 font-body text-sm text-ink-light">
              <span className="mr-2 text-xs font-bold uppercase text-ink">
                Materiał Wideo:
              </span>
              Krzysztof Stefanek opowiada o &quot;cudownym&quot; otrzymaniu
              darowizny (Materiał z 2025 r.)
            </div>

            <p>
              Jednak kalendarz wydarzeń prawnych burzy ten romantyczny mit,
              ujawniając nerwowy pośpiech w pozbywaniu się &quot;gorącego
              kartofla&quot;:
            </p>

            <ul className="timeline-list my-12 list-none space-y-12 font-mono text-sm">
              <li className="flex items-start gap-3">
                <span>📅</span>
                <div>
                  <strong>21 września 2023 r.</strong> &ndash; Michał Kiciński odbiera
                  wezwanie na przesłuchanie w sprawie Janowa.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span>📅</span>
                <div>
                  <strong>3 października 2023 r.</strong> &ndash; Na tydzień przed
                  wizytą na komendzie odkupuje od Bartosza Badowskiego jego 10%
                  udziałów w nieruchomości. Aby pozbyć się całego ośrodka jednym
                  podpisem, musi najpierw stać się jego jedynym właścicielem.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span>📅</span>
                <div>
                  <strong>11 października 2023 r.</strong> &ndash; Miliarder staje
                  przed policją. Do protokołu odmawia zeznań na temat swojej
                  przeszłości w tym miejscu.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-3 text-wine">📅</span>
                <div className="timeline-item-critical w-full rounded-sm p-4 shadow-sm">
                  <span className="font-bold text-ink">
                    23 października 2023 r.
                  </span>{" "}
                  &ndash; Zaledwie 12 dni po kłopotliwym przesłuchaniu, gdy
                  formalności własnościowe z Badim są już dopięte, następuje
                  telefon do Stefanka z propozycją oddania majątku wartego
                  miliony za darmo.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span>📅</span>
                <div>
                  <strong>21 grudnia 2023 r.</strong> &ndash; Finał operacji. Kiciński
                  formalnie przekazuje Janów w formie darowizny. Nieruchomość
                  trafia do stowarzyszenia &quot;non-profit&quot; &ndash; fasadowej
                  organizacji &quot;krzak&quot;, zarządzanej przez ludzi, którzy
                  przez lata byli częścią tego procederu. Miliarder pozbywa się
                  dowodów, a nowi właściciele zyskują bazę do dalszej
                  działalności pod nowym szyldem.
                </div>
              </li>
            </ul>

            <p>
              Cynizm tej sytuacji pogłębia fakt, że obdarowani nie byli
              przypadkowymi entuzjastami ekologii.{" "}
              <strong>Krzysztof Stefanek</strong>, który w filmie mówi o
              &quot;odwróconej logice&quot; i pięknie wolontariatu, i jego
              konkubina <strong>Magdalena Drzewińska</strong> w rzeczywistości
              doskonale znali mroczną historię Janowa i tajemnicę śmierci Ilony.
              Przyjmując darowiznę, przejmowali nie tylko ziemię, ale i
              milczenie.
            </p>

            <div className="my-8 flex justify-start">
              <TransactionStampUI
                label="Nr Transakcji (Katastr)"
                value="V-5821/2023-127"
                subDetails="Obręb: Janów u Krnova [656976]"
              />
            </div>

            <p>
              Ostatecznie strategia okazała się skuteczna. Śledztwo umorzono
              zanim się zaczęło, a majątek, który mógł podlegać przepadkowi jako
              narzędzie przestępstwa, został bezpiecznie zaparkowany in
              &quot;stowarzyszeniu&quot;. Kiciński pozostał anonimowym
              &quot;filantropem&quot;, a Stefanek &ndash; opiekunem nowej,
              &quot;czystej&quot; osady.
            </p>

            <p>
              Na tragedii świadomie wzbogacili się ludzie, dla których
              tuszowanie prawdy stało się fundamentem ich nowej, intratnej
              rzeczywistości. Pod szyldem organizacji non-profit{" "}
              <strong>Stowarzyszenie Natury Zew</strong> żyją teraz z
              organizacji turnusów wypoczynkowych z cennikiem darowizn zamiast
              paragonów, okłamując swoich gości i publicznie każdego, kto
              natrafi na ich sielankowe filmiki. A przecież
              &quot;zadośćuczynienie wszechświatowi&quot; miało trafić na
              hospicjum, a nie na &quot;organizację krzak&quot;.
            </p>

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              Nýdek
            </h2>

            <p>
              Gdyby sprawa dotyczyła tylko jednego miliardera, można by mówić o
              przypadku lub pechowym doborze najemców. Jednak nieco dalej od
              Janowa, w miejscowości <strong>Nýdek</strong>, funkcjonował
              kolejny, bliźniaczy ośrodek.
            </p>

            <p>
              Relacje świadków wskazują, że in{" "}
              <a href="#galeria">posiadłości w Nýdku</a> odbywały się regularne
              ceremonie o charakterze zbliżonym do tych u Kordysów i
              Badowskiego, prowadzone przez{" "}
              <strong>Piotra &quot;Bonawenturę&quot; Tracza</strong>. Chociaż
              witryna ośrodka już nie istnieje, archiwum internetu &quot;Wayback
              Machine&quot; zachowało zrzuty strony tribunydek.com. Opisy
              warsztatów jednoznacznie wskazują, że nieruchomość była
              wykorzystywana do pracy z psychodelikami.
            </p>

            <p>
              Skoro wiemy już, czym ten dom był, kluczowym pytaniem staje się:
              do kogo należał?
            </p>

            <p>
              Analiza czeskich ksiąg wieczystych przynosi sensacyjne odkrycie.
              Właścicielem tej kolejnej szamańskiej świątyni &ndash; dokładnie in
              czasie, gdy strona internetowa zapraszała na ceremonie &ndash; był drugi
              z duetu miliarderów stojących za gamingowym gigantem,{" "}
              <span className="highlight-wine">Marcin Iwiński</span>. Dokumenty
              urzędowe bezlitośnie łączą jego nazwisko z infrastrukturą, in
              której odbywał się nielegalny proceder.
            </p>

            <div className="my-8 flex justify-start">
              <LocationStampUI name="NÝDEK" plot="st. 506/1" lv="832" />
            </div>

            <p>
              <span className="highlight-wine">
                Oznacza to, że nie jeden lecz obaj legendarni założyciele CD
                Projekt, na czeskim pograniczu posiadali nieruchomości, in
                których odpłatnie oferowano te same nielegalne substancje.
              </span>
            </p>

            <p>
              Jeszcze bardziej zastanawiające jest to, co stało się z tą
              nieruchomością w momencie zagrożenia. Gdy 15.10.2020 roku
              aresztowano Kordysa, nad środowiskiem zawisło widmo policyjnych
              nalotów. Dokumenty urzędowe odsłaniają niepokojącą zbieżność dat:
            </p>

            <ul className="timeline-list my-12 list-none space-y-12 font-mono text-sm">
              <li className="flex items-start gap-3">
                <span>📅</span>
                <div>
                  <strong>15 października 2020 r.</strong> &ndash; Policyjny szturm na
                  ośrodek Kordysów. W środowisku wybucha panika.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span>📅</span>
                <div>
                  <strong>15 czerwca 2021 r.</strong> &ndash; Marcin Iwiński sprzedaje
                  nieruchomości w Nýdku.
                </div>
              </li>
            </ul>

            <p>
              Nabywcą luksusowej posiadłości nie został inny inwestor, lecz sam
              Piotr Tracz &ndash; ten sam człowiek, który wcześniej pełnił tam rolę
              szamana.
            </p>

            <div className="my-8 flex justify-start">
              <TransactionStampUI
                label="Nr Transakcji (Katastr)"
                value="V-2937/2021-832"
                subDetails="Obręb: Nýdek [708186]"
              />
            </div>

            <p>
              Transakcja ta rodzi wątpliwości: w jaki sposób niszowy szaman
              sfinansował zakup luksusowej willi od jednego z najbogatszych
              Polaków? Nowy właściciel niemal natychmiast zmienił formalny
              profil działalności na legalne warsztaty pracy z ciałem. Zbieżność
              tej sekwencji zdarzeń z &quot;darowizną&quot; Kicińskiego in
              Janowie pozwala dostrzec powtarzalny schemat wycofywania się
              właścicieli z infrastruktury powiązanej z nielegalnym procederem.
            </p>

            <h2 className="section-heading text-3xl tracking-tight text-ink">
              Wiktor B.
            </h2>

            <p>
              3 marca 2026 Onet ujawnia opinii publicznej wstrząsające kulisy
              działalności ośrodka w czeskim Janowie, gdzie podczas szamańskich
              ceremonii z użyciem ayahuaski miało dojść do tragicznych zdarzeń.
              Dziennikarskie śledztwo koncentruje się na śmierci 54-letniej
              uczestniczki, Ilony L.-H.
            </p>

            <p>
              Według ustaleń Onetu, w czerwcu 2018 roku na farmie w Janowie
              doszło do tragedii. Podczas nocnej ceremonii z użyciem ayahuaski,
              kobieta poczuła się fatalnie, zmagając się z silnym bólem i
              intensywnymi wymiotami. Mimo jej krytycznego stanu, nikt nie
              wezwał pomocy medycznej. Co więcej, uczestnikom odebrano wcześniej
              telefony, co uniemożliwiło im samodzielne zaalarmowanie służb
              ratunkowych.
            </p>

            <p>
              Prowadzący obrzęd Wiktor B., brat głównego organizatora ceremonii
              znanego jako Badi, był tej nocy pod wpływem marihuany. Z relacji
              świadków wynika, że po śmierci kobiety podjął on natychmiastowe
              działania mające na celu zatuszowanie incydentu. Nakazał
              uczestnikom bezzwłoczne opuszczenie ośrodka. Czeskiej policji
              przedstawił fałszywą wersję zdarzeń, twierdząc, że Ilona L.-H.
              była jedynie gościem i została znaleziona martwa w łazience nad
              ranem. Służby początkowo nie nabrały podejrzeń, przyjmując tę
              relację za wiarygodną.
            </p>

            <p>
              Przez kolejne lata tę kłamliwą narrację udawało się skutecznie
              utrzymywać. O nieszczęśliwym wypadku i śmierci z przyczyn
              naturalnych przez długi czas przekonana była nawet najbliższa
              rodzina Ilony.
            </p>

            <p>
              Sytuacja uległa diametralnej zmianie 6 maja 2024 roku, gdy
              Prokuratura Okręgowa w Częstochowie wszczęła oficjalne śledztwo in
              sprawie działalności ośrodka oraz okoliczności śmierci Ilony L.-H.
              Kilka miesięcy po rozpoczęciu intensywnych działań przez polskich
              śledczych, w tajemniczych okolicznościach umiera Wiktor B.
            </p>

            <p>
              Ciało mężczyzny odnaleziono w magazynie firmy, w której pracował
              przy montażu szaf serwerowych. Na jego ciele nie stwierdzono
              widocznych obrażeń wskazujących na użycie siły fizycznej. Mimo że
              od śmierci Wiktora B. minęło już ponad półtora roku, śledczy inciąż
              czekają na wyniki badań toksykologicznych, które mają kluczowe
              znaczenie dla wyjaśnienia, czy w organizmie mężczyzny znajdowały
              się substancje mogące przyczynić się do jego nagłego odejścia. Z
              tego względu obecnie śledztwo w sprawie jego tajemniczego zgonu
              pozostaje zawieszone.
            </p>

            <div className="mb-4 mt-8 flex justify-end">
              <div className="text-right">
                <span className="block font-display font-bold uppercase text-ink">
                  Detektyw Polutek
                </span>
                <span className="mt-1 block font-body text-xs italic text-ink-light">
                  detektyw.polutek@protonmail.com
                </span>
              </div>
            </div>

            <div className="my-12 border-y-[3px] border-ink py-8">
              <h3 className="mb-8 flex items-center gap-2 font-display text-lg font-bold uppercase tracking-widest text-ink">
                <span>🛡️</span>
                Status Prawny (2025/2026)
              </h3>

              <div className="status-grid space-y-4">
                <div className="status-row flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <span className="block font-display font-bold text-ink">
                      Śledztwo w sprawie organizacji ceremonii
                    </span>
                    <span className="mt-1 block font-body text-xs text-ink-light">
                      Prokuratura Rejonowa w Częstochowie
                    </span>
                  </div>
                  <span className="inline-block whitespace-nowrap rounded-sm border border-sepia-light bg-parchment px-3 py-1.5 font-mono text-xs font-bold text-ink shadow-sm">
                    3013-1.Ds.15.2024
                  </span>
                </div>

                <div className="status-row flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <span className="block font-display font-bold text-ink">
                      Śledztwo w sprawie śmierci Ilony Lewandowskiej
                    </span>
                    <span className="mt-1 block font-body text-xs text-ink-light">
                      Prokuratura Rejonowa w Częstochowie
                    </span>
                  </div>
                  <span className="inline-block whitespace-nowrap rounded-sm border border-sepia bg-secondary px-3 py-1.5 font-mono text-xs font-bold text-ink shadow-sm">
                    3013-1.Ds.4.2026
                  </span>
                </div>

                <div className="status-row flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <span className="block font-display font-bold text-ink">
                      Śledztwo w sprawie śmierci Wiktora B.
                    </span>
                    <span className="mt-1 block font-body text-xs text-ink-light">
                      Prokuratura Rejonowa w Pułtusku
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-block whitespace-nowrap rounded-sm border border-sepia-light bg-parchment px-3 py-1.5 font-mono text-xs font-bold text-ink shadow-sm">
                      4027-0. Ds. 1254.2024
                    </span>
                    <span className="font-body text-[10px] font-bold uppercase tracking-tighter text-wine">
                      Śledztwo zawieszone
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center font-body text-sm italic text-ink-medium md:text-left">
                Postępowania toczą się w wymienionych jednostkach Prokuratury.
                Nadzór nad sprawami w Częstochowie objął Zastępca Prokuratora
                Okręgowego, a kluczowe czynności nadzoruje prokurator Jolanta
                Świdnicka.
              </div>
            </div>

            <EvidenceGrid />
          </div>

          <footer className="relative z-10 mt-4 border-none pt-8 font-body">
            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-bold uppercase tracking-widest text-ink">
                <span>🔍</span> Dokumenty Źródłowe
              </h3>
              <div className="gradient-divider mb-6 w-full"></div>
              <p className="text-left font-serif text-base italic text-ink-medium">
                Artykuł powstał na podstawie jawnej dokumentacji urzędowej i
                sądowej. Pełną listę sygnatur oraz odnośniki do baz państwowych
                (Katastr, InfoSoud), umożliwiające samodzielną niezależną
                weryfikację danych.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-ink-medium">
              <div className="source-card rounded border border-sepia-light p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Wyrok <strong>Jarosława Kordysa</strong>
                    </h4>
                    <p className="mt-1 font-mono text-[10px] text-ink-light">
                      Sygn. 30 T 5/2020
                    </p>
                  </div>
                  <a
                    href={KORDYS_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-40 shrink-0 items-center justify-center gap-2 rounded border border-sepia-light bg-parchment px-3 py-1 text-xs font-bold text-ink underline decoration-sepia decoration-double transition-colors hover:bg-secondary"
                  >
                    <span>📄</span> Pobierz PDF
                  </a>
                </div>
                <div className="border-t border-sepia-light pt-2">
                  <a
                    href="https://msp.gov.cz/web/krajsky-soud-v-ostrave/zakladni-informace/-/clanek/informace-rok-2022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-ink-light underline decoration-sepia-light decoration-double hover:text-wine"
                  >
                    <span>🌐</span> Weryfikuj na msp.gov.cz
                  </a>
                </div>
              </div>

              <div className="source-card rounded border border-sepia-light p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Wyrok <strong>Bartosza Badowskiego</strong>
                    </h4>
                    <p className="mt-1 font-mono text-[10px] text-ink-light">
                      Sygn. 66 T 146/2021
                    </p>
                  </div>
                  <a
                    href={BADI_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-40 shrink-0 items-center justify-center gap-2 rounded border border-sepia-light bg-parchment px-3 py-1 text-xs font-bold text-ink underline decoration-sepia decoration-double transition-colors hover:bg-secondary"
                  >
                    <span>📄</span> Pobierz PDF
                  </a>
                </div>
                <div className="border-t border-sepia-light pt-2">
                  <a
                    href="https://msp.gov.cz/documents/22409/2997339/29Si+25-2022+p%C5%99%C3%ADloha+%C4%8D.+1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-ink-light underline decoration-sepia-light decoration-double hover:text-wine"
                  >
                    <span>🌐</span> Weryfikuj oryginał (29 Si 25/2022)
                  </a>
                </div>
              </div>

              <div className="source-card rounded border border-sepia-light p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Historia własności: <strong>Janów</strong>
                    </h4>
                    <p className="mt-1 font-mono text-[10px] text-ink-light">
                      LV 127 | Obręb 656976{" "}
                      <span className="block text-ink-light sm:ml-2 sm:inline">
                        | Koszt: 100 CZK (~17 PLN)
                      </span>
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex w-40 shrink-0 items-center justify-center gap-2 rounded border border-sepia-light bg-parchment px-3 py-1 text-xs font-bold text-ink underline decoration-sepia decoration-double transition-colors hover:bg-secondary"
                  >
                    <span>⬇️</span> Pobierz PDF
                  </a>
                </div>
                <div className="border-t border-sepia-light pt-2">
                  <a
                    href="https://nahlizenidokn.cuzk.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-ink-light underline decoration-sepia-light decoration-double hover:text-wine"
                  >
                    <span>🌐</span> Weryfikuj na nahlizenidokn.cuzk.cz
                  </a>
                </div>
              </div>

              <div className="source-card rounded border border-sepia-light p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Historia własności: <strong>Nýdek</strong>
                    </h4>
                    <p className="mt-1 font-mono text-[10px] text-ink-light">
                      LV 832 | Obręb 708186{" "}
                      <span className="block text-ink-light sm:ml-2 sm:inline">
                        | Koszt: 100 CZK (~17 PLN)
                      </span>
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex w-40 shrink-0 items-center justify-center gap-2 rounded border border-sepia-light bg-parchment px-3 py-1 text-xs font-bold text-ink underline decoration-sepia decoration-double transition-colors hover:bg-secondary"
                  >
                    <span>⬇️</span> Pobierz PDF
                  </a>
                </div>
                <div className="border-t border-sepia-light pt-2">
                  <a
                    href="https://nahlizenidokn.cuzk.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-ink-light underline decoration-sepia-light decoration-double hover:text-wine"
                  >
                    <span>🌐</span> Weryfikuj na nahlizenidokn.cuzk.cz
                  </a>
                </div>
              </div>

              <div className="source-card rounded border border-sepia-light p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Transakcja: Darowizna (<strong>Janów</strong>)
                    </h4>
                    <p className="mt-1 font-mono text-[10px] text-ink-light">
                      Sygnatura: V-5821/2023{" "}
                      <span className="block text-ink-light sm:ml-2 sm:inline">
                        | Koszt: 300 CZK (~52 PLN)
                      </span>
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex w-40 shrink-0 items-center justify-center gap-2 rounded border border-sepia-light bg-parchment px-3 py-1 text-xs font-bold text-ink underline decoration-sepia decoration-double transition-colors hover:bg-secondary"
                  >
                    <span>⬇️</span> Pobierz PDF
                  </a>
                </div>
                <div className="border-t border-sepia-light pt-2">
                  <a
                    href="https://nahlizenidokn.cuzk.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-ink-light underline decoration-sepia-light decoration-double hover:text-wine"
                  >
                    <span>🌐</span> Weryfikuj na nahlizenidokn.cuzk.cz
                  </a>
                </div>
              </div>

              <div className="source-card rounded border border-sepia-light p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Transakcja: Sprzedaż (<strong>Nýdek</strong>)
                    </h4>
                    <p className="mt-1 font-mono text-[10px] text-ink-light">
                      Sygnatura: V-2937/2021{" "}
                      <span className="block text-ink-light sm:ml-2 sm:inline">
                        | Koszt: 300 CZK (~52 PLN)
                      </span>
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex w-40 shrink-0 items-center justify-center gap-2 rounded border border-sepia-light bg-parchment px-3 py-1 text-xs font-bold text-ink underline decoration-sepia decoration-double transition-colors hover:bg-secondary"
                  >
                    <span>⬇️</span> Pobierz PDF
                  </a>
                </div>
                <div className="border-t border-sepia-light pt-2">
                  <a
                    href="https://nahlizenidokn.cuzk.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-ink-light underline decoration-sepia-light decoration-double hover:text-wine"
                  >
                    <span>🌐</span> Weryfikuj na nahlizenidokn.cuzk.cz
                  </a>
                </div>
              </div>

              <div className="source-card rounded border border-sepia-light p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Archiwalna Strona: <strong>Nýdek</strong>
                    </h4>
                    <p className="mt-1 font-mono text-[10px] text-ink-light">
                      Archiwum: tribunydek.com
                    </p>
                  </div>
                  <a
                    href="https://web.archive.org/web/*/tribunydek.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-40 shrink-0 items-center justify-center gap-2 rounded border border-sepia-light bg-parchment px-3 py-1 text-xs font-bold text-ink underline decoration-sepia decoration-double transition-colors hover:bg-secondary"
                  >
                    <span>🕒</span> Wayback Machine
                  </a>
                </div>
              </div>

              <div className="source-card rounded border border-sepia-light p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Archiwalna Strona: <strong>Munay Sonqo</strong>
                    </h4>
                    <p className="mt-1 font-mono text-[10px] text-ink-light">
                      Archiwum: munaysonqo.com (Peru)
                    </p>
                  </div>
                  <a
                    href={MUNAY_WAYBACK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-40 shrink-0 items-center justify-center gap-2 rounded border border-sepia-light bg-parchment px-3 py-1 text-xs font-bold text-ink underline decoration-sepia decoration-double transition-colors hover:bg-secondary"
                  >
                    <span>🕒</span> Wayback Machine
                  </a>
                </div>
              </div>

              <div className="source-card rounded border-y border-l-4 border-r border-sepia-light border-l-wine p-4">
                <div className="mb-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="font-display text-sm font-bold leading-tight text-ink">
                      Artykuł:{" "}
                      <strong>
                        Szamańskie ceremonie, tajemnicza śmierć i miliarderzy od
                        &quot;Wiedźmina&quot;
                      </strong>
                      ,{" "}
                      <span className="font-medium text-ink-medium">
                        Onet.pl
                      </span>
                    </h4>
                    <p className="font-mono mt-1 text-[10px] uppercase tracking-wider text-ink-light">
                      Opublikowano: 3 marca 2026
                    </p>
                  </div>
                  <div className="flex w-40 shrink-0 cursor-default items-center justify-center gap-2 rounded border border-sepia-light bg-secondary px-3 py-1 text-xs font-bold text-ink-light">
                    <span>🔗</span> Link nieaktywny
                  </div>
                </div>
                <div className="border-t border-sepia-light pt-2 font-mono text-[10px] italic text-ink-light">
                  Źródło:
                  onet.pl/wiadomosci/kraj/szamanskie-ceremonie-tajemnicza-smierc-i-miliarderzy-od-wiedzmina
                </div>
              </div>
            </div>

            <div className="mt-8 pb-12 text-center">
              <div className="mx-auto mb-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-wine to-transparent"></div>

              <div className="mb-10 rounded-sm border border-sepia-light bg-parchment-warm/50 p-6 text-center">
                <h3 className="mb-4 flex items-center justify-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-ink">
                  <span>🛡️</span> Mirror &ndash; Kopia Zapasowa Dokumentacji
                </h3>
                <p className="mx-auto mb-4 max-w-lg font-body text-xs leading-relaxed text-ink-medium">
                  W celu zapewnienia niezniszczalności dowodów, pełna
                  dokumentacja śledztwa (akty oskarżenia, wyroki, zeznania)
                  została zarchiwizowana w sieciach zdecentralizowanych.
                  Materiał jest odporny na próby cenzury i usuwania.
                </p>
                <div className="grid gap-3 font-mono text-[10px] uppercase tracking-wider">
                  <a
                    href="ipfs://bafybeicnxl_pelna_dokumentacja_wiedzmin_gate"
                    className="font-bold text-ink underline decoration-sepia decoration-double hover:bg-parchment-warm"
                  >
                    IPFS: Baza Dowodowa (Full Archive)
                  </a>
                  <a
                    href="https://arweave.net/eliksir-wiedzmina-dokumentacja"
                    className="font-bold text-ink underline decoration-sepia decoration-double hover:bg-parchment-warm"
                  >
                    Arweave: Trwała Archiwizacja
                  </a>
                  <a
                    href="https://github.com/detektyw-polutek/eliksir-mirror"
                    className="font-bold text-ink underline decoration-sepia decoration-double hover:bg-parchment-warm"
                  >
                    GitHub: Source Mirror
                  </a>
                </div>
              </div>

              <p className="mb-2 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-medium">
                <span>🌐</span>
                Oficjalna Witryna
              </p>
              <a
                href="https://www.eliksir-wiedzmina.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-bold text-wine underline decoration-sepia decoration-double transition-colors hover:bg-parchment-warm"
              >
                www.eliksir-wiedzmina.pl
              </a>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
