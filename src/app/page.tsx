"use client";

import useCounterStore from "@/store/useCountStore";
import { useShallow } from "zustand/react/shallow";
import { SaButton } from "@saharaai/ui";

export default function Home() {
  const { count, increment, decrement } = useCounterStore(
    useShallow((state) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
    }))
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-saBgContainerDeep">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>计数: {count}</h1>

        <SaButton onClick={increment}>增加</SaButton>
        <SaButton onClick={decrement}>减少</SaButton>
      </main>
    </div>
  );
}
