// All site content lives here. Edit this file to add, remove or reorder work.
// Images: paths are relative to IMG_BASE (Cargo's image server for now).
// When you move your own files into /img, set IMG_BASE = "img/" and use filenames.
const IMG_BASE = "https://freight.cargo.site/";
// get-media.command downloads every file into /img and flips this to true,
// so the site stops depending on Cargo.
const USE_LOCAL = false;

const WORKS = [
  { slug:"silicon-stanford", title:"SILICON Stanford", year:2026, ctx:"Stanford University",
    text:"Visual identity for SILICON, the Stanford initiative on language inclusion and conservation in old and new media, carried across event posters, social media, interview features, speaker portraits, business cards and partner lockups.", made:"Identity system: posters, social media, portraits, stationery", medium:"screen",
    cover:"w/1000/q/75/i/J3200289598724638754725219406779/Logotype.png", media:[] },
  { slug:"so-short", title:"So Short Film Festival", year:2026, ctx:"Meanwhile Getting Meaner",
    text:"Motion and static flyers for a one-night screening of animated shorts at Nightclub 101, New York. The program leaned on dominant femininity and humiliation humor, hosted by three comedians, with films by animators from both coasts. Promotional content made with Isabella Mendoza, Mia Culpa and Lal Diltemiz. Thanks to Noah Grossman.", made:"After Effects, InDesign; wheatpasted on East Broadway", medium:"screen",
    cover:"w/500/q/75/i/X3167360126209237268253888091067/Comp7_7-ezgif.com-optimize.gif",
    media:["w/1206/q/75/i/W3200136148008322075923337581499/709A1FE9-9FD2-468E-B8DB-4FED1F1E37E9.JPG",
      "m/W3200121766742174771219802231739/Adobe-Express---Isa----Render_1.mp4",
      "m/P3200135592632198248749867078587/Mia---Render_3.mp4",
      "m/J3200135639154886802645356254139/Mia---Render_4.mp4",
      "w/1206/q/75/i/J3200136378149901139523703542715/905A9663-FE0A-4C1E-87AE-10196AFCD298.JPG",
      "w/1206/q/75/i/J3200136290712334230140428882875/ADBC96AB-F6D4-49C4-936C-F6DC2F2E4788.JPG",
      "m/K3200122114020578702875820954555/Comp-7_1.MP4"] },
  { slug:"last-shot", title:"Last Shot", year:2026, ctx:"Meanwhile Getting Meaner",
    text:"Flyers for an end-of-summer party in Los Angeles, wheatpasted around Echo Park.", made:"Illustrator, InDesign; Riso printed at Riso Studio Arts", medium:"press",
    cover:"w/500/q/75/i/A3117271996432199715056561034171/-00011-ezgif_com-video-to-gif-converter.png",
    media:["w/1500/q/75/i/C3117275062004363604478396339131/DSC05120.JPG",
      "w/800/q/75/i/C3117290311355840273879721186235/IMG_45782-ezgif.com-optimize.gif"] },
  { slug:"generational-cursive-panera-bred", title:"Generational Cursive: Panera Bred", year:2026, ctx:"Meanwhile Getting Meaner",
    text:"Flyers and motion assets for a night of talks on recursive aesthetics in Los Angeles: the second chapter of Generational Cursive, a series on how commercial aesthetics evolve. With the Consumer Aesthetics Research Institute.", made:"InDesign, After Effects, Illustrator, Cathodemer", medium:"screen",
    cover:"w/500/q/75/i/A3069685637790504785966169723835/Comp4-ezgif.com-optimize-1.gif",
    media:["w/1500/q/75/i/W3069701243809778120541675066299/Generational-Cursive-August-13th-Flyer.jpg",
      "w/960/q/75/i/V3069702225545497723364012069819/Comp-2_13.jpg",
      "w/1512/q/75/i/I3083845781488432359799210775483/IMG_3993.jpeg",
      "w/800/q/75/i/E3069702392082703220813844059067/Comp4-ezgif.com-optimize-1.gif"] },
  { slug:"turtle-talk", title:"Turtle Talk", year:2026, ctx:"Farewell NYC",
    text:"A series of zines on turtles and tortoises for the Turtle Conservancy in Ojai, California.", made:"Photocopy zines", medium:"press",
    cover:"w/500/q/75/i/C3117259650376879318654145926075/ezgif.com-optimize-2.gif",
    media:["w/1500/q/75/i/R3080518984778800952192666571707/Untitled-10.jpg",
      "w/600/q/75/i/F3080519243660407282632513950651/Untitled-9.jpg",
      "w/600/q/75/i/U3080519642645034852896405853115/Untitled-11.jpg",
      "w/1920/q/75/i/E3117266493731549039349894878139/ezgif.com-optimize-3.gif",
      "w/800/q/75/i/L3117267595278871400915769627579/ezgif.com-gif-maker-3.gif"] },
  { slug:"in-conversation-artifacts", title:"In Conversation: Artifacts", year:2026, ctx:"Not That Deep Gallery",
    text:"Organized and moderated a talk at Not That Deep Gallery, Brooklyn, and made the posters and brochures for it.", made:"Six-color print at Center for Book Arts", medium:"press",
    cover:"w/500/q/75/i/P3078913520499007441528569074619/3.png",
    media:["w/1500/q/75/i/X3080498842631372916143580648379/Untitled-8.jpg",
      "w/1500/q/75/i/Y3080493816981970730639628833723/Untitled-6.jpg",
      "w/1500/q/75/i/F3080498328354594885194991145915/Untitled-4.jpg",
      "w/1500/q/75/i/L3080498418319365732676474377147/Untitled-3.jpg",
      "w/1500/q/75/i/N3080656616821778614695332025275/IMG_3043.jpg",
      "w/1500/q/75/i/K3080500369191678735977524630459/Untitled-5.jpg"] },
  { slug:"hooked", title:"Hooked", year:2026, ctx:"Meanwhile Getting Meaner",
    text:"A conceptual rap event built on aquatic myth: a shipment lost in 1826 resurfaces 200 years later, and the music crosses borders and languages with it.", made:"InDesign, After Effects, Illustrator, Cathodemer (CRT simulator); animation by Noah Grossman", medium:"screen",
    cover:"w/800/q/75/i/Q3069685893056549277958944986043/HookedTrailer-ezgif.com-optimize.gif", media:[] },
  { slug:"java-mixtape", title:"Java Mixtape by Kenopro79", year:2026, ctx:"Kenopro79",
    text:"Cover for Kenopro79’s mixtape What Was Awesome, after the Global Village Coffeehouse aesthetic.", made:"", medium:"screen",
    cover:"w/500/q/75/i/I3078907807819068974786076873659/Java-Mixtape_-What-Was-Awesome-_-Kenopro79.jpeg",
    media:["w/1500/q/75/i/K3080463376792089593643676865467/Screenshot-2026-08-12-at-11.43.19AM.png",
      "w/507/q/75/i/A3080482273304677308381580366779/Kenpro-Java-Mixtape-Cover-2.jpg",
      "w/748/q/75/i/F3080482522464849511976494044091/Kenpro-Java-Mixtape-Cover.jpg",
      "w/847/q/75/i/L3080482373802539021951217570747/Kenpro-Java-Mixtape-Cover-3.jpg",
      "w/681/q/75/i/P3080482522391062535681655837627/Kenpro-Java-Mixtape-Cover-4.jpg",
      "w/1500/q/75/i/F3080469628319869197515881321403/iiuuu.PNG"] },
  { slug:"generational-cursive", title:"Generational Cursive", year:2026, ctx:"Amma Cafe",
    text:"Flyers and promotional content for a conversation on the Global Village Coffeehouse aesthetic at Amma Cafe, Ridgewood.", made:"", medium:"screen",
    cover:"w/600/q/75/i/Z3072982284625113288617685291963/AQMrCfkkZG23AJaTshVLm3xwsrfu-Y7WVow_HpAicUS-0WucliMVyygbrtgDoC095GR_srWI2JV99ly90b-dJJFT4hM8VcrAsIEXOdM-ezgif.com-video-to-gif-converter.gif", media:[] },
  { slug:"time-capsule-posters", title:"Time Capsule Posters", year:2026, ctx:"Instructor: Elliott Walker",
    text:"A self-reflective archive of being a design student at this specific moment. Instead of a polished narrative it documents uncertainty, urgency and contradiction, built from conversations, personal notes, peer contributions and fragments of daily life: a collective snapshot rather than a single voice.", made:"Poster series, print", medium:"press",
    cover:"https://sva.design/image/project/uploads/upload-51650-1582378__DefneAyaz_TimeCapsule2026_01.jpg",
    media:["https://sva.design/image/project/uploads/upload-54272-1582378__DefneAyaz_TimeCapsule2026_02.jpg",
      "https://sva.design/image/project/uploads/upload-54285-1582378__DefneAyaz_TimeCapsule2026_03.jpg",
      "https://sva.design/image/project/uploads/upload-54283-1582378__DefneAyaz_TimeCapsule2026_05.jpg",
      "https://sva.design/image/project/uploads/upload-54286-1582378__DefneAyaz_TimeCapsule2026_06.jpg",
      "https://sva.design/image/project/uploads/upload-54284-1582378__DefneAyaz_TimeCapsule2026_07.jpg"] },
  { slug:"take-off-your-shoes", title:"Take Off Your Shoes", year:2026, ctx:"Instructor: Peter Ahlberg",
    text:"The first issue of a publication series built on personal narrative.", made:"Four-color Riso, 120 pages, wire binding", medium:"press",
    cover:"w/500/q/75/i/W3077308066383369915478434517947/upload-54137-toys-ezgif.com-video-to-gif-converter-1.gif",
    media:["w/1500/q/75/i/M3080677527700372434442562442171/Untitled-13.jpg",
      "w/1080/q/75/i/D3088890135686194420425558987707/take-off-your-shoes--1--this-project-started-as-a-search-to-document-and-express-a-month-through.avif",
      "w/1500/q/75/i/A3091497753445821994770156622779/img20260220_18574966.JPG",
      "w/1500/q/75/i/V3091498098252362220549095429051/img20260220_19020201.JPG",
      "w/1500/q/75/i/O3091493689369848139524001895355/img20260220_19070492.JPG",
      "w/1500/q/75/i/U3091495750424563495092203951035/img20260220_19134661.JPG",
      "w/1500/q/75/i/R3091498685633587015608637985723/img20260220_19151699.JPG",
      "w/1500/q/75/i/I3091500769008862700365397496763/img20260220_19170262.JPG",
      "w/1500/q/75/i/C3091497983790315243181327651771/img20260220_19012838.JPG",
      "w/1500/q/75/i/L3091494397743267314044493501371/img20260220_19062343.JPG",
      "w/1500/q/75/i/N3091496102775822047018349368251/img20260220_19094231.JPG",
      "w/1500/q/75/i/Q3091498327969666170454141703099/img20260220_19141779.JPG",
      "w/1500/q/75/i/B3091499270118672991095780938683/img20260220_19154577.JPG",
      "w/1500/q/75/i/M3091500895571973790086631134139/img20260220_19173960.JPG",
      "w/1500/q/75/i/Z3091500489964965097361010201531/img20260220_19162120.JPG",
      "m/B3088890126757970288750136005563/take-off-your-shoes--1--this-project-started-as-a-search-to-document-and-express-a-month-through.mp4"] },
  { slug:"egon-schiele-semi-nude", title:"Egon Schiele: Semi/Nude", year:2026, ctx:"Instructor: Peter Ahlberg",
    text:"A book collecting drawings by Egon Schiele.", made:"Offset book", medium:"press",
    cover:"w/500/q/75/i/M2954168077672652787826969940923/3200x1920.png",
    media:["w/800/q/75/i/O3081073843803498251437018583995/ezgif.com-optimize.gif",
      "w/1500/q/75/i/S2944085571035592759578107712443/uu.jpg",
      "w/1500/q/75/i/W3089620941674328145039017776059/Scan-2.JPG",
      "w/1500/q/75/i/E3089621015018582582108195001275/Scan-3.JPG",
      "w/1500/q/75/i/S3089621580540415649821918892987/Scan-23.JPG",
      "w/1500/q/75/i/P3089621632265086032503501624251/Scan-56.JPG",
      "w/1500/q/75/i/C3089621728889131490594132988859/Scan-85.JPG",
      "w/1500/q/75/i/S3089623386365980001544764789691/Scan-1.jpg",
      "w/1500/q/75/i/N2944818985098190601542812177339/3200x1920-full-sinnnze.jpg"] },
  { slug:"ambient-1", title:"Ambient 1: Music For Airports", year:2026, ctx:"Instructor: Elliott Walker",
    text:"Vinyl packaging for Brian Eno’s Ambient 1: Music for Airports.", made:"Vinyl sleeve and label", medium:"press",
    cover:"w/500/q/75/i/J2954157024641858238095575356347/ezgif.com-resize-5.gif",
    media:["w/800/q/75/i/B3091512694607545424706002621371/ezgif.com-video-to-gif-converter-5.gif",
      "w/800/q/75/i/R3091508748111118295284529894331/ezgif.com-video-to-gif-converter-3.gif",
      "w/800/q/75/i/O3091512189683266639128155788219/ezgif.com-video-to-gif-converter-4.gif",
      "m/M3091508206477818803024675345339/ezgif.com-gif-to-mp4-converter-15-2.MP4",
      "w/1500/q/75/i/Q3091508816954367178368576525243/ezgif.com-video-to-gif-converter-2.gif"] },
  { slug:"twenty-love-poems", title:"Twenty Love Poems", year:2025, ctx:"Instructor: Peter Ahlberg",
    text:"A book design for Pablo Neruda’s Twenty Love Poems and a Song of Despair.", made:"Book", medium:"press",
    cover:"w/800/q/75/i/J3077278455466868612095375446971/upload-51648-1582378_DefneAyaz_TwentyLovePoems2025-ezgif.com-video-to-gif-converter.gif", media:["w/1500/q/75/i/Y3091607749037997027465329775547/img20250420_17225524.jpg",
      "w/1500/q/75/i/S3091608246417557486895969997755/1_0046_Layer-1.jpg",
      "w/1500/q/75/i/E3091608124300111718938738299835/1_0045_Layer-47.jpg",
      "w/1500/q/75/i/Q3081104051804211732650844361659/DSC04533.JPG",
      "w/1500/q/75/i/C3081093171896110314683591693243/upload-51648-1582378_DefneAyaz_TwentyLovePoems20251-ezgif.com-video-to-gif-converter.gif"] },
  { slug:"caldera-candle", title:"Caldera Candle", year:2024, ctx:"Instructor: Alli Truch",
    text:"Packaging for a candle with an earthy, musky scent.", made:"3D-printed inner case, metallic embossed outer box", medium:"press",
    cover:"w/480/q/75/i/R3077275379214039903995709756347/project-11111-y.jpg",
    media:["w/1500/q/75/i/O3091628051303163623313323725755/DSC04407.JPG",
      "w/1500/q/75/i/Q3091625598292030189564568933307/IMG_9323.png",
      "w/1500/q/75/i/I3091620365024523454459613680571/13.png",
      "w/1500/q/75/i/A3091627918707967221489066709947/4.png"] },
  { slug:"opposite-posters", title:"Opposite Posters", year:2024, ctx:"Instructor: Tom Geismar, Sagi Haviv, Mika Owens",
    text:"Posters on opposites: ancient sculptural motifs merged with ASCII art, digital against analog, old against new. Classical imagery transformed by computational means sets historical permanence against the ephemeral nature of digital media.", made:"Poster series, print", medium:"press",
    cover:"https://sva.design/image/project/uploads/upload-54291-oppposites1.jpg",
    media:["https://sva.design/image/project/uploads/upload-54290-oppposites2.jpg",
      "https://sva.design/image/project/uploads/upload-54289-oppposites3.jpg"] },
  { slug:"grotesk", title:"Grotesk", year:2025, ctx:"Instructor: Robert Best",
    text:"A magazine about absurdity culture and elevated aesthetics.", made:"Magazine", medium:"press",
    cover:"w/500/q/75/i/E3077277594612662924291730183099/upload-51649-115.jpg",
    media:["w/1500/q/75/i/V3091608546730551006887470306235/1_2.png",
      "w/1500/q/75/i/I3091695606102313390968902915003/dddd.jpg",
      "w/1500/q/75/i/G3091672290543055610591942939579/YETER10.png",
      "w/1500/q/75/i/Q3091672364256244929135311197115/YETER11.png",
      "w/1500/q/75/i/T3091671212404651478563489190843/YETER3.png",
      "w/1500/q/75/i/M3091671339096889776800689689531/YETER6.png",
      "w/1500/q/75/i/J3091671268482753462640526103483/YETER5.png"] },
  { slug:"press-color", title:"Press Color", year:2025, ctx:"Instructor: Peter Ahlberg",
    text:"Album packaging for Lizzy Mercier Descloux’s Press Color, first released in 1979.", made:"LP sleeve and label", medium:"press",
    cover:"w/480/q/75/i/R3077275522342327171908120744891/project-11109-l.jpg",
    media:["w/1500/q/75/i/U3080673782919091751035036636091/IMG_1828.jpg",
      "w/1500/q/75/i/M3081186503105517527791445087163/DSC04652.JPG",
      "w/1920/q/75/i/O3091665735621676226418743055291/ezgif.com-optimize-1.gif",
      "w/1500/q/75/i/Q3081096780687993686704302986171/IMG_1831.jpg"] }
];

