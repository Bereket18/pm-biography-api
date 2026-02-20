// server.js - Biography API
const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS so React Native can access
app.use(cors());
app.use(express.json());

// Biography Data
const biographyData = {
  success: true,
  data: {
    personalInfo: {
      name: "Abiy Ahmed Ali",
      fullName: "Abiy Ahmed Ali",
      dateOfBirth: "August 15, 1976",
      birthPlace: "Beshasha, Ethiopia",
      nationality: "Ethiopian",
      currentPosition: "Prime Minister of Ethiopia",
      office: "Office of the Prime Minister",
      city: "Addis Ababa",
      address: "Great Palace, Addis Ababa, Ethiopia",
      email: "info@pmo.gov.et",
      phone: "+251-11-155-2020",
    },
    images: {
      profilePhoto:
        "https://www.caasimada.net/wp-content/uploads/2025/06/Abiy-Ahmed-2048x1438.jpg",
      officialPortrait:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Prime_Minister_of_Ethiopia_Abiy_Ahmed_Ali_%28cropped%29.jpg/500px-Prime_Minister_of_Ethiopia_Abiy_Ahmed_Ali_%28cropped%29.jpg",
      nobelPrize:
        "https://ethiopia.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2019-12/pm_abiy_ahmed_recieving_the_nobel_peace_prize.jpg?itok=CzltgpVm",
    },
    biography: {
      summary:
        "Abiy Ahmed Ali is an Ethiopian politician who has served as the 4th Prime Minister of Ethiopia since April 2, 2018. He was awarded the Nobel Peace Prize in 2019 for his efforts to achieve peace and international cooperation, particularly for his decisive initiative to resolve the border conflict with neighboring Eritrea.",
      earlyLife:
        "Born in the small town of Beshasha, Abiy Ahmed grew up in a modest family with a Muslim father and a Christian Orthodox mother. He joined the armed struggle against the Derg regime as a teenager.",
      militaryCareer:
        "Served in the Ethiopian National Defense Force and participated in the peacekeeping mission in Rwanda. He founded the Information Network Security Agency (INSA), Ethiopia's first cyber security agency.",
    },
    education: [
      {
        degree: "PhD in Peace and Security",
        institution: "Addis Ababa University",
        year: "2017",
      },
      {
        degree: "Master of Business Administration (MBA)",
        institution: "Leadstar College of Management and Leadership",
        year: "2013",
      },
      {
        degree: "Master of Arts in Transformational Leadership",
        institution: "Greenwich University",
        year: "2011",
      },
      {
        degree: "Bachelor of Science in Computer Engineering",
        institution: "Microlink Information Technology College",
        year: "2009",
      },
    ],
    politicalCareer: {
      party: "Prosperity Party",
      previousParties: [
        "Ethiopian People's Revolutionary Democratic Front (EPRDF)",
      ],
      positions: [
        {
          title: "Prime Minister of Ethiopia",
          startDate: "April 2, 2018",
          endDate: "Present",
        },
        {
          title: "Minister of Science and Technology",
          startDate: "2015",
          endDate: "2018",
        },
        {
          title: "Director-General of INSA",
          startDate: "2010",
          endDate: "22015",
        },
      ],
      keyReforms: [
        "Released political prisoners",
        "Lifted state of emergency",
        "Opened up political space",
        "Liberalized the economy",
        "Promoted women's empowerment (50% female cabinet)",
      ],
    },
    achievements: [
      {
        title: "Nobel Peace Prize",
        year: "2019",
        description:
          "Awarded for his efforts to achieve peace and international cooperation, particularly for resolving the border conflict with Eritrea",
      },
      {
        title: "Ended 20-Year Ethiopia-Eritrea Conflict",
        year: "2018",
        description: "Historic peace agreement ending two decades of hostility",
      },
      {
        title: "Green Legacy Initiative",
        year: "2019",
        description:
          "Environmental campaign that planted billions of trees across Ethiopia",
      },
      {
        title: "Economic Reforms",
        year: "2018-Present",
        description:
          "Opened key sectors to private investment including telecommunications",
      },
      {
        title: "Women's Empowerment",
        year: "2018",
        description:
          "Appointed Ethiopia's first female president and achieved 50% female cabinet representation",
      },
    ],
    awards: [
      "Nobel Peace Prize (2019)",
      "African of the Year (2019)",
      "Félix Houphouët-Boigny Peace Prize (2019)",
      "Time Magazine's 100 Most Influential People (2019)",
    ],
    socialMedia: {
      twitter: "https://twitter.com/AbiyAhmedAli",
      facebook: "https://www.facebook.com/PMAbiyAhmedAli",
      instagram: "https://www.instagram.com/abiyahmedali",
      youtube: "https://www.youtube.com/channel/UCH-kzGGPOECM3w8Nf3J4jbQ",
      website: "https://www.pmo.gov.et",
    },
    quotes: [
      "Peace is not a static condition, but a dynamic process that requires constant nurturing.",
      "We should be able to love our neighbor as ourselves and accept our diversity.",
      "Leadership is about service, not power.",
    ],
    languages: [
      "Amharic (Native)",
      "Oromo (Native)",
      "English (Fluent)",
      "Tigrinya (Proficient)",
    ],
    family: {
      spouse: "Zinash Tayachew",
      children: 3,
      religion: "Pentecostal Christianity",
    },
  },
};

// API Routes
app.get("/", (req, res) => {
  res.json({
    message: "Ethiopian Prime Minister Biography API",
    version: "2.0.0",
    endpoints: {
      biography: "/api/biography",
      personalInfo: "/api/biography/personal",
      education: "/api/biography/education",
      achievements: "/api/biography/achievements",
      images: "/api/biography/images",
      quotes: "/api/biography/quotes",
      socialMedia: "/api/biography/social",
    },
  });
});

// Get full biography
app.get("/api/biography", (req, res) => {
  res.json(biographyData);
});

// Get personal info only
app.get("/api/biography/personal", (req, res) => {
  res.json({
    success: true,
    data: biographyData.data.personalInfo,
  });
});

// Get education only
app.get("/api/biography/education", (req, res) => {
  res.json({
    success: true,
    data: biographyData.data.education,
  });
});

// Get achievements only
app.get("/api/biography/achievements", (req, res) => {
  res.json({
    success: true,
    data: biographyData.data.achievements,
  });
});

// Get images only
app.get("/api/biography/images", (req, res) => {
  res.json({
    success: true,
    data: biographyData.data.images,
  });
});

// Get quotes only
app.get("/api/biography/quotes", (req, res) => {
  res.json({
    success: true,
    data: biographyData.data.quotes,
  });
});

// Get social media links
app.get("/api/biography/social", (req, res) => {
  res.json({
    success: true,
    data: biographyData.data.socialMedia,
  });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Biography API running on port ${PORT}`);
});
