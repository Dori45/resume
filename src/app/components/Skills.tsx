import { Col, Row, Tag } from "antd";

export default function Skills() {
  const skills = [
    "Vue 3",
    "Nuxt 4",
    "TypeScript",
    "Vite",
    "Pinia",
    "Tailwind",
  ];
    const data = [
      { icon: "/icons/vue.svg",skills: "Vue 3"},
      { icon: "/icons/nuxt.svg",skills: "Nuxt 4"},
    { icon: "/icons/react.svg",skills: "React"},
    { icon: "/icons/next.svg",skills: "Next.ts"},
    { icon: "/icons/ts.svg",skills: "TypeScript"},
     {icon: "/icons/js.svg",skills: "JavaScript"},
    { icon: "/icons/pinia.svg",skills: "Pinia"},
    { icon: "/icons/tailwindcss.svg",skills: "Tailwind css"},

  ];

  return (
    <div className="skillsWarp">
      <h2>技能專長</h2>
      <Row className="tags" id="experience">
        {data.map((item,s) => (
          <Col className="tag" key={s} xs={{span:6}} sm={{span:6}} md={{span:6}} lg={{span:3}}>
            <div style={{fontSize:'36px'}}>
            <img src={item.icon} alt="" />
            </div>
            {item.skills}
          </Col>
        ))}
      </Row>
    </div>
  );
}