// Updates: [title, kind, year, media, link, text]. Newest first.
const UPDATES = [
  ["so short: posters wheatpasted, east broadway","flyer",2026,"w/1500/q/75/i/Q3200165292775600636666027316155/709A1FE9-9FD2-468E-B8DB-4FED1F1E37E9.JPG","https://www.instagram.com/p/Dc1MRMphU57/"],
  ["last shot: posters wheatpasted, echo park","flyer",2026,"w/1500/q/75/i/K3117296245507388089579090088891/DSC05123.JPG","https://www.instagram.com/p/Dc1MRMphU57/"],
  ["deepfakes of culture: evolution of tech and consumer aesthetics #1","presentation",2026,"w/1500/q/75/i/V3083719367427034754138750456763/Defne-Ayaz_GVC-Presentation_8.13.jpg","https://drive.google.com/file/d/1_GPXO31TA55-X0Jt17P1JpvA6APRVugH/view?usp=sharing"],
  ["turtle talk research #1","document",2026,"w/1000/q/75/i/A3080561896277394746078889120699/ScreenRecording2026-07-02at3.04.21PM-ezgif.com-video-to-gif-converter.gif","https://docs.google.com/document/d/1ZYEAMVcv7pjar_tcAYjMoZlQylQY47lKi5k3tl4VxMg/edit?usp=sharing"],
  ["in conversation: artifacts #0","poster",2026,"w/1500/q/75/i/A3080977326970516717205567968187/IMG_3043.jpg"],
  ["in conversation: artifacts #1","event",2026,"w/1500/q/75/i/Q3080975687387009957753201234875/DSC01202.jpg"],
  ["in conversation: artifacts #2","event",2026,"w/1500/q/75/i/P3080976290872242329161182352315/DSC01232.jpg"],
  ["sva career fair #1","table",2026,"w/1500/q/75/i/P3081064371326629425287425561531/IMG_0074.jpg"],
  ["riso printing: t.o.y.s #1","editorial",2026,"w/1500/q/75/i/C3080978345802638652257813271483/IMG_7121.jpg"],
  ["riso printing: t.o.y.s #2","editorial",2026,"w/1500/q/75/i/L3080979285037059909253343351739/Untitled-13.jpg"],
  ["new orleans #1","video art",2026,"w/1000/q/75/i/X3080988656905386557391041860539/bagbagbagnola2-ezgif.com-video-to-gif-converter.gif","https://www.instagram.com/reel/Db4XCOjqHa6/"],
  ["untitled #2","video art",2025,"m/L3073007491639721410877229765563/pes-et.mp4"],
  ["critoris #3","editorial",2025,"w/1500/q/75/i/X2979195699557779373426642654139/img20240318_23070300.jpeg","https://archive.org/details/critoris-week-3_202606"],
  ["critoris #1","editorial",2025,"w/1500/q/75/i/B2979286091407645649433412899771/IMG_9860.jpg","https://archive.org/details/critoris-week-1-copy"],
  ["opposite posters","poster series",2025,"w/500/q/75/i/V3080983928728179304527319405499/IMG_9267-ezgif.com-video-to-gif-converter.gif","https://sva.design/projects/20444/opposite-posters/"],
  ["decore","3D printed keychain",2024,"w/1500/q/75/i/Q2979279401253185460895490118587/IMG_1335.jpg","","A collection of apparel made from script typefaces. Instructor: Peter Ahlberg."],
  ["taycan #1","moving image",2024,"w/1000/q/75/i/V3080680441142237947981725569979/3e6ee240-66bf-40a0-a06e-4bc8495fe9cf.jpg","https://www.instagram.com/put_out_istanbul/"],
  ["lucky 7 matchboxes","packaging design",2024,"w/1000/q/75/i/B2979195985795907165177755079611/IMG_0993.jpg"]
];
// each update entry is printed in its own pair of inks
const UPDATE_PRINT = [["silver","orange"],["pink","purple"],["mint","orange"],["flgreen","black"],["cornflower","red"],["purple","lime"],
  ["federal","aqua"],["warm","red"],["florange","pink"],["sunflower","burgundy"],["teal","mint"],["orange","blue"],["lime","pink"],["black","gold"]];

