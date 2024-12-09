"use client";

import { useWindowEvent } from "@/utils/hooks/use-window-event";
import { useState } from "react";

/**
 * 拾い忘れたエラー, 非同期処理, イベントハンドラ内のエラーをキャッチする
 */
export const useWatchUnhandledError = () => {
  const [error, setError] = useState<Error | null>(null);

  if (error) throw error;

  useWindowEvent(
    "error",
    (event) => setError(event.error instanceof Error ? event.error : new Error(JSON.stringify(event.error))),
    [],
  );

  useWindowEvent(
    "unhandledrejection",
    (event) => setError(event.reason instanceof Error ? event.reason : new Error(JSON.stringify(event.reason))),
    [],
  );
};
