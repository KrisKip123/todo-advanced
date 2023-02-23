import { useCallback, useState } from "react";

const create = (): Record<string, never> => ({});

export default function useForceUpdate(): VoidFunction {
  const [, setValue] = useState<Record<string, never>>(create);

  return useCallback((): void => {
    setValue(create());
  }, []);
}
