"use client";

import { Card, Row, Col } from "antd";


export default function Stats() {



  const data = [
    { icon: "/icons/work.svg",title: "4年", desc: "開發經驗" ,color:"#F3F7FB"},
    { icon: "/icons/code.svg",title: "4個", desc: "開發平台",color:"#F2F3FE" },
  ];

  return (
    <Row className="statsWarp">
      <Col sm={{span:24}} lg={{span:16}} style={{paddingRight:"8px"}}>
      <h2>關於我</h2>
      <p id="skills">　　目前主要負責公司 H5、官方網站及 公司內部與SaaS服務管理後台的前端開發與維護，具備從 0 到 1 建置完整前端專案的實務經驗。 在開發過程中，重視系統的可維護性與使用者體驗，習慣採用模組化與元件化設計，以提升開發效率並降低後續維護成本。同時也具備前後端整合經驗，能與 PM 及後端工程師密切協作，透過需求討論與技術溝通持續優化產品與系統流程。 技術上持續精進 Nuxt 應用；在專案開發上，能同時負責多項開發任務並確保品質與時程。</p>
      </Col>
      {data.map((item, i) => (
        <Col key={i} xs={{span:11}} lg={{span:3}} className="statsCard" style={{backgroundColor:`${item.color}`}}>
          <img src={item.icon} alt="" />
          <div className="text">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}