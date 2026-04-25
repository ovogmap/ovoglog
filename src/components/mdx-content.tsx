import type { ComponentProps, ReactNode } from "react";
import * as runtime from "react/jsx-runtime";

type MdxContentProps = {
  code: string;
};

const components = {
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2 id={toHeadingId(children)} {...props}>
      {children}
    </h2>
  ),
  a: (props: ComponentProps<"a">) => (
    <a {...props} target={props.href?.startsWith("http") ? "_blank" : undefined} />
  ),
};

export function MdxContent({ code }: MdxContentProps) {
  const fn = new Function(code);
  const { default: Content } = fn({ ...runtime });

  return <Content components={components} />;
}

function toHeadingId(children: ReactNode) {
  return String(children).trim().toLowerCase().replace(/\s+/g, "-");
}
