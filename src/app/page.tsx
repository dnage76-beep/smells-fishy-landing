import type { Metadata } from "next";
import AppleLanding from "./variants/06-apple/apple";

export const metadata: Metadata = {
  title: "Smells Phishy — Suspicious?",
  description:
    "One press. About eight seconds. A plain answer on what stood out in a suspicious text, email, link or screenshot. Private iPhone beta.",
};

export default function Home() {
  return <AppleLanding />;
}
