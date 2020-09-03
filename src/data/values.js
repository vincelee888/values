const values = [
  {
    key: "GUrqqQ",
    name: "Equality",
    description: "to treat others as equal to myself and vice versa",
  },
  {
    key: "s4fTec",
    name: "Fitness",
    description:
      "to maintain or improve or look after my physical and mental health",
  },
  {
    key: "Kw91xN",
    name: "Compassion/self-compassion",
    description: "to act kindly towards myself and others who are suffering",
  },
  {
    key: "CQvXlv",
    name: "Conformity",
    description: "to be respectful and obedient of rules and obligations",
  },
  {
    key: "3onJZo",
    name: "Acceptance/self-acceptance",
    description: "to be accepting of myself, others, life, etc",
  },
  {
    key: "tnqfoE",
    name: "Patience",
    description: "to wait calmly for what I want",
  },
  {
    key: "hb1wgs",
    name: "Pleasure",
    description: "to create and give pleasure to myself or others",
  },
  {
    key: "xUgb7i",
    name: "Kindness",
    description:
      "to be kind, considerate, nuturing or caring towards myself or others",
  },
  {
    key: "mTKr5b",
    name: "Industry",
    description: "to be industrious, hardworking and dedicated",
  },
  {
    key: "N5qulZ",
    name: "Safety and protection",
    description:
      "to secure, protect or ensure my own safety, or that of others",
  },
  {
    key: "MrWprD",
    name: "Self development",
    description:
      "to keep growing, advancing or improving in knowledge, skills, character or life experience",
  },
  {
    key: "Y5m6Y3",
    name: "Mindfulness",
    description:
      "to be open to, engaged in and curious about the present moment",
  },
  {
    key: "kC3EPW",
    name: "Persistence and commitment",
    description: "to continue resolutely, despite problems and difficulties",
  },
  {
    key: "T4RRJK",
    name: "Reciprocity",
    description:
      "to build relationships in which there is a fair balance of giving and taking",
  },
  {
    key: "OsYzxP",
    name: "Adventure",
    description:
      "to be adventurous; to actively explore novel or stimulating experiences",
  },
  {
    key: "wO0pe0",
    name: "Beauty",
    description:
      "to appreciate, create, nuture or cultivate beauty in myself, others, the environment",
  },
  {
    key: "MgVjuo",
    name: "Intimacy",
    description:
      "to open up, reveal, and share myself emotionally or physically",
  },
  {
    key: "KRu68u",
    name: "Romance",
    description:
      "to be romantic; to display and express love or strong affection",
  },
  {
    key: "KM8IYE",
    name: "Excitement",
    description:
      "to seek, create and engage in activities that are exciting or stimulating",
  },
  {
    key: "MCH4JG",
    name: "Order",
    description: "to be orderly and organised",
  },
  {
    key: "N2GNSy",
    name: "Sexuality",
    description: "to explore or express my sexuality",
  },
  {
    key: "NmJx8H",
    name: "Power",
    description:
      "to strongly influence or wield authority over others e.g. taking charge, leading, organising",
  },
  {
    key: "v79kne",
    name: "Friendliness",
    description: "to be friendly, companionable or agreeable toward others",
  },
  {
    key: "79i0IH",
    name: "Contribution and generosity",
    description: "to contribute, give, help, assist or share",
  },
  {
    key: "otBQ0S",
    name: "Supportiveness",
    description: "to be supportive, helpful and available to myself or others",
  },
  {
    key: "VGaabz",
    name: "Self-awareness",
    description: "to be aware of my own thoughts, feelings and actions",
  },
  {
    key: "WWwKv7",
    name: "Challenge",
    description: "to keep challenging myself to grow, learn and improve",
  },
  {
    key: "ER0m20",
    name: "Assertiveness",
    description:
      "to respectfully stand up for my rights and request what I want",
  },
  {
    key: "K6Frkp",
    name: "Fun and humour",
    description:
      "to be fun loving; to seek, create and engage in fun filled activities",
  },
  {
    key: "q8oTBA",
    name: "Responsibility",
    description: "to be responsible and accountable for my actions",
  },
  {
    key: "j3R5Sy",
    name: "Caring/self care",
    description: "to be caring towards myself, others, the environment etc",
  },
  {
    key: "nlOCA0",
    name: "Fairness and justice",
    description: "to be fair and just to myself and others",
  },
  {
    key: "YgpitH",
    name: "Gratitude",
    description: "to be grateful for appreciative of myself, others and life",
  },
  {
    key: "QLyAGB",
    name: "Respect/self-respect",
    description: "to treat myself and others with care and consideration",
  },
  {
    key: "C9iIEd",
    name: "Sensuality and pleasure",
    description: "to create or enjoy pleasurable and sensual experiences",
  },
  {
    key: "Ayp3xN",
    name: "Encouragement",
    description:
      "to encourage and reward behaviour that I value in myself or others",
  },
  {
    key: "wrLWTn",
    name: "Authenticity",
    description: "to be authentic, genuine and real; to be true to myself",
  },
  {
    key: "iVAYcG",
    name: "Trust",
    description:
      "to be trustworthy; to be loyal, faithful, sincere and reliable",
  },
  {
    key: "w3RpL1",
    name: "Flexibility",
    description: "to adjust and adapt readily to changing circumstances",
  },
  {
    key: "FjsMUI",
    name: "Creativity",
    description: "to be creative or innovative",
  },
  {
    key: "2DYrsM",
    name: "Sensuality",
    description:
      "to create, explore and enjoy experiences that stimulate the five senses",
  },
  {
    key: "jGa7qB",
    name: "Love",
    description: "to act lovingly or affectionately toward myself or others",
  },
  {
    key: "MogcKx",
    name: "Skilfulness",
    description:
      "to continually practice and imprive my skills and apply myself fully",
  },
  {
    key: "vU5gW4",
    name: "Self control",
    description: "to act in accordance with my own ideals",
  },
  {
    key: "v8BGJx",
    name: "Spirituality",
    description: "to connect with things bigger than myself",
  },
  {
    key: "ASA7WY",
    name: "Connection",
    description:
      "to engage fully in whatever I'm doing and be fully present with others",
  },
  {
    key: "NWI4Y5",
    name: "Courage",
    description:
      "to be courageous or brave; to persist in the face of fear, threat or difficulty",
  },
  {
    key: "BcJGrc",
    name: "Open mindedness",
    description:
      "to think things through, see things from others' points of view and weigh evidence fairly",
  },
  {
    key: "JYppjV",
    name: "Curiosity",
    description:
      "to be curious, open minded and interested; to explore and discover",
  },
  {
    key: "fQYsfp",
    name: "Honesty",
    description: "to be honest, truthful and sincere with myself and others",
  },
  {
    key: "81nnhv",
    name: "Self care",
    description: "to look after my health and wellbeing and get my needs met",
  },
  {
    key: "xiozwg",
    name: "Freedom and independence",
    description: "to choose how I live and help others do likewise",
  },
  {
    key: "sG8EwR",
    name: "Co-operation",
    description: "to be co-operative and collaborative with others",
  },
  {
    key: "K6haaB",
    name: "Forgiveness/self-forgiveness",
    description: "to be forgiving toward myself or others",
  },
];

export default values;
