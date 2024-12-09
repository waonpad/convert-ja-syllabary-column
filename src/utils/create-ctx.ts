import { createContext, useContext } from "react";

/**
 * @description
 * 短いコードでContextとProviderを作成する関数
 * @example
 * const [createdUseXXX, SetXXXProvider] = createCtx<ReturnType<typeof useXXXCtx>>();
 * export { SetXXXProvider };
 * export const useXXX = createdUseXXX;
 * export const useXXXCtx = () => {
 *   ...
 * };
 */
export const createCtx = <ContextType>() => {
  const Context = createContext<ContextType | undefined>(undefined);

  const useCtx = () => {
    const c = useContext(Context);

    if (!c) throw new Error("useCtx must be inside a Provider with a value");

    return c;
  };

  return [useCtx, Context] as const;
};
