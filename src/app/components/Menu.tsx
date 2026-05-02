"use client";

import { useRouter, usePathname } from "next/navigation";
import { Menu as AntMenu } from "antd";
import type { MenuProps } from "antd";
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  UserOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();
    type MenuItem = Required<MenuProps>['items'][number];

    const items: MenuItem[] = [
    { key: '/', icon: <PieChartOutlined />, label: '儀錶板'},
    { key: '/Order', icon: <ContainerOutlined />, label: '訂單管理列表'},
    { key: '/Product', icon: <DesktopOutlined />, label: '產品管理列表'},
    { key: '/Account', icon: <UserOutlined />, label: '用戶管理列表'},
    ];
  return (
    <AntMenu
        selectedKeys={[pathname]}
        mode="inline"
        theme="dark"
        onClick={({ key }) => router.push(key)}   // 👈 統一處理跳轉
        items={items}
    />
  );
}
