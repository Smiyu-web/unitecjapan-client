const historydata = [
  { year: 2005, description: "有限会社RS設立（資本金200万円）" },
  {
    year: 2013,
    description:
      "ユニテック電子株式会社の分社化に伴い、\n「ユニテック ジャパン株式会社」に社名変更",
  },
  { year: 2013, description: "2,200万円資本増資" },
  {
    year: 2013,
    description: "ユニテック ベトナム株式会社を100%子会社化",
  },
  {
    year: 2015,
    description: "5,500万円資本増資",
  },
  { year: 2015, description: "ラオス国立大学と業務提携契約を締結" },
  {
    year: 2016,
    description: "東京営業所設立",
  },
];

export function getAllHistory() {
  return historydata;
}

const companydata = [
  { title: "社名", description: "ユニテック ジャパン株式会社\nUNITEC JAPAN" },
  { title: "代表取締役社長", description: "瀬戸山　良二\nRyoji Setoyama" },
  {
    title: "本社",
    description: "兵庫県西宮市甲子園口2-21-3\nピュア甲子園口2F",
  },
  { title: "電話番号", description: "0798-64-1902" },
  { title: "FAX", description: "0798-64-1905" },
  {
    title: "東京営業所",
    description: "東京都墨田区錦糸1-2-1 アルカセントラル14階",
  },
  { title: "子会社", description: "ユニテック ベトナム株式会社" },
  {
    title: "業務内容",
    description: "電子機器の設計・開発、基板製作・実装、\n電子部品・機器販売",
  },
  {
    title: "銀行取引",
    description:
      "三井住友銀行、三菱UFJ銀行、尼崎信用金庫、\n京都銀行、伊予銀行、池田泉州銀行",
  },
];

export function getAllCompany() {
  return companydata;
}

const accessdata = [
  {
    office: "本社",
    address: "〒663-8113\n兵庫県西宮市甲子園口2-21-3\nピュア甲子園口2F",
    maplink: "https://goo.gl/maps/rMPFiXBkrT9zwE5HA",
    map: "/headoffice.png",
  },
  {
    office: "東京営業所",
    address: "〒130－0013\n東京都墨田区錦糸1-2-1\nアルカセントラル14階",
    maplink: "https://goo.gl/maps/zja18Z7xhKEtqCsZ6",
    map: "/tokyooffice.png",
  },
  {
    office: "ユニテック ベトナム株式会社",
    address:
      "DANANG UNIVERSITY OF TECHNOLOGY\nC Building, 214 Room,\n54 Nguyen Luong Street,\nLien Chieu Disrict Da Nang City,\nVietnam",
    maplink: "https://goo.gl/maps/ZXbf3BF2XakV7guc8",
    map: "/vietnamoffice.png",
  },
];

export function getAllAccess() {
  return accessdata;
}
