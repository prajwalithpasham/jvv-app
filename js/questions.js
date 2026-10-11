/* =========================================================
   questions.js
   Chekumukhi Science Talent Test — question dataset.

   Exactly 50 original, age-appropriate MCQs for Classes 8-10,
   each with English + Telugu text for the question and all
   four options, a predefined correct option, a short
   explanation (also bilingual), and a topic category.

   This is a demonstration question bank prepared for the
   prototype. JVV should review and replace/extend it with
   officially approved Chekumukhi questions before any real
   examination use.
   ========================================================= */

const CHEKUMUKHI_QUESTIONS = [
  {
    id: "q001",
    topic: "Physics",
    en: "Which force pulls objects towards the centre of the Earth?",
    te: "వస్తువులను భూమి కేంద్రం వైపుకు లాగే శక్తి ఏది?",
    options: [
      { id: "a", en: "Magnetic force", te: "అయస్కాంత శక్తి" },
      { id: "b", en: "Gravitational force", te: "గురుత్వాకర్షణ శక్తి" },
      { id: "c", en: "Frictional force", te: "ఘర్షణ శక్తి" },
      { id: "d", en: "Electric force", te: "విద్యుత్ శక్తి" }
    ],
    correct: "b",
    explanation_en: "Gravity is the force of attraction between any two masses; Earth's gravity pulls objects towards its centre.",
    explanation_te: "గురుత్వాకర్షణ అనేది ఏదైనా రెండు ద్రవ్యరాశుల మధ్య ఉండే ఆకర్షణ శక్తి; భూమి గురుత్వాకర్షణ వస్తువులను దాని కేంద్రం వైపుకు లాగుతుంది."
  },
  {
    id: "q002",
    topic: "Physics",
    en: "What is the SI unit of electric current?",
    te: "విద్యుత్ ప్రవాహానికి SI ప్రమాణం ఏది?",
    options: [
      { id: "a", en: "Volt", te: "వోల్ట్" },
      { id: "b", en: "Ohm", te: "ఓమ్" },
      { id: "c", en: "Ampere", te: "ఆంపియర్" },
      { id: "d", en: "Watt", te: "వాట్" }
    ],
    correct: "c",
    explanation_en: "Electric current is measured in amperes (A), named after André-Marie Ampère.",
    explanation_te: "విద్యుత్ ప్రవాహాన్ని ఆంపియర్లలో (A) కొలుస్తారు, ఇది ఆండ్రే-మేరీ ఆంపియర్ పేరు మీద పెట్టబడింది."
  },
  {
    id: "q003",
    topic: "Physics",
    en: "A simple mirror that curves inward, like the inside of a spoon, is called a:",
    te: "చెంచా లోపలి భాగంలా లోపలికి వంగి ఉండే సాధారణ అద్దాన్ని ఏమంటారు?",
    options: [
      { id: "a", en: "Convex mirror", te: "పుటాకార (కాన్వెక్స్) అద్దం" },
      { id: "b", en: "Concave mirror", te: "పుటాకార (కాన్కేవ్) అద్దం" },
      { id: "c", en: "Plane mirror", te: "సమతల అద్దం" },
      { id: "d", en: "Cylindrical lens", te: "స్థూపాకార కటకం" }
    ],
    correct: "b",
    explanation_en: "A concave mirror curves inward and can converge light rays, unlike a convex mirror which curves outward.",
    explanation_te: "పుటాకార (కాన్కేవ్) అద్దం లోపలికి వంగి ఉండి కాంతి కిరణాలను ఒకే బిందువు వద్ద కేంద్రీకరించగలదు."
  },
  {
    id: "q004",
    topic: "Physics",
    en: "Sound cannot travel through:",
    te: "ధ్వని దేని గుండా ప్రయాణించదు?",
    options: [
      { id: "a", en: "Water", te: "నీరు" },
      { id: "b", en: "Steel rod", te: "ఉక్కు కడ్డీ" },
      { id: "c", en: "Vacuum", te: "శూన్యం (వాక్యూమ్)" },
      { id: "d", en: "Air", te: "గాలి" }
    ],
    correct: "c",
    explanation_en: "Sound is a mechanical wave and needs a medium (solid, liquid or gas) to travel; it cannot travel through vacuum.",
    explanation_te: "ధ్వని ఒక యాంత్రిక తరంగం, దానికి ప్రయాణించడానికి ఒక మాధ్యమం (ఘన, ద్రవ లేదా వాయు) అవసరం; శూన్యంలో ధ్వని ప్రయాణించదు."
  },
  {
    id: "q005",
    topic: "Physics",
    en: "Which of these is a good conductor of electricity?",
    te: "వీటిలో విద్యుత్తుకు మంచి వాహకం ఏది?",
    options: [
      { id: "a", en: "Rubber", te: "రబ్బరు" },
      { id: "b", en: "Dry wood", te: "పొడి కర్ర" },
      { id: "c", en: "Copper", te: "రాగి" },
      { id: "d", en: "Plastic", te: "ప్లాస్టిక్" }
    ],
    correct: "c",
    explanation_en: "Metals like copper have free electrons that allow electric charge to flow easily, making them good conductors.",
    explanation_te: "రాగి వంటి లోహాలలో స్వేచ్ఛా ఎలక్ట్రాన్లు ఉండటం వల్ల విద్యుత్ ఆవేశం సులభంగా ప్రవహిస్తుంది, అందుకే అవి మంచి వాహకాలు."
  },
  {
    id: "q006",
    topic: "Physics",
    en: "The bending of light as it passes from one medium to another is called:",
    te: "కాంతి ఒక యానకం నుండి మరొక యానకానికి వెళ్తున్నప్పుడు వంగడాన్ని ఏమంటారు?",
    options: [
      { id: "a", en: "Reflection", te: "పరావర్తనం" },
      { id: "b", en: "Refraction", te: "వక్రీభవనం" },
      { id: "c", en: "Diffusion", te: "వ్యాపనం" },
      { id: "d", en: "Dispersion", te: "వర్ణవిచ్ఛేదనం" }
    ],
    correct: "b",
    explanation_en: "Refraction is the bending of light when it passes from one transparent medium into another of different density.",
    explanation_te: "కాంతి ఒక సాంద్రత గల పారదర్శక యానకం నుండి వేరే సాంద్రత గల యానకంలోకి వెళ్ళినప్పుడు వంగడాన్ని వక్రీభవనం అంటారు."
  },
  {
    id: "q007",
    topic: "Physics",
    en: "Which simple machine is used in a see-saw?",
    te: "సీ-సా (ఊయల బల్ల)లో ఏ సాధారణ యంత్రం ఉపయోగించబడుతుంది?",
    options: [
      { id: "a", en: "Pulley", te: "కప్పీ" },
      { id: "b", en: "Inclined plane", te: "వాలు తలం" },
      { id: "c", en: "Lever", te: "లివర్ (ఉత్తోలకం)" },
      { id: "d", en: "Screw", te: "స్క్రూ" }
    ],
    correct: "c",
    explanation_en: "A see-saw works on the principle of a lever, pivoting around a fixed point called the fulcrum.",
    explanation_te: "సీ-సా ఒక లివర్ సూత్రంపై పనిచేస్తుంది, ఇది ఫల్క్రమ్ అనే స్థిర బిందువు చుట్టూ తిరుగుతుంది."
  },
  {
    id: "q008",
    topic: "Physics",
    en: "What happens to the resistance of a wire when its length is increased, keeping thickness constant?",
    te: "మందం స్థిరంగా ఉంచి తీగ పొడవును పెంచితే దాని నిరోధకత ఏమవుతుంది?",
    options: [
      { id: "a", en: "It decreases", te: "తగ్గుతుంది" },
      { id: "b", en: "It increases", te: "పెరుగుతుంది" },
      { id: "c", en: "It stays the same", te: "మారకుండా ఉంటుంది" },
      { id: "d", en: "It becomes zero", te: "సున్నా అవుతుంది" }
    ],
    correct: "b",
    explanation_en: "Resistance of a wire is directly proportional to its length, so a longer wire of the same thickness has greater resistance.",
    explanation_te: "తీగ నిరోధకత దాని పొడవుకు అనులోమానుపాతంలో ఉంటుంది, కాబట్టి అదే మందం గల పొడవైన తీగకు నిరోధకత ఎక్కువగా ఉంటుంది."
  },
  {
    id: "q009",
    topic: "Chemistry",
    en: "What is the chemical symbol for sodium?",
    te: "సోడియం యొక్క రసాయన సంకేతం ఏమిటి?",
    options: [
      { id: "a", en: "So", te: "So" },
      { id: "b", en: "Sd", te: "Sd" },
      { id: "c", en: "Na", te: "Na" },
      { id: "d", en: "S", te: "S" }
    ],
    correct: "c",
    explanation_en: "Sodium's symbol 'Na' comes from its Latin name 'Natrium'.",
    explanation_te: "సోడియం సంకేతం 'Na' దాని లాటిన్ పేరు 'Natrium' నుండి వచ్చింది."
  },
  {
    id: "q010",
    topic: "Chemistry",
    en: "Which gas do plants absorb from the air for photosynthesis?",
    te: "కిరణజన్య సంయోగక్రియ కోసం మొక్కలు గాలి నుండి ఏ వాయువును గ్రహిస్తాయి?",
    options: [
      { id: "a", en: "Oxygen", te: "ఆక్సిజన్" },
      { id: "b", en: "Nitrogen", te: "నత్రజని" },
      { id: "c", en: "Carbon dioxide", te: "కార్బన్ డయాక్సైడ్" },
      { id: "d", en: "Hydrogen", te: "హైడ్రోజన్" }
    ],
    correct: "c",
    explanation_en: "Plants take in carbon dioxide through tiny pores called stomata and use it, with sunlight and water, to make food.",
    explanation_te: "మొక్కలు స్టోమాటా అనే రంధ్రాల ద్వారా కార్బన్ డయాక్సైడ్‌ను తీసుకుని, సూర్యరశ్మి మరియు నీటితో కలిపి ఆహారాన్ని తయారు చేస్తాయి."
  },
  {
    id: "q011",
    topic: "Chemistry",
    en: "What type of mixture is formed when salt completely dissolves in water?",
    te: "ఉప్పు నీటిలో పూర్తిగా కరిగినప్పుడు ఏర్పడే మిశ్రమం రకం ఏమిటి?",
    options: [
      { id: "a", en: "Suspension", te: "సస్పెన్షన్" },
      { id: "b", en: "Colloid", te: "కొల్లాయిడ్" },
      { id: "c", en: "Solution", te: "ద్రావణం (సొల్యూషన్)" },
      { id: "d", en: "Compound", te: "సమ్మేళనం" }
    ],
    correct: "c",
    explanation_en: "When salt dissolves completely and evenly in water, it forms a true solution, where particles are too small to settle or scatter light.",
    explanation_te: "ఉప్పు నీటిలో పూర్తిగా, సమానంగా కరిగినప్పుడు అది ఒక నిజమైన ద్రావణాన్ని ఏర్పరుస్తుంది; అందులో కణాలు అతి సూక్ష్మంగా ఉండి స్థిరపడవు."
  },
  {
    id: "q012",
    topic: "Chemistry",
    en: "Which of the following is a chemical change?",
    te: "కింది వాటిలో రసాయన మార్పు ఏది?",
    options: [
      { id: "a", en: "Melting of ice", te: "మంచు కరగడం" },
      { id: "b", en: "Cutting of paper", te: "కాగితాన్ని కత్తిరించడం" },
      { id: "c", en: "Burning of paper", te: "కాగితం కాలడం" },
      { id: "d", en: "Dissolving sugar in water", te: "చక్కెరను నీటిలో కరిగించడం" }
    ],
    correct: "c",
    explanation_en: "Burning paper produces new substances like ash, carbon dioxide and water vapour, making it a chemical change; the others are physical changes.",
    explanation_te: "కాగితం కాలడం వల్ల బూడిద, కార్బన్ డయాక్సైడ్, నీటి ఆవిరి వంటి కొత్త పదార్థాలు ఏర్పడతాయి కాబట్టి ఇది రసాయన మార్పు; మిగిలినవి భౌతిక మార్పులు."
  },
  {
    id: "q013",
    topic: "Chemistry",
    en: "Litmus paper is commonly used to test whether a substance is:",
    te: "ఒక పదార్థం ఏమిటో పరీక్షించడానికి లిట్మస్ పేపర్‌ను సాధారణంగా ఉపయోగిస్తారు?",
    options: [
      { id: "a", en: "Acidic or basic", te: "ఆమ్లమా లేదా క్షారమా" },
      { id: "b", en: "Solid or liquid", te: "ఘనమా లేదా ద్రవమా" },
      { id: "c", en: "Hot or cold", te: "వేడిగా ఉందా లేదా చల్లగా ఉందా" },
      { id: "d", en: "Magnetic or non-magnetic", te: "అయస్కాంతమా కాదా" }
    ],
    correct: "a",
    explanation_en: "Litmus paper changes colour depending on whether a solution is acidic (turns blue litmus red) or basic (turns red litmus blue).",
    explanation_te: "ద్రావణం ఆమ్లమా (నీలి లిట్మస్‌ను ఎరుపుగా మారుస్తుంది) లేదా క్షారమా (ఎరుపు లిట్మస్‌ను నీలిగా మారుస్తుంది) అనేదాన్ని బట్టి లిట్మస్ పేపర్ రంగు మారుతుంది."
  },
  {
    id: "q014",
    topic: "Chemistry",
    en: "Rusting of iron is an example of a reaction with:",
    te: "ఇనుము తుప్పు పట్టడం అనేది దేనితో జరిగే చర్యకు ఉదాహరణ?",
    options: [
      { id: "a", en: "Nitrogen and heat", te: "నత్రజని మరియు వేడి" },
      { id: "b", en: "Oxygen and moisture", te: "ఆక్సిజన్ మరియు తేమ" },
      { id: "c", en: "Carbon dioxide only", te: "కార్బన్ డయాక్సైడ్ మాత్రమే" },
      { id: "d", en: "Sunlight only", te: "సూర్యరశ్మి మాత్రమే" }
    ],
    correct: "b",
    explanation_en: "Rust (iron oxide) forms when iron reacts slowly with oxygen in the presence of moisture.",
    explanation_te: "ఇనుము తేమ సమక్షంలో ఆక్సిజన్‌తో నెమ్మదిగా చర్య జరిపినప్పుడు తుప్పు (ఐరన్ ఆక్సైడ్) ఏర్పడుతుంది."
  },
  {
    id: "q015",
    topic: "Chemistry",
    en: "What is produced when an acid reacts with a base?",
    te: "ఆమ్లం క్షారంతో చర్య జరిపినప్పుడు ఏమి ఏర్పడుతుంది?",
    options: [
      { id: "a", en: "Salt and water", te: "ఉప్పు మరియు నీరు" },
      { id: "b", en: "Only gas", te: "వాయువు మాత్రమే" },
      { id: "c", en: "Only metal", te: "లోహం మాత్రమే" },
      { id: "d", en: "Only heat with no products", te: "ఉత్పత్తులు లేకుండా వేడి మాత్రమే" }
    ],
    correct: "a",
    explanation_en: "An acid-base reaction, called neutralisation, typically produces a salt and water.",
    explanation_te: "ఆమ్ల-క్షార చర్యను తటస్థీకరణ అంటారు; ఇది సాధారణంగా ఉప్పు మరియు నీటిని ఉత్పత్తి చేస్తుంది."
  },
  {
    id: "q016",
    topic: "Biology",
    en: "Which part of the plant conducts photosynthesis?",
    te: "మొక్కలో కిరణజన్య సంయోగక్రియను ఏ భాగం నిర్వహిస్తుంది?",
    options: [
      { id: "a", en: "Root", te: "వేరు" },
      { id: "b", en: "Leaf", te: "ఆకు" },
      { id: "c", en: "Stem", te: "కాండం" },
      { id: "d", en: "Flower", te: "పువ్వు" }
    ],
    correct: "b",
    explanation_en: "Leaves contain chlorophyll in chloroplasts, which captures sunlight to drive photosynthesis.",
    explanation_te: "ఆకులలోని క్లోరోప్లాస్ట్‌లలో క్లోరోఫిల్ ఉంటుంది, ఇది కిరణజన్య సంయోగక్రియను నడిపించడానికి సూర్యరశ్మిని గ్రహిస్తుంది."
  },
  {
    id: "q017",
    topic: "Biology",
    en: "Which blood cells help in fighting infections in the human body?",
    te: "మానవ శరీరంలో ఇన్ఫెక్షన్లతో పోరాడటానికి సహాయపడే రక్త కణాలు ఏవి?",
    options: [
      { id: "a", en: "Red blood cells", te: "ఎర్ర రక్త కణాలు" },
      { id: "b", en: "White blood cells", te: "తెల్ల రక్త కణాలు" },
      { id: "c", en: "Platelets", te: "ప్లేట్‌లెట్లు" },
      { id: "d", en: "Plasma proteins only", te: "ప్లాస్మా ప్రోటీన్లు మాత్రమే" }
    ],
    correct: "b",
    explanation_en: "White blood cells (leukocytes) are part of the immune system and defend the body against infections.",
    explanation_te: "తెల్ల రక్త కణాలు (లూకోసైట్లు) రోగనిరోధక వ్యవస్థలో భాగం మరియు శరీరాన్ని ఇన్ఫెక్షన్ల నుండి రక్షిస్తాయి."
  },
  {
    id: "q018",
    topic: "Biology",
    en: "Which organ in the human body pumps blood throughout the body?",
    te: "మానవ శరీరంలో రక్తాన్ని శరీరమంతా పంప్ చేసే అవయవం ఏది?",
    options: [
      { id: "a", en: "Lungs", te: "ఊపిరితిత్తులు" },
      { id: "b", en: "Liver", te: "కాలేయం" },
      { id: "c", en: "Heart", te: "గుండె" },
      { id: "d", en: "Kidney", te: "మూత్రపిండం" }
    ],
    correct: "c",
    explanation_en: "The heart is a muscular pump that circulates blood, carrying oxygen and nutrients, through the entire body.",
    explanation_te: "గుండె అనేది ఒక కండరాల పంపు, ఇది ఆక్సిజన్ మరియు పోషకాలను మోసుకెళ్తూ రక్తాన్ని శరీరం మొత్తం ప్రసరింపజేస్తుంది."
  },
  {
    id: "q019",
    topic: "Biology",
    en: "What is the basic structural and functional unit of all living organisms?",
    te: "అన్ని జీవులకు మౌలిక నిర్మాణ మరియు క్రియాత్మక యూనిట్ ఏది?",
    options: [
      { id: "a", en: "Tissue", te: "కణజాలం" },
      { id: "b", en: "Organ", te: "అవయవం" },
      { id: "c", en: "Cell", te: "కణం" },
      { id: "d", en: "Organ system", te: "అవయవ వ్యవస్థ" }
    ],
    correct: "c",
    explanation_en: "The cell is considered the basic unit of life; tissues, organs and systems are all built from cells.",
    explanation_te: "కణాన్ని జీవితానికి మౌలిక యూనిట్‌గా పరిగణిస్తారు; కణజాలాలు, అవయవాలు, వ్యవస్థలు అన్నీ కణాల నుండి ఏర్పడతాయి."
  },
  {
    id: "q020",
    topic: "Biology",
    en: "Which process allows plants to release excess water vapour from their leaves?",
    te: "మొక్కలు తమ ఆకుల నుండి అదనపు నీటి ఆవిరిని విడుదల చేయడానికి ఏ ప్రక్రియ సహాయపడుతుంది?",
    options: [
      { id: "a", en: "Respiration", te: "శ్వాసక్రియ" },
      { id: "b", en: "Transpiration", te: "బాష్పోత్సేకం (ట్రాన్స్‌పిరేషన్)" },
      { id: "c", en: "Germination", te: "అంకురోత్పత్తి" },
      { id: "d", en: "Pollination", te: "పరాగసంపర్కం" }
    ],
    correct: "b",
    explanation_en: "Transpiration is the loss of water vapour from plant leaves mainly through tiny pores called stomata.",
    explanation_te: "బాష్పోత్సేకం అంటే మొక్క ఆకుల నుండి, ప్రధానంగా స్టోమాటా అనే సూక్ష్మ రంధ్రాల ద్వారా నీటి ఆవిరి కోల్పోవడం."
  },
  {
    id: "q021",
    topic: "Biology",
    en: "Which of these is an example of a food chain?",
    te: "వీటిలో ఆహార గొలుసుకు ఉదాహరణ ఏది?",
    options: [
      { id: "a", en: "Sun to plant to deer to tiger", te: "సూర్యుడు → మొక్క → జింక → పులి" },
      { id: "b", en: "Rock to sand to soil", te: "రాయి → ఇసుక → మట్టి" },
      { id: "c", en: "Rain to river to sea", te: "వర్షం → నది → సముద్రం" },
      { id: "d", en: "Cloud to rain to cloud", te: "మేఘం → వర్షం → మేఘం" }
    ],
    correct: "a",
    explanation_en: "A food chain shows the transfer of energy from producers (plants) to consumers (herbivores and carnivores) in sequence.",
    explanation_te: "ఆహార గొలుసు శక్తిని ఉత్పత్తిదారుల (మొక్కలు) నుండి వినియోగదారులకు (శాకాహారులు, మాంసాహారులు) వరుసగా బదిలీ చేయడాన్ని చూపుతుంది."
  },
  {
    id: "q022",
    topic: "Biology",
    en: "What is the main function of the human respiratory system?",
    te: "మానవ శ్వాసకోశ వ్యవస్థ యొక్క ముఖ్య విధి ఏమిటి?",
    options: [
      { id: "a", en: "Digesting food", te: "ఆహారాన్ని జీర్ణం చేయడం" },
      { id: "b", en: "Exchanging oxygen and carbon dioxide", te: "ఆక్సిజన్ మరియు కార్బన్ డయాక్సైడ్‌లను మార్పిడి చేయడం" },
      { id: "c", en: "Filtering blood", te: "రక్తాన్ని వడగట్టడం" },
      { id: "d", en: "Producing hormones", te: "హార్మోన్లను ఉత్పత్తి చేయడం" }
    ],
    correct: "b",
    explanation_en: "The respiratory system brings oxygen into the body and removes carbon dioxide, mainly through the lungs.",
    explanation_te: "శ్వాసకోశ వ్యవస్థ శరీరంలోకి ఆక్సిజన్‌ను తీసుకువచ్చి, ప్రధానంగా ఊపిరితిత్తుల ద్వారా కార్బన్ డయాక్సైడ్‌ను బయటకు పంపుతుంది."
  },
  {
    id: "q023",
    topic: "Human Physiology",
    en: "Which organ in the human body is primarily responsible for filtering waste from the blood?",
    te: "మానవ శరీరంలో రక్తం నుండి వ్యర్థాలను వడగట్టే ప్రధాన బాధ్యత ఏ అవయవానికి ఉంది?",
    options: [
      { id: "a", en: "Stomach", te: "జీర్ణాశయం" },
      { id: "b", en: "Kidney", te: "మూత్రపిండం" },
      { id: "c", en: "Pancreas", te: "క్లోమం (ప్యాంక్రియాస్)" },
      { id: "d", en: "Spleen", te: "ప్లీహము" }
    ],
    correct: "b",
    explanation_en: "The kidneys filter blood to remove waste products and excess water, forming urine.",
    explanation_te: "మూత్రపిండాలు రక్తాన్ని వడగట్టి వ్యర్థ పదార్థాలను, అదనపు నీటిని తొలగించి మూత్రాన్ని ఏర్పరుస్తాయి."
  },
  {
    id: "q024",
    topic: "Human Physiology",
    en: "Which vitamin does the human body produce when exposed to sunlight?",
    te: "సూర్యరశ్మికి గురైనప్పుడు మానవ శరీరం ఏ విటమిన్‌ను ఉత్పత్తి చేస్తుంది?",
    options: [
      { id: "a", en: "Vitamin A", te: "విటమిన్ A" },
      { id: "b", en: "Vitamin C", te: "విటమిన్ C" },
      { id: "c", en: "Vitamin D", te: "విటమిన్ D" },
      { id: "d", en: "Vitamin K", te: "విటమిన్ K" }
    ],
    correct: "c",
    explanation_en: "The skin synthesises Vitamin D when exposed to sunlight; this vitamin helps the body absorb calcium.",
    explanation_te: "సూర్యరశ్మికి గురైనప్పుడు చర్మం విటమిన్ D ను తయారు చేస్తుంది; ఈ విటమిన్ శరీరం కాల్షియంను గ్రహించడానికి సహాయపడుతుంది."
  },
  {
    id: "q025",
    topic: "Human Physiology",
    en: "Which part of the human brain controls balance and coordination of movements?",
    te: "కదలికల సమతుల్యత మరియు సమన్వయాన్ని మానవ మెదడులో ఏ భాగం నియంత్రిస్తుంది?",
    options: [
      { id: "a", en: "Cerebrum", te: "సెరిబ్రమ్" },
      { id: "b", en: "Cerebellum", te: "సెరిబెల్లమ్" },
      { id: "c", en: "Medulla", te: "మెడుల్లా" },
      { id: "d", en: "Spinal cord", te: "వెన్నుపూస (స్పైనల్ కార్డ్)" }
    ],
    correct: "b",
    explanation_en: "The cerebellum, located at the back of the brain, is mainly responsible for balance, posture and coordinated movement.",
    explanation_te: "మెదడు వెనుక భాగంలో ఉండే సెరిబెల్లమ్ ప్రధానంగా సమతుల్యత, భంగిమ మరియు సమన్వయ కదలికలకు బాధ్యత వహిస్తుంది."
  },
  {
    id: "q026",
    topic: "Human Physiology",
    en: "Which of the following best describes a balanced diet?",
    te: "సమతుల్య ఆహారాన్ని ఏది బాగా వివరిస్తుంది?",
    options: [
      { id: "a", en: "Eating only rice and bread", te: "అన్నం, రొట్టె మాత్రమే తినడం" },
      { id: "b", en: "Eating a variety of foods in the right proportions", te: "సరైన నిష్పత్తిలో వివిధ రకాల ఆహారాలు తినడం" },
      { id: "c", en: "Eating only fruits", te: "పండ్లు మాత్రమే తినడం" },
      { id: "d", en: "Eating as much as possible at every meal", te: "ప్రతి భోజనంలో సాధ్యమైనంత ఎక్కువ తినడం" }
    ],
    correct: "b",
    explanation_en: "A balanced diet includes carbohydrates, proteins, fats, vitamins and minerals in proportions that meet the body's needs.",
    explanation_te: "సమతుల్య ఆహారంలో శరీర అవసరాలకు తగిన నిష్పత్తిలో పిండిపదార్థాలు, ప్రోటీన్లు, కొవ్వులు, విటమిన్లు, ఖనిజాలు ఉంటాయి."
  },
  {
    id: "q027",
    topic: "Human Physiology",
    en: "What is the normal approximate body temperature of a healthy human in Celsius?",
    te: "ఆరోగ్యవంతమైన మనిషి సాధారణ శరీర ఉష్ణోగ్రత సెల్సియస్‌లో సుమారు ఎంత?",
    options: [
      { id: "a", en: "25°C", te: "25°C" },
      { id: "b", en: "37°C", te: "37°C" },
      { id: "c", en: "45°C", te: "45°C" },
      { id: "d", en: "60°C", te: "60°C" }
    ],
    correct: "b",
    explanation_en: "A healthy human body typically maintains a core temperature of around 37°C (98.6°F).",
    explanation_te: "ఆరోగ్యవంతమైన మానవ శరీరం సాధారణంగా సుమారు 37°C (98.6°F) ఉష్ణోగ్రతను కాపాడుకుంటుంది."
  },
  {
    id: "q028",
    topic: "Human Physiology",
    en: "Why is washing hands with soap before eating considered an important health habit?",
    te: "భోజనానికి ముందు సబ్బుతో చేతులు కడుక్కోవడం ఒక ముఖ్యమైన ఆరోగ్య అలవాటుగా ఎందుకు పరిగణించబడుతుంది?",
    options: [
      { id: "a", en: "It makes food taste better", te: "ఇది ఆహారాన్ని రుచిగా చేస్తుంది" },
      { id: "b", en: "It removes germs that can cause disease", te: "ఇది వ్యాధులు కలిగించే సూక్ష్మజీవులను తొలగిస్తుంది" },
      { id: "c", en: "It is only a cultural custom with no scientific basis", te: "ఇది శాస్త్రీయ ఆధారం లేని కేవలం సంప్రదాయం" },
      { id: "d", en: "It cools down the hands", te: "ఇది చేతులను చల్లబరుస్తుంది" }
    ],
    correct: "b",
    explanation_en: "Soap breaks down the outer layer of many germs and helps wash them away, reducing the chance of infection before eating.",
    explanation_te: "సబ్బు చాలా సూక్ష్మజీవుల బయటి పొరను విచ్ఛిన్నం చేసి వాటిని కడిగివేయడానికి సహాయపడుతుంది, దీనివల్ల భోజనానికి ముందు ఇన్ఫెక్షన్ అవకాశం తగ్గుతుంది."
  },
  {
    id: "q029",
    topic: "Environment & Ecology",
    en: "Which gas is mainly responsible for trapping heat in the atmosphere, causing the greenhouse effect?",
    te: "వాతావరణంలో వేడిని బంధించి గ్రీన్‌హౌస్ ప్రభావానికి ప్రధానంగా కారణమయ్యే వాయువు ఏది?",
    options: [
      { id: "a", en: "Oxygen", te: "ఆక్సిజన్" },
      { id: "b", en: "Carbon dioxide", te: "కార్బన్ డయాక్సైడ్" },
      { id: "c", en: "Nitrogen", te: "నత్రజని" },
      { id: "d", en: "Helium", te: "హీలియం" }
    ],
    correct: "b",
    explanation_en: "Carbon dioxide and similar gases trap heat from the sun in the atmosphere, which is known as the greenhouse effect.",
    explanation_te: "కార్బన్ డయాక్సైడ్ వంటి వాయువులు వాతావరణంలో సూర్యుని నుండి వచ్చే వేడిని బంధిస్తాయి, దీన్నే గ్రీన్‌హౌస్ ప్రభావం అంటారు."
  },
  {
    id: "q030",
    topic: "Environment & Ecology",
    en: "What is the main cause of soil erosion in many agricultural areas?",
    te: "చాలా వ్యవసాయ ప్రాంతాలలో నేల కోతకు ప్రధాన కారణం ఏమిటి?",
    options: [
      { id: "a", en: "Too much tree cover", te: "అధిక చెట్ల కవరేజ్" },
      { id: "b", en: "Loss of vegetation cover", te: "వృక్ష కవచం తగ్గడం" },
      { id: "c", en: "Excess rainfall only in deserts", te: "ఎడారులలో మాత్రమే అధిక వర్షపాతం" },
      { id: "d", en: "Presence of earthworms", te: "వానపాముల ఉనికి" }
    ],
    correct: "b",
    explanation_en: "When vegetation cover is removed, there are fewer roots to hold the soil together, making it easier for wind and water to erode it.",
    explanation_te: "వృక్ష కవచం తొలగించబడినప్పుడు, నేలను పట్టి ఉంచే వేర్లు తగ్గిపోతాయి, దీనివల్ల గాలి మరియు నీరు నేలను సులభంగా కోసివేస్తాయి."
  },
  {
    id: "q031",
    topic: "Environment & Ecology",
    en: "Which of these practices helps conserve water at the household level?",
    te: "ఇంటి స్థాయిలో నీటిని ఆదా చేయడానికి ఈ అలవాట్లలో ఏది సహాయపడుతుంది?",
    options: [
      { id: "a", en: "Leaving taps running while brushing teeth", te: "పళ్లు తోముకునేటప్పుడు కుళాయి తెరిచి ఉంచడం" },
      { id: "b", en: "Fixing leaking taps promptly", te: "లీక్ అవుతున్న కుళాయిలను వెంటనే సరిచేయడం" },
      { id: "c", en: "Watering plants at midday in full sun", te: "మధ్యాహ్నం ఎండలో మొక్కలకు నీరు పోయడం" },
      { id: "d", en: "Washing vehicles with a running hose for hours", te: "గంటల తరబడి హోస్‌తో వాహనాలు కడగడం" }
    ],
    correct: "b",
    explanation_en: "Fixing leaks promptly prevents continuous water wastage, which is one of the simplest and most effective ways to conserve water at home.",
    explanation_te: "లీక్‌లను వెంటనే సరిచేయడం నిరంతర నీటి వృథాను నివారిస్తుంది; ఇది ఇంట్లో నీటిని ఆదా చేయడానికి సరళమైన, ప్రభావవంతమైన మార్గాలలో ఒకటి."
  },
  {
    id: "q032",
    topic: "Environment & Ecology",
    en: "What does 'biodegradable' mean, in simple terms?",
    te: "'బయోడిగ్రేడబుల్' అంటే సరళంగా చెప్పాలంటే ఏమిటి?",
    options: [
      { id: "a", en: "Something that never breaks down", te: "ఎప్పటికీ విచ్ఛిన్నం కాని పదార్థం" },
      { id: "b", en: "Something that can be broken down naturally by microorganisms", te: "సూక్ష్మజీవుల ద్వారా సహజంగా విచ్ఛిన్నమయ్యే పదార్థం" },
      { id: "c", en: "Something made only of metal", te: "లోహంతో మాత్రమే తయారైనది" },
      { id: "d", en: "Something that is always recyclable plastic", te: "ఎల్లప్పుడూ రీసైకిల్ చేయదగిన ప్లాస్టిక్" }
    ],
    correct: "b",
    explanation_en: "Biodegradable materials, such as food waste and paper, can be broken down naturally by bacteria and fungi over time.",
    explanation_te: "ఆహార వ్యర్థాలు, కాగితం వంటి బయోడిగ్రేడబుల్ పదార్థాలను బ్యాక్టీరియా, శిలీంధ్రాలు కాలక్రమేణా సహజంగా విచ్ఛిన్నం చేయగలవు."
  },
  {
    id: "q033",
    topic: "Environment & Ecology",
    en: "Why are pollinators like bees important for ecosystems and agriculture?",
    te: "తేనెటీగల వంటి పరాగసంపర్క జీవులు పర్యావరణ వ్యవస్థలకు మరియు వ్యవసాయానికి ఎందుకు ముఖ్యమైనవి?",
    options: [
      { id: "a", en: "They help many plants reproduce by transferring pollen", te: "పుప్పొడిని బదిలీ చేయడం ద్వారా చాలా మొక్కలు పునరుత్పత్తి చెందడానికి సహాయపడతాయి" },
      { id: "b", en: "They only produce honey and have no other role", te: "అవి కేవలం తేనెను ఉత్పత్తి చేస్తాయి, వేరే పాత్ర లేదు" },
      { id: "c", en: "They remove weeds from fields", te: "అవి పొలాల్లో కలుపు మొక్కలను తొలగిస్తాయి" },
      { id: "d", en: "They purify water in rivers", te: "అవి నదులలో నీటిని శుద్ధి చేస్తాయి" }
    ],
    correct: "a",
    explanation_en: "Bees and other pollinators carry pollen between flowers, enabling fertilisation in many food crops and wild plants.",
    explanation_te: "తేనెటీగలు, ఇతర పరాగసంపర్క జీవులు పూల మధ్య పుప్పొడిని మోసుకెళ్తాయి, దీనివల్ల చాలా పంటలు, అడవి మొక్కలలో ఫలదీకరణం జరుగుతుంది."
  },
  {
    id: "q034",
    topic: "Environment & Ecology",
    en: "Which action contributes most directly to reducing plastic pollution in daily life?",
    te: "రోజువారీ జీవితంలో ప్లాస్టిక్ కాలుష్యాన్ని తగ్గించడానికి ఏ చర్య నేరుగా దోహదపడుతుంది?",
    options: [
      { id: "a", en: "Using single-use plastic bags whenever possible", te: "వీలైనప్పుడల్లా సింగిల్-యూజ్ ప్లాస్టిక్ సంచులు వాడటం" },
      { id: "b", en: "Carrying a reusable cloth bag for shopping", te: "షాపింగ్ కోసం తిరిగి వాడగల గుడ్డ సంచి తీసుకెళ్లడం" },
      { id: "c", en: "Burning plastic waste in the open", te: "ప్లాస్టిక్ వ్యర్థాలను బహిరంగంగా కాల్చడం" },
      { id: "d", en: "Throwing plastic into nearby water bodies", te: "ప్లాస్టిక్‌ను సమీప నీటి వనరుల్లో పడేయడం" }
    ],
    correct: "b",
    explanation_en: "Carrying a reusable bag reduces demand for single-use plastic, directly cutting down plastic waste generation.",
    explanation_te: "తిరిగి వాడగల సంచి తీసుకెళ్లడం వల్ల సింగిల్-యూజ్ ప్లాస్టిక్ అవసరం తగ్గి, ప్లాస్టిక్ వ్యర్థాల ఉత్పత్తి నేరుగా తగ్గుతుంది."
  },
  {
    id: "q035",
    topic: "Astronomy",
    en: "Which planet in our solar system is known as the 'Red Planet'?",
    te: "మన సౌర వ్యవస్థలో 'రెడ్ ప్లానెట్' (ఎర్ర గ్రహం)గా పిలువబడే గ్రహం ఏది?",
    options: [
      { id: "a", en: "Venus", te: "శుక్రుడు" },
      { id: "b", en: "Mars", te: "అంగారకుడు (మార్స్)" },
      { id: "c", en: "Jupiter", te: "బృహస్పతి" },
      { id: "d", en: "Mercury", te: "బుధుడు" }
    ],
    correct: "b",
    explanation_en: "Mars appears reddish due to iron oxide (rust) covering much of its surface.",
    explanation_te: "మార్స్ ఉపరితలంపై విస్తారంగా ఉండే ఐరన్ ఆక్సైడ్ (తుప్పు) వల్ల అది ఎరుపు రంగులో కనిపిస్తుంది."
  },
  {
    id: "q036",
    topic: "Astronomy",
    en: "What causes day and night on Earth?",
    te: "భూమిపై పగలు, రాత్రి ఏర్పడటానికి కారణం ఏమిటి?",
    options: [
      { id: "a", en: "Earth's revolution around the Sun", te: "భూమి సూర్యుని చుట్టూ తిరగడం (పరిభ్రమణం)" },
      { id: "b", en: "Earth's rotation on its own axis", te: "భూమి తన అక్షం చుట్టూ తిరగడం (భ్రమణం)" },
      { id: "c", en: "The Moon blocking sunlight", te: "చంద్రుడు సూర్యరశ్మిని అడ్డుకోవడం" },
      { id: "d", en: "Clouds covering the Sun", te: "మేఘాలు సూర్యుడిని కప్పడం" }
    ],
    correct: "b",
    explanation_en: "Earth's rotation on its own axis causes different parts of the planet to face the Sun at different times, creating day and night.",
    explanation_te: "భూమి తన అక్షం చుట్టూ తిరగడం వల్ల గ్రహంలోని వేర్వేరు భాగాలు వేర్వేరు సమయాల్లో సూర్యుని వైపు ఉంటాయి, దీనివల్ల పగలు, రాత్రి ఏర్పడతాయి."
  },
  {
    id: "q037",
    topic: "Astronomy",
    en: "A solar eclipse occurs when:",
    te: "సూర్యగ్రహణం ఎప్పుడు సంభవిస్తుంది?",
    options: [
      { id: "a", en: "The Earth comes between the Sun and the Moon", te: "భూమి సూర్యుడికి, చంద్రుడికి మధ్యకు రావడం" },
      { id: "b", en: "The Moon comes between the Sun and the Earth", te: "చంద్రుడు సూర్యుడికి, భూమికి మధ్యకు రావడం" },
      { id: "c", en: "The Sun comes between the Earth and the Moon", te: "సూర్యుడు భూమికి, చంద్రుడికి మధ్యకు రావడం" },
      { id: "d", en: "Two stars collide", te: "రెండు నక్షత్రాలు ఢీకొనడం" }
    ],
    correct: "b",
    explanation_en: "A solar eclipse happens when the Moon passes between the Sun and the Earth, blocking the Sun's light from reaching part of the Earth.",
    explanation_te: "చంద్రుడు సూర్యుడికి, భూమికి మధ్యకు వచ్చినప్పుడు సూర్యగ్రహణం సంభవిస్తుంది; ఇది భూమిలోని కొంత భాగానికి సూర్యరశ్మి చేరకుండా అడ్డుకుంటుంది."
  },
  {
    id: "q038",
    topic: "Astronomy",
    en: "Which of these is the closest star to Earth?",
    te: "వీటిలో భూమికి అత్యంత సమీపంలో ఉన్న నక్షత్రం ఏది?",
    options: [
      { id: "a", en: "Proxima Centauri", te: "ప్రాక్సిమా సెంటారి" },
      { id: "b", en: "The Sun", te: "సూర్యుడు" },
      { id: "c", en: "Sirius", te: "సిరియస్" },
      { id: "d", en: "Polaris", te: "ధ్రువ నక్షత్రం (పోలారిస్)" }
    ],
    correct: "b",
    explanation_en: "The Sun is a star, and it is by far the closest star to Earth, which is why it looks so much brighter than other stars.",
    explanation_te: "సూర్యుడు కూడా ఒక నక్షత్రమే, మరియు ఇది భూమికి అత్యంత సమీపంలో ఉన్న నక్షత్రం, అందుకే ఇది ఇతర నక్షత్రాల కంటే చాలా ప్రకాశవంతంగా కనిపిస్తుంది."
  },
  {
    id: "q039",
    topic: "Astronomy",
    en: "Why do we always see the same side of the Moon from Earth?",
    te: "మనం భూమి నుండి ఎల్లప్పుడూ చంద్రుని ఒకే వైపును ఎందుకు చూస్తాము?",
    options: [
      { id: "a", en: "The Moon does not rotate at all", te: "చంద్రుడు అసలు తిరగదు" },
      { id: "b", en: "The Moon's rotation and revolution periods are equal", te: "చంద్రుని భ్రమణ, పరిభ్రమణ కాలాలు సమానం" },
      { id: "c", en: "The Earth does not rotate", te: "భూమి తిరగదు" },
      { id: "d", en: "The Moon is too far to see other sides", te: "చంద్రుడు మరీ దూరంగా ఉండి ఇతర వైపులు కనిపించవు" }
    ],
    correct: "b",
    explanation_en: "The Moon's rotation period matches its revolution period around Earth (tidal locking), so the same face always points towards us.",
    explanation_te: "చంద్రుని భ్రమణ కాలం భూమి చుట్టూ పరిభ్రమణ కాలంతో సమానంగా ఉంటుంది (టైడల్ లాకింగ్), కాబట్టి ఎల్లప్పుడూ ఒకే వైపు మన వైపుకు ఉంటుంది."
  },
  {
    id: "q040",
    topic: "Astronomy",
    en: "What are the rings of Saturn mainly made of?",
    te: "శని గ్రహం యొక్క వలయాలు ప్రధానంగా దేనితో తయారయ్యాయి?",
    options: [
      { id: "a", en: "Solid metal plates", te: "ఘన లోహ పలకలు" },
      { id: "b", en: "Ice and rock particles", te: "మంచు మరియు రాతి కణాలు" },
      { id: "c", en: "Liquid water", te: "ద్రవ నీరు" },
      { id: "d", en: "Clouds of gas only", te: "వాయు మేఘాలు మాత్రమే" }
    ],
    correct: "b",
    explanation_en: "Saturn's rings are made up of countless particles of ice and rock, ranging from tiny grains to large chunks, orbiting the planet.",
    explanation_te: "శని వలయాలు మంచు, రాతి కణాలతో రూపొందాయి; ఇవి చిన్న రేణువుల నుండి పెద్ద ముక్కల వరకు గ్రహం చుట్టూ పరిభ్రమిస్తాయి."
  },
  {
    id: "q041",
    topic: "Everyday Science",
    en: "Why does ice float on water?",
    te: "మంచు నీటిపై ఎందుకు తేలుతుంది?",
    options: [
      { id: "a", en: "Ice is less dense than liquid water", te: "మంచు ద్రవ నీటి కంటే తక్కువ సాంద్రత కలిగి ఉంటుంది" },
      { id: "b", en: "Ice is magnetic", te: "మంచు అయస్కాంతం" },
      { id: "c", en: "Ice is always warmer than water", te: "మంచు ఎల్లప్పుడూ నీటి కంటే వేడిగా ఉంటుంది" },
      { id: "d", en: "Water cannot support any solid", te: "నీరు ఏ ఘన పదార్థాన్నీ తేల్చలేదు" }
    ],
    correct: "a",
    explanation_en: "Water expands slightly when it freezes, making ice less dense than liquid water, so it floats.",
    explanation_te: "నీరు గడ్డకట్టినప్పుడు కొద్దిగా విస్తరిస్తుంది, దీనివల్ల మంచు ద్రవ నీటి కంటే తక్కువ సాంద్రతను కలిగి తేలుతుంది."
  },
  {
    id: "q042",
    topic: "Everyday Science",
    en: "Why do we see a rainbow after rain on a sunny day?",
    te: "ఎండ ఉన్న రోజున వర్షం తర్వాత మనకు ఇంద్రధనుస్సు ఎందుకు కనిపిస్తుంది?",
    options: [
      { id: "a", en: "Sunlight splits into colours when it passes through raindrops", te: "వర్షపు బిందువుల గుండా వెళ్ళినప్పుడు సూర్యరశ్మి రంగులుగా విడిపోతుంది" },
      { id: "b", en: "The sky changes colour by itself", te: "ఆకాశం దానంతట అదే రంగు మారుతుంది" },
      { id: "c", en: "Rainbows are painted by dust particles", te: "ఇంద్రధనుస్సును దుమ్ము కణాలు చిత్రిస్తాయి" },
      { id: "d", en: "Clouds produce their own colours", te: "మేఘాలు తమ సొంత రంగులను ఉత్పత్తి చేస్తాయి" }
    ],
    correct: "a",
    explanation_en: "Raindrops act like tiny prisms, refracting and reflecting sunlight so that it splits into the seven colours of the rainbow.",
    explanation_te: "వర్షపు బిందువులు చిన్న ప్రిజమ్‌ల వలె పనిచేసి సూర్యరశ్మిని వక్రీభవింపజేసి, పరావర్తనం చేసి ఏడు రంగులుగా విడదీస్తాయి."
  },
  {
    id: "q043",
    topic: "Everyday Science",
    en: "Why does a metal spoon left in hot tea become hot to touch?",
    te: "వేడి టీలో ఉంచిన లోహపు చెంచా తాకినప్పుడు వేడిగా ఎందుకు మారుతుంది?",
    options: [
      { id: "a", en: "Heat is conducted along the metal", te: "లోహం వెంట వేడి ప్రసరిస్తుంది (ప్రసరణ)" },
      { id: "b", en: "The spoon generates its own heat", te: "చెంచా తనంతట తానే వేడిని ఉత్పత్తి చేస్తుంది" },
      { id: "c", en: "Metal always stays cool", te: "లోహం ఎల్లప్పుడూ చల్లగానే ఉంటుంది" },
      { id: "d", en: "The tea avoids touching the spoon", te: "టీ చెంచాను తాకకుండా ఉంటుంది" }
    ],
    correct: "a",
    explanation_en: "Metals are good conductors of heat, so thermal energy travels quickly from the hot tea through the spoon to your hand.",
    explanation_te: "లోహాలు వేడికి మంచి వాహకాలు, కాబట్టి వేడి టీ నుండి ఉష్ణశక్తి చెంచా గుండా వేగంగా మీ చేతికి చేరుతుంది."
  },
  {
    id: "q044",
    topic: "Everyday Science",
    en: "Why do we feel cooler when we sweat and a breeze blows over our skin?",
    te: "మనం చెమటపట్టి, గాలి వీచినప్పుడు మనకు చల్లగా ఎందుకు అనిపిస్తుంది?",
    options: [
      { id: "a", en: "Sweat evaporates and absorbs heat from the skin", te: "చెమట ఆవిరైపోయి చర్మం నుండి వేడిని గ్రహిస్తుంది" },
      { id: "b", en: "Sweat is naturally cold liquid", te: "చెమట సహజంగా చల్లని ద్రవం" },
      { id: "c", en: "Wind itself has no temperature effect", te: "గాలికి ఉష్ణోగ్రతపై ఎలాంటి ప్రభావం ఉండదు" },
      { id: "d", en: "Sweat blocks body heat completely", te: "చెమట శరీర వేడిని పూర్తిగా అడ్డుకుంటుంది" }
    ],
    correct: "a",
    explanation_en: "Evaporation requires energy, so as sweat evaporates from the skin, it draws heat away from the body, creating a cooling effect.",
    explanation_te: "ఆవిరి కావడానికి శక్తి అవసరం; కాబట్టి చర్మంపై చెమట ఆవిరైనప్పుడు అది శరీరం నుండి వేడిని తీసుకుంటుంది, దీనివల్ల చల్లని అనుభూతి కలుగుతుంది."
  },
  {
    id: "q045",
    topic: "Everyday Science",
    en: "Why does a pressure cooker cook food faster than an open pot?",
    te: "ప్రెజర్ కుక్కర్ తెరిచిన పాత్ర కంటే ఆహారాన్ని వేగంగా ఎందుకు వండుతుంది?",
    options: [
      { id: "a", en: "It increases pressure, raising the boiling point of water", te: "ఇది పీడనాన్ని పెంచి నీటి మరుగు స్థానాన్ని పెంచుతుంది" },
      { id: "b", en: "It uses a special fuel", te: "ఇది ప్రత్యేక ఇంధనాన్ని వాడుతుంది" },
      { id: "c", en: "It removes all the water instantly", te: "ఇది నీటిని వెంటనే తొలగిస్తుంది" },
      { id: "d", en: "It cools the food faster", te: "ఇది ఆహారాన్ని వేగంగా చల్లబరుస్తుంది" }
    ],
    correct: "a",
    explanation_en: "A sealed pressure cooker traps steam, raising internal pressure and the boiling point of water, so food cooks faster at a higher temperature.",
    explanation_te: "మూసి ఉన్న ప్రెజర్ కుక్కర్ ఆవిరిని బంధించి, లోపలి పీడనాన్ని, నీటి మరుగు స్థానాన్ని పెంచుతుంది, దీనివల్ల ఆహారం ఎక్కువ ఉష్ణోగ్రత వద్ద వేగంగా ఉడుకుతుంది."
  },
  {
    id: "q046",
    topic: "Scientific Reasoning",
    en: "In a scientific experiment, why is it important to change only one variable at a time?",
    te: "ఒక శాస్త్రీయ ప్రయోగంలో ఒకేసారి ఒక చరరాశిని మాత్రమే మార్చడం ఎందుకు ముఖ్యం?",
    options: [
      { id: "a", en: "It makes the experiment take longer", te: "ఇది ప్రయోగం ఎక్కువ సమయం తీసుకునేలా చేస్తుంది" },
      { id: "b", en: "It allows us to clearly identify what caused a change in results", te: "ఫలితాల్లో మార్పుకు కారణం ఏమిటో స్పష్టంగా గుర్తించడానికి ఇది సహాయపడుతుంది" },
      { id: "c", en: "It is only a tradition with no real purpose", te: "ఇది కేవలం ఒక సంప్రదాయం, దీనికి నిజమైన ప్రయోజనం లేదు" },
      { id: "d", en: "It makes the data harder to understand", te: "ఇది డేటాను అర్థం చేసుకోవడం కష్టతరం చేస్తుంది" }
    ],
    correct: "b",
    explanation_en: "Changing one variable at a time (a 'fair test') lets scientists link any change in the result directly to that one variable, ruling out other explanations.",
    explanation_te: "ఒకేసారి ఒక చరరాశిని మాత్రమే మార్చడం (ఫెయిర్ టెస్ట్) వల్ల ఫలితంలో వచ్చే మార్పును ఆ ఒక్క చరరాశికే నేరుగా అనుసంధానించవచ్చు, ఇతర వివరణలను తోసిపుచ్చవచ్చు."
  },
  {
    id: "q047",
    topic: "Scientific Reasoning",
    en: "A claim is best supported scientifically when it is based on:",
    te: "ఒక వాదనకు శాస్త్రీయంగా బలమైన మద్దతు ఎప్పుడు లభిస్తుంది?",
    options: [
      { id: "a", en: "Popular opinion alone", te: "కేవలం ప్రజాభిప్రాయం ఆధారంగా" },
      { id: "b", en: "Repeated, testable evidence and observation", te: "పునరావృతమయ్యే, పరీక్షించదగిన ఆధారాలు మరియు పరిశీలన ఆధారంగా" },
      { id: "c", en: "A single unchecked anecdote", te: "ఒక్క తనిఖీ చేయని కథనం ఆధారంగా" },
      { id: "d", en: "How old the belief is", te: "నమ్మకం ఎంత పాతదైనా దాని ఆధారంగా" }
    ],
    correct: "b",
    explanation_en: "Scientific claims gain strength from evidence that can be observed, tested, and repeated by others, not merely from popularity or tradition.",
    explanation_te: "శాస్త్రీయ వాదనలు ప్రజాదరణ లేదా సంప్రదాయం నుండి కాకుండా, ఇతరులు పరిశీలించి, పరీక్షించి, పునరావృతం చేయగల ఆధారాల నుండి బలాన్ని పొందుతాయి."
  },
  {
    id: "q048",
    topic: "Scientific Reasoning",
    en: "If a prediction based on a hypothesis does not match experimental results, what should a scientist do?",
    te: "ఒక పరికల్పన ఆధారంగా చేసిన అంచనా ప్రయోగ ఫలితాలతో సరిపోలకపోతే శాస్త్రవేత్త ఏమి చేయాలి?",
    options: [
      { id: "a", en: "Ignore the results and keep the hypothesis unchanged", te: "ఫలితాలను పట్టించుకోకుండా పరికల్పనను మార్చకుండా ఉంచడం" },
      { id: "b", en: "Reconsider or revise the hypothesis based on the evidence", te: "ఆధారాల ఆధారంగా పరికల్పనను పునఃపరిశీలించడం లేదా సవరించడం" },
      { id: "c", en: "Hide the results from others", te: "ఫలితాలను ఇతరుల నుండి దాచడం" },
      { id: "d", en: "Assume the experiment has no meaning", te: "ప్రయోగానికి అర్థం లేదని భావించడం" }
    ],
    correct: "b",
    explanation_en: "Science progresses by revising hypotheses when evidence contradicts them, rather than ignoring inconvenient results.",
    explanation_te: "ఆధారాలు పరికల్పనకు విరుద్ధంగా ఉన్నప్పుడు దానిని పునఃపరిశీలించడం ద్వారానే శాస్త్రం ముందుకు సాగుతుంది, అసౌకర్యమైన ఫలితాలను విస్మరించడం ద్వారా కాదు."
  },
  {
    id: "q049",
    topic: "Misconceptions & Evidence",
    en: "A person claims that wearing a certain coloured thread cures illness, with no medical treatment. What is the scientifically sound response?",
    te: "ఒక వ్యక్తి ఒక నిర్దిష్ట రంగు దారం కట్టుకుంటే, ఎలాంటి వైద్య చికిత్స లేకుండా వ్యాధి నయమవుతుందని చెబుతున్నాడు. దీనికి శాస్త్రీయంగా సరైన స్పందన ఏమిటి?",
    options: [
      { id: "a", en: "Accept it because many people believe it", te: "చాలా మంది నమ్ముతున్నారు కాబట్టి దానిని అంగీకరించడం" },
      { id: "b", en: "Examine whether controlled studies show any real medical effect, and seek proper medical care", te: "నియంత్రిత అధ్యయనాలు ఏదైనా నిజమైన వైద్య ప్రభావాన్ని చూపుతున్నాయా అని పరిశీలించి, సరైన వైద్య సంరక్షణను పొందడం" },
      { id: "c", en: "Ignore medical advice and rely only on the thread", te: "వైద్య సలహాను విస్మరించి దారంపై మాత్రమే ఆధారపడటం" },
      { id: "d", en: "Avoid questioning it to respect tradition", te: "సంప్రదాయాన్ని గౌరవించడానికి దాన్ని ప్రశ్నించకుండా ఉండటం" }
    ],
    correct: "b",
    explanation_en: "Scientific temper means testing such claims through evidence rather than accepting them on faith, and never delaying genuine medical treatment.",
    explanation_te: "శాస్త్రీయ దృక్పథం అంటే అలాంటి వాదనలను నమ్మకంతో అంగీకరించకుండా ఆధారాల ద్వారా పరీక్షించడం, మరియు నిజమైన వైద్య చికిత్సను ఆలస్యం చేయకపోవడం."
  },
  {
    id: "q050",
    topic: "Misconceptions & Evidence",
    en: "Why might two unrelated events happening one after another (like a black cat crossing and then something going wrong) NOT prove cause and effect?",
    te: "ఒకదాని తర్వాత ఒకటి జరిగే రెండు సంబంధం లేని సంఘటనలు (నల్లి పిల్లి దాటడం, తర్వాత ఏదైనా తప్పు జరగడం వంటివి) కారణ-ఫలిత సంబంధాన్ని ఎందుకు రుజువు చేయలేవు?",
    options: [
      { id: "a", en: "Because coincidence in timing does not establish a real, testable causal link", te: "సమయంలో యాదృచ్ఛికత ఒక నిజమైన, పరీక్షించదగిన కారణ సంబంధాన్ని స్థాపించదు కాబట్టి" },
      { id: "b", en: "Because black cats are always lucky", te: "నల్లి పిల్లులు ఎల్లప్పుడూ అదృష్టాన్ని తెస్తాయి కాబట్టి" },
      { id: "c", en: "Because such events never actually happen", te: "అలాంటి సంఘటనలు నిజంగా ఎప్పుడూ జరగవు కాబట్టి" },
      { id: "d", en: "Because science cannot study coincidences at all", te: "శాస్త్రం యాదృచ్ఛిక సంఘటనలను అస్సలు అధ్యయనం చేయదు కాబట్టి" }
    ],
    correct: "a",
    explanation_en: "Two events occurring in sequence does not mean one caused the other; scientific reasoning looks for a testable, repeatable mechanism before accepting a cause-and-effect claim.",
    explanation_te: "వరుసగా జరిగే రెండు సంఘటనలు ఒకదానికొకటి కారణమని అర్థం కాదు; కారణ-ఫలిత సంబంధాన్ని అంగీకరించే ముందు శాస్త్రీయ తర్కం పరీక్షించదగిన, పునరావృతమయ్యే యంత్రాంగం కోసం చూస్తుంది."
  }
];

const QUESTION_TOPICS = ["Astronomy", "Biology", "Chemistry", "Environment & Ecology", "Everyday Science", "Human Physiology", "Misconceptions & Evidence", "Physics", "Scientific Reasoning"];

if (typeof window !== 'undefined') {
  window.CHEKUMUKHI_QUESTIONS = CHEKUMUKHI_QUESTIONS;
  window.QUESTION_TOPICS = QUESTION_TOPICS;
}
