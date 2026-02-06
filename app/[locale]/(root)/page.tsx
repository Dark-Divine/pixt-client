import HomeComponent from "@/components/home";
import { Metadata } from "next";

export default function Home() {
  return <HomeComponent />
}

export const metadata: Metadata = {
  title: 'Pixel Tuner - Web, Design, AI & Marketing Studio',
  description: 'Creative studio specializing in web development, UI/UX design, AI solutions, and digital marketing.',
  generator: 'Pixel Tuner',
}