const AWARDS = [
  ["Communication Arts Award of Excellence, 2026 Design Annual",2026],
  ["SVA BFA Design & Advertising ‘Debut 26’ Show",2026],
  ["SVA BFA Design & Advertising ‘Debut 25’ Show",2025],
  ["Graphic New Talent Awards, Honorary Mention ×3",2025],
  ["SVA BFA Design & Advertising Top Percentile Portfolio",2025],
  ["SVA BFA Design & Advertising Top Percentile Portfolio",2024],
  ["SVA Silas M. Rhodes Scholarship",2022]
];

// Projects with files in your own folder: these replace the Cargo images, in your folder's order (1 = cover).
const LOCAL_MEDIA = {
 "so-short": [
  "1.mp4",
  "2.jpg",
  "3.mp4",
  "4.mp4",
  "5.mp4",
  "7.jpg",
  "8.jpg"
 ],
 "last-shot": [
  "1.jpg",
  "2.mp4"
 ],
 "in-conversation-artifacts": [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg"
 ],
 "egon-schiele-semi-nude": [
  "1.mp4",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg"
 ],
 "twenty-love-poems": [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.mp4"
 ],
 "press-color": [
  "1.jpg",
  "2.jpg",
  "3.mp4",
  "4.jpg"
 ],
 "grotesk": [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg"
 ],
 "generational-cursive": ["1.mp4","2.mp4","4.mp4","5.mp4","6.mp4","7.mp4","8.mp4","9.mp4","11.mp4","12.mp4","13.mp4"],
 "silicon-stanford": ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","17.jpg","09.jpg","10.jpg","p-logo.jpg","07.jpg","c1-2.jpg","c1-3.jpg","c1-4.jpg","c1-5.jpg","06.jpg","c2-2.jpg","c2-3.jpg","c2-4.jpg","08.jpg","s1-2.jpg","s1-3.jpg","s1-4.jpg","s2-1.jpg","s2-2.jpg","s2-3.jpg","s2-4.jpg","s2-5.jpg","16.jpg","e-2.jpg","e-3.jpg","e-5.jpg","12.jpg","13.jpg","14.jpg","15.jpg","21.jpg","bc-2.jpg","22.jpg","k-1.jpg","k-2.jpg","k-3.jpg","ig-profile.jpg","ig-post-1.jpg","ig-post-2.jpg","ig-post-3.jpg","sheet.jpg"],
 "hooked": [
  "1.mp4",
  "2.mp4",
  "3.mp4",
  "4.mp4",
  "5.mp4",
  "6.mp4",
  "7.mp4",
  "8.mp4",
  "9.mp4",
  "10.mp4",
  "11.mp4",
  "12.mp4"
 ]
};
// Sections: group a project's page by application. Each entry is [title, [files from LOCAL_MEDIA]].
// kind: "wide" one big piece · "grid" a loose grid · "set" a carousel or story sequence shown together as one numbered set
const SECTIONS = {
  "silicon-stanford": [
    ["Logotype", "wide", ["01.jpg"]],
    ["Posters", "grid", ["02.jpg","03.jpg","04.jpg","05.jpg","17.jpg"]],
    ["Social posts", "grid", ["09.jpg","10.jpg","p-logo.jpg"]],
    ["Carousel: On Explorations of Global Language Justice", "set", ["07.jpg","c1-2.jpg","c1-3.jpg","c1-4.jpg","c1-5.jpg"]],
    ["Carousel: Interview with Manuel López Rocha", "set", ["06.jpg","c2-2.jpg","c2-3.jpg","c2-4.jpg"]],
    ["Story: Interview with Manuel López Rocha", "set", ["08.jpg","s1-2.jpg","s1-3.jpg","s1-4.jpg"]],
    ["Story: On Explorations of Global Language Justice", "set", ["s2-1.jpg","s2-2.jpg","s2-3.jpg","s2-4.jpg","s2-5.jpg"]],
    ["Story: Face/Interface 2026", "set", ["16.jpg","e-2.jpg","e-3.jpg","e-5.jpg"]],
    ["Speaker portraits", "small", ["12.jpg","13.jpg","14.jpg","15.jpg"]],
    ["Stationery & partnerships", "grid", ["21.jpg","bc-2.jpg","22.jpg","k-1.jpg","k-2.jpg","k-3.jpg"]],
    ["On Instagram, @stanfordsilicon", "grid", ["ig-profile.jpg","ig-post-1.jpg","ig-post-2.jpg","ig-post-3.jpg"]],
    ["Full set", "wide", ["sheet.jpg"]]
  ]
};
// Hover thumbnails in the index, where they should differ from the project page's first image
const THUMBS = { "twenty-love-poems": "img/twenty-love-poems/6.mp4" };
// Links, as on the Cargo site
const LINKS = {
  "silicon-stanford": [["silicon.stanford.edu","https://silicon.stanford.edu/"],["Instagram","https://www.instagram.com/stanfordsilicon"]],
  "so-short": [["Meanwhile Getting Meaner","https://meanwhilegettingmeaner.com/"],["Noah Grossman","https://www.instagram.com/noahgrossmantrial/"]],
  "last-shot": [["Meanwhile Getting Meaner","https://meanwhilegettingmeaner.com/"],["Riso Studio Arts","https://www.risostudioarts.com/"],["Event post 1","https://www.instagram.com/p/Dcy-qDogens/?img_index=1"],["Event post 2","https://www.instagram.com/p/Dc4Jn7rGzV7/?img_index=1"]],
  "generational-cursive-panera-bred": [["Meanwhile Getting Meaner","https://meanwhilegettingmeaner.com/"],["Event","https://www.instagram.com/p/Dbtqd1xkhz_/?img_index=1"],["Consumer Aesthetics Research Institute","https://cari.institute/"]],
  "turtle-talk": [["Turtle Conservancy","https://www.turtleconservancy.org/"]],
  "in-conversation-artifacts": [["Event","https://www.instagram.com/p/Daloz__KGXZ/"],["Center for Book Arts","https://centerforbookarts.org/"]],
  "press-color": [["sva.design","https://sva.design/projects/19932/press-color/"]],
  "grotesk": [["sva.design","https://sva.design/projects/19936/grotesk/"]],
  "caldera-candle": [["sva.design","https://sva.design/projects/19933/caldera-candle/"]],
  "twenty-love-poems": [["sva.design","https://sva.design/projects/19935/twenty-love-poems/"]],
  "time-capsule-posters": [["sva.design","https://sva.design/projects/19937/"]],
  "opposite-posters": [["sva.design","https://sva.design/projects/20444/opposite-posters/"]],
  "take-off-your-shoes": [["sva.design","https://sva.design/projects/20419/take-off-your-shoes/"]],
  "hooked": [["Meanwhile Getting Meaner","https://meanwhilegettingmeaner.com/"],["Event","https://www.instagram.com/p/DbT8TKdxm1E/"],["Noah Grossman","https://www.instagram.com/noahgrossmantrial/"]],
  "java-mixtape": [["Kenopro79","https://www.instagram.com/kenopro79/"],["Bandcamp","https://enpitsu.bandcamp.com/album/java-mixtape-what-was-awesome"]]
};
WORKS.forEach(w => {
  const l = LOCAL_MEDIA[w.slug];
  if (l) { w.cover = `img/${w.slug}/${l[0]}`; w.media = l.slice(1).map(f => `img/${w.slug}/${f}`); }
  w.links = LINKS[w.slug] || [];
  w.thumb = THUMBS[w.slug] || w.cover;
  w.sections = (SECTIONS[w.slug] || []).map(([t, kind, files]) => [t, kind, files.map(f => `img/${w.slug}/${f}`)]);
});

