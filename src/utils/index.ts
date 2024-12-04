/**
 * textareaの高さを入力の行数から計算する
 *
 * @param element 計算対象のtextarea要素
 * @returns 計算された高さ
 */
export const computeTextareaHeightByLines = (element: HTMLTextAreaElement): number => {
  const lineHeight = Number.parseInt(getComputedStyle(element).lineHeight);
  const lines = element.value.split("\n");

  const paddingY =
    Number.parseInt(getComputedStyle(element).paddingTop) + Number.parseInt(getComputedStyle(element).paddingBottom);
  const borderY =
    Number.parseInt(getComputedStyle(element).borderTopWidth) +
    Number.parseInt(getComputedStyle(element).borderBottomWidth);

  return lineHeight * lines.length + paddingY + borderY;
};
