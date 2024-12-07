"use client";

import { createConvertedPost } from "@/actions/create-converted-post";
import { clientEnv } from "@/config/env/client";
import { convertJaSyllabaryColumnPartOfCharacters } from "@/lib/convert-ja-syllabary/convert-column";
import { computeTextareaHeightByLines } from "@/utils";
import { type FormEvent, useRef, useState } from "react";
import { ExternalLink } from "./external-link";

// TODO: もっといい感じにする
export const ConvertJaSyllabaryColumn = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const columnSelectRef = useRef<HTMLSelectElement | null>(null);
  const [converted, setConverted] = useState<string>("");

  // errorがsetされたらErrorBoundaryに渡す
  const [error, setError] = useState<Error | null>(null);
  if (error) throw error;

  // TODO: 良い感じにする
  const shareText = `${converted}\n\n${clientEnv.NEXT_PUBLIC_APP_NAME}\n${clientEnv.NEXT_PUBLIC_HOST_URL}`;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // formのactionが実行されないようにする
    event.preventDefault();

    if (!confirm("投稿しますか？\nめんどくさいので削除機能がありません。")) return;

    // DBに保存する
    const { error } = await createConvertedPost(new FormData(event.currentTarget));

    // エラーハンドリング面倒なのでstateに入れてErrorBoundaryに渡しちゃう
    if (error) {
      setError(new Error(JSON.stringify(error)));
      return;
    }

    // revalidateした時点でサイレンダリングが走るのでrouter.refresh()は不要
    // columnの選択はそのままにする

    // textareaの入力をリセット
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    textareaRef.current!.value = "";
    // onChangeが発火しないので手動で高さをリセット
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    textareaRef.current!.style.height = "auto";
    // onChangeが発火しないので手動で変換結果をリセット
    setConverted("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg">
          <span>全部</span>
          <select
            ref={columnSelectRef}
            name="column"
            required={true}
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
            name="input"
            minLength={1}
            required={true}
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
          <div className="text-center font-bold text-4xl">↓</div>
          {converted ? (
            <span className="whitespace-pre-wrap rounded-md border-2 border-black p-2">{converted}</span>
          ) : (
            <span className="rounded-md border-2 border-black text-center text-4xl">🇮🇳</span>
          )}
        </div>
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <span className="inline-flex items-end text-sm sm:text-base">
            元ネタ：
            <ExternalLink
              href="https://anond.hatelabo.jp/20240801082705"
              className="text-blue-500 underline hover:text-blue-600"
            >
              全部ア段にすると古典インドっぽくなる言葉
            </ExternalLink>
          </span>
          <div className="flex gap-2">
            <ExternalLink
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
              className="ml-auto flex-auto rounded-md border-2 border-black px-5 py-2 text-center"
            >
              Xで共有
            </ExternalLink>
            <button type="submit" className="flex-auto rounded-md border-2 border-black px-8 py-2">
              投稿
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
