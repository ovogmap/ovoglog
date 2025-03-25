export const clsx = (...args: (string | undefined)[]) =>
  args
    .map((str) => str?.trim?.())
    .filter(Boolean)
    .join(" ");