// A shared ink set (riso drum colours). Every project is "printed" in two inks:
// a = ground, b = second ink (frame, highlights), t = text colour on the ground.
const INK = {
  pink:"#ff48b0", orange:"#ff6c2f", flgreen:"#44d62c", yellow:"#ffe800", blue:"#0078bf",
  cornflower:"#62a8e5", mint:"#82d8d5", aqua:"#5ec8e5", purple:"#765ba7", lime:"#e3ed55",
  federal:"#3d5588", sunflower:"#ffb511", burgundy:"#914e72", red:"#f15060", florange:"#ff7477",
  teal:"#00838a", silver:"#b9b9b5", gold:"#ac936e", warm:"#d9d3c7", black:"#1a1a1a"
};
const PRINT = {
  "silicon-stanford":                 ["#141414","#f65530","#fff"],
  "so-short":                         ["pink","purple","#000"],
  "last-shot":                        ["#f0d3e1","#a93577","#000"],
  "generational-cursive-panera-bred": ["yellow","pink","#000"],
  "turtle-talk":                      ["flgreen","black","#000"],
  "in-conversation-artifacts":        ["mint","orange","#000"],
  "hooked":                           ["#08082f","#6e50eb","#fff"],
  "java-mixtape":                     ["sunflower","burgundy","#000"],
  "generational-cursive":             ["purple","lime","#fff"],
  "time-capsule-posters":             ["#c9a6e8","#f2a64a","#000"],
  "opposite-posters":                 ["#e36aa6","#6fe39a","#000"],
  "take-off-your-shoes":              ["#f39727","#1a1a1a","#000"],
  "egon-schiele-semi-nude":           ["#e4cfc9","#2e2e2c","#000"],
  "ambient-1":                        ["#0f0e0d","#d2b68f","#fff"],
  "twenty-love-poems":                ["#f4b6a8","#0b0d0f","#000"],
  "caldera-candle":                   ["black","gold","#fff"],
  "grotesk":                          ["lime","pink","#000"],
  "press-color":                      ["#131313","#edd204","#fff"]
};
// a value can be an ink name from the set above, or a colour sampled straight from the project
WORKS.forEach(w => { const p = PRINT[w.slug] || ["silver","black","#000"]; w.a = INK[p[0]] || p[0]; w.b = INK[p[1]] || p[1]; w.t = p[2]; });
