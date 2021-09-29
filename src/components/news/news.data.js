const newsData = [
  {
    id: "n1",
    title: "プリント基板設計勉強会\nIN べトナム国立ダナン工科大学",
    date: "2021.04.06",
    topImg: "/danang.jpeg",
    images: ["/danang.jpeg", "/laos.jpeg"],
    content:
      "株式会社図研様のご協力のもと、一年を通してベトナム国立ダナン工科大学の学生に、図研製 基板CAD CR-8000 Design Force を用いてプリント基板パターン設計勉強会を行っております。",
  },
  {
    id: "n2",
    title: "プリント基板設計勉強会\nIN べトナム国立ダナン工科大学",
    date: "2021.04.06",
    topImg: "/danang.jpeg",
    images: ["/danang.jpeg", "/laos.jpeg"],
    content:
      "株式会社図研様のご協力のもと、一年を通してベトナム国立ダナン工科大学の学生に、図研製 基板CAD CR-8000 Design Force を用いてプリント基板パターン設計勉強会を行っております。",
  },
  {
    id: "n3",
    title: "プリント基板設計勉強会\nIN べトナム国立ダナン工科大学",
    date: "2021.04.06",
    topImg: "/danang.jpeg",
    images: ["/danang.jpeg", "/laos.jpeg"],
    content:
      "株式会社図研様のご協力のもと、一年を通してベトナム国立ダナン工科大学の学生に、図研製 基板CAD CR-8000 Design Force を用いてプリント基板パターン設計勉強会を行っております。",
  },
];

export function getAllNews() {
  return newsData;
}

export function getNewsById(id) {
  return newsData.find((news) => news.id === id);
}
