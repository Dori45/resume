"use client";

import { Button,Image } from "antd";
import {
  GithubOutlined,MailOutlined
} from '@ant-design/icons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left" >
        <h1>
          Hi, 我是 <span className="name">Dori</span>
        </h1>
        <p>
          前端工程師 / 精通 Vue3 & Nuxt4 <br />
          具備4–5年前端開發經驗，專注打造高效能與兼具使用體驗的前端應用
        </p>
        <div id="about" className="btn-group">
          <Button size="large" color="default" variant="filled" shape="round" icon={<GithubOutlined />} href="https://github.com/Dori45" target="_blank">Dori Ting</Button>
          <Button size="large" color="default" variant="filled" shape="round" icon={<MailOutlined />} href="mailto:tzulingting@gmail.com">tzulingting@gmail.com</Button>
        </div>
      </div>

      <div className="hero-right">
        <img src="/images/Frame.png" />
      </div>
    </section>
  );
}