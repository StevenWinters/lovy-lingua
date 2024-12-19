const quizData = [
  {
    langauge: "Spanish",
    heading: "Spanish Translation Quiz",
    questions: [
      {
        question: "Translate: 'The cat is sleeping on the sofa.'",
        options: [
          "El gato está durmiendo en el sofá.",
          "El gato duerme en la cama.",
          "El gato corre en el jardín.",
          "El gato está saltando en el sofá.",
        ],
        answer: "El gato está durmiendo en el sofá.",
      },
      {
        question: "Translate: 'Where is the bathroom?'",
        options: [
          "¿Dónde está la cocina?",
          "¿Dónde está el baño?",
          "¿Dónde está el dormitorio?",
          "¿Dónde está el parque?",
        ],
        answer: "¿Dónde está el baño?",
      },
      {
        question: "Translate: 'Can you help me, please?'",
        options: [
          "¿Puedes llevarme, por favor?",
          "¿Puedes ayudarme, por favor?",
          "¿Puedes escucharme, por favor?",
          "¿Puedes esperarme, por favor?",
        ],
        answer: "¿Puedes ayudarme, por favor?",
      },
      {
        question: "Translate: 'We are going to the beach tomorrow.'",
        options: [
          "Vamos a la playa hoy.",
          "Fuimos a la playa mañana.",
          "Vamos a la playa mañana.",
          "Estamos en la playa ahora.",
        ],
        answer: "Vamos a la playa mañana.",
      },
      {
        question: "Translate: 'He is reading a book in the library.'",
        options: [
          "Él lee un libro en la cafetería.",
          "Él está leyendo un libro en la biblioteca.",
          "Él está escribiendo un libro en la biblioteca.",
          "Él está leyendo un periódico en la biblioteca.",
        ],
        answer: "Él está leyendo un libro en la biblioteca.",
      },
    ],
  },
  {
    langauge: "French",
    heading: "French Translation Quiz",
    questions: [
      {
        question: "Translate: 'I would like a coffee, please.'",
        options: [
          "Je voudrais un café, s'il vous plaît.",
          "Je voudrais un thé, s'il vous plaît.",
          "Je voudrais de l'eau, s'il vous plaît.",
          "Je voudrais un sandwich, s'il vous plaît.",
        ],
        answer: "Je voudrais un café, s'il vous plaît.",
      },
      {
        question: "Translate: 'Where is the train station?'",
        options: [
          "Où est la bibliothèque?",
          "Où est la gare?",
          "Où est l'hôtel?",
          "Où est le parc?",
        ],
        answer: "Où est la gare?",
      },
      {
        question: "Translate: 'The book is on the table.'",
        options: [
          "Le livre est sous la table.",
          "Le livre est dans la table.",
          "Le livre est sur la table.",
          "Le livre est derrière la table.",
        ],
        answer: "Le livre est sur la table.",
      },
      {
        question: "Translate: 'How are you?'",
        options: [
          "Comment allez-vous?",
          "Comment ça va?",
          "Ça va bien?",
          "All of the above.",
        ],
        answer: "All of the above.",
      },
      {
        question: "Translate: 'It is a beautiful day.'",
        options: [
          "C'est une journée ensoleillée.",
          "C'est une belle journée.",
          "Il fait beau.",
          "All of the above.",
        ],
        answer: "All of the above.",
      },
    ],
  },
  {
    langauge: "German",
    heading: "German Translation Quiz",
    questions: [
      {
        question: "Translate: 'Where is the nearest train station?'",
        options: [
          "Wo ist der nächste Bahnhof?",
          "Wo ist der nächste Bus?",
          "Wo ist das nächste Gebäude?",
          "Wann fährt der nächste Zug?",
        ],
        answer: "Wo ist der nächste Bahnhof?",
      },
      {
        question: "Translate: 'I am learning German.'",
        options: [
          "Ich lerne Deutsch.",
          "Ich liebe Deutsch.",
          "Ich spreche Deutsch.",
          "Ich schreibe Deutsch.",
        ],
        answer: "Ich lerne Deutsch.",
      },
      {
        question: "Translate: 'Can you help me, please?'",
        options: [
          "Können Sie mir helfen, bitte?",
          "Können Sie mich fahren, bitte?",
          "Kannst du mir sprechen, bitte?",
          "Kannst du mir zuhören, bitte?",
        ],
        answer: "Können Sie mir helfen, bitte?",
      },
      {
        question: "Translate: 'The weather is nice today.'",
        options: [
          "Das Wetter ist schön heute.",
          "Das Wetter ist heiß heute.",
          "Das Wetter ist kalt heute.",
          "Das Wetter ist nass heute.",
        ],
        answer: "Das Wetter ist schön heute.",
      },
      {
        question: "Translate: 'We are going to the city tomorrow.'",
        options: [
          "Wir gehen morgen in die Stadt.",
          "Wir fahren morgen in die Stadt.",
          "Wir laufen morgen in die Stadt.",
          "Wir bleiben morgen in der Stadt.",
        ],
        answer: "Wir fahren morgen in die Stadt.",
      },
    ],
  },
  {
    langauge: "Chinese",
    heading: "Chinese Translation Quiz",
    questions: [
      {
        question: "Translate: 'Hello' into Chinese.",
        options: [
          "你好 (Nǐ hǎo)",
          "再见 (Zài jiàn)",
          "谢谢 (Xièxiè)",
          "对不起 (Duìbùqǐ)",
        ],
        answer: "你好 (Nǐ hǎo)",
      },
      {
        question: "Translate: 'Thank you' into Chinese.",
        options: [
          "谢谢 (Xièxiè)",
          "请 (Qǐng)",
          "不客气 (Bù kèqì)",
          "你好 (Nǐ hǎo)",
        ],
        answer: "谢谢 (Xièxiè)",
      },
      {
        question: "Translate: 'Goodbye' into Chinese.",
        options: [
          "再见 (Zài jiàn)",
          "你好 (Nǐ hǎo)",
          "谢谢 (Xièxiè)",
          "对不起 (Duìbùqǐ)",
        ],
        answer: "再见 (Zài jiàn)",
      },
      {
        question: "Translate: 'How are you?' into Chinese.",
        options: [
          "你好吗? (Nǐ hǎo ma?)",
          "再见 (Zài jiàn)",
          "谢谢 (Xièxiè)",
          "对不起 (Duìbùqǐ)",
        ],
        answer: "你好吗? (Nǐ hǎo ma?)",
      },
      {
        question: "Translate: 'I'm sorry' into Chinese.",
        options: [
          "对不起 (Duìbùqǐ)",
          "你好 (Nǐ hǎo)",
          "谢谢 (Xièxiè)",
          "请 (Qǐng)",
        ],
        answer: "对不起 (Duìbùqǐ)",
      },
    ],
  },
];

export default quizData;
