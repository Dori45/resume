import { Card, Row, Col } from "antd";
import { link } from "fs";
import Link from "next/link";

const { Meta } = Card;

export default function Projects() {
  const projects = [
    {
      title: "管理後台",
      desc: "Nuxt4 + TypeScript 建立後台系統，透過AI協助使用Java建立後端",
      link:"https://github.com/Dori45",
      img:"/images/project3.png"
    },
    {
      title: "App H5 頁面",
      desc: "Vue 3 + Typescrip 建置 H5 ，使用JSBridge 完成與App之間交互的串接",
      link:"https://www.jetfimobile.com/os-discern",
      img:"/images/project2.png"
    },
    {
      title: "公司官網",
      desc: "完整eSIM購買流程、會員管理及金流串接",
      link:"https://www.jetfimobile.com/",
      img:"/images/project1.png"
    },
  ];

  return (
    <section className="section">
      <h2>精選專案</h2>
      <Row gutter={16}>
        {projects.map((p, i) => (
          <Col xs={{span:24}} md={{span:8}} lg={{span:8}} key={i} style={{marginBottom:"16px"}}>
            <Link href={`${p.link}`} target="_blank">
            <Card
              hoverable
              cover={<img src={p.img} />}
              className="projectCard"
              
            >
              <h3 style={{ marginTop: 12 }}>{p.title}</h3>
              <p style={{ color: "#666" }}>{p.desc}</p>
            </Card>
            </Link>
          </Col>
          
        ))}
      </Row>
    </section>
  );
}