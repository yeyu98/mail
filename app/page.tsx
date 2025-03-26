/*
 * @Author: yeyu98
 * @Date: 2025-03-27 00:54:30
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-03-27 01:39:34
 * @Description: 
 */
"use client";
import { Button } from "./ui/button";

export const runtime = "edge";

export default function Home() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="flex">
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
}
