import type { Metadata } from "next";
import ArcLanding from "./variants/05-arc/arc";

export const metadata: Metadata = {
  title: "Smells Phishy — Feels off? Press once.",
  description:
    "Screenshot a strange text, snap a photo, or paste a message. About eight seconds later Smells Phishy tells you what stood out and what to do next. Private iPhone beta.",
};

export default function Home() {
  return <ArcLanding />;
}
