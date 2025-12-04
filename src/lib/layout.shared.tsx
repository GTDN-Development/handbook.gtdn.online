import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "GTDN",
    },
    githubUrl: "https://github.com",
    themeSwitch: {
      mode: "light-dark-system",
    },
  };
}
