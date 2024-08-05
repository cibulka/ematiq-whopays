import { useAppCallbacks, useAppContext } from "@/context";
import { Range } from "@/shared/components/range";
import { countMax, countMin } from "@/shared/constants/app";

export function IntroRange() {
  const {
    state: { loaded, people },
  } = useAppContext();
  const { onSetCount } = useAppCallbacks();

  return loaded ? (
    <Range className="w-full h-10" value={people.length} onChange={onSetCount} min={countMin} max={countMax} />
  ) : (
    <div className="w-full bg-neutral-200 rounded-md animate-pulse" />
  );
}
