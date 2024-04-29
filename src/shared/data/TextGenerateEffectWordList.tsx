"use client";
import { TextGenerateEffect } from "~/components/atoms/TextGenerateEffect";

const techWords: string[] = ["Blockchain", "Artificial", "Machine", "Algorithm", "Database", "Network"];

export function TextGenerateEffectDemo() {
  // Here we make sure to pass an array of strings to match the expected type
  return <TextGenerateEffect words={techWords} className="text-center text-4xl" />;
}