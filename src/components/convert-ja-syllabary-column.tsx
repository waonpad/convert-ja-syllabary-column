"use client";

import { clientEnv } from "@/config/env/client";
import { convertJaSyllabaryColumnPartOfCharacters } from "@/lib/convert-ja-syllabary/convert-column";
import { computeTextareaHeightByLines } from "@/utils";
import { useRef, useState } from "react";
import { ExternalLink } from "./external-link";

// TODO: もっといい感じにする
export const ConvertJaSyllabaryColumn = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const columnSelectRef = useRef<HTMLSelectElement | null>(null);
  const [converted, setConverted] = useState<string>("");

  // TODO: 良い感じにする
  const shareText = `${converted}\n\n${clientEnv.NEXT_PUBLIC_APP_NAME}\n${clientEnv.NEXT_PUBLIC_HOST_URL}`;

  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-lg">
        <span>全部</span>
        <select
          ref={columnSelectRef}
          className="mx-2 rounded-md border-2 border-black p-1"
          onChange={(event) => {
            const element = event.target as HTMLSelectElement;

            // 変換
            const convertedValue = convertJaSyllabaryColumnPartOfCharacters({
              characters: textareaRef.current?.value as never,
              column: element.value as never,
            });

            setConverted(convertedValue);
          }}
        >
          <option value="あ">ア</option>
          <option value="い">イ</option>
          <option value="う">ウ</option>
          <option value="え">エ</option>
          <option value="お">オ</option>
        </select>
        <span>段にすると古典インドっぽくなる言葉</span>
      </div>
      <div className="flex flex-col gap-1">
        <textarea
          ref={textareaRef}
          rows={1}
          className="rounded-md border-2 border-black p-2"
          placeholder="クソアプリ"
          onChange={(event) => {
            const element = event.target;

            // 高さを自動調整
            element.style.height = `${computeTextareaHeightByLines(element)}px`;

            // 変換
            const value = element.value;
            const convertedValue = convertJaSyllabaryColumnPartOfCharacters({
              characters: value,
              column: columnSelectRef.current?.value as never,
            });

            setConverted(convertedValue);
          }}
        />
        <span className="text-center font-bold text-4xl">↓</span>
        {converted ? (
          <span className="whitespace-pre rounded-md border-2 border-black p-2">{converted}</span>
        ) : (
          <span className="rounded-md border-2 border-black text-center text-4xl">🇮🇳</span>
        )}
      </div>
      <ExternalLink
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
        className="ml-auto rounded-md border-2 border-black px-4 py-2"
      >
        Xで共有
      </ExternalLink>
    </div>
  );
};
