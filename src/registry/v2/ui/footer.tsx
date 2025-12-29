"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { Container } from "./container";
import { Divider } from "@/components/ui/divider";
import { ThemeToggle } from "./theme-toggle";
import { NavLink } from "@/components/ui/nav-link";
import Link from "next/link";
import { chain } from "@/lib/utils";
import {
  primaryNavLinksArray,
  secondaryNavLinksArray,
  type NavigationItem,
} from "@/config/nav-links";
import { legalLinksArray } from "@/config/legal-links";
import { socialMediaLinksArray } from "@/config/social-media-links";
import { Logo } from "@/components/ui/logo";

export function Footer(props: React.ComponentProps<"footer">) {
  return (
    <footer {...props} className={clsx("border-t-border-default border-t", props.className)}>
      <Container>
        <div className="grid min-w-0 gap-16 py-16 lg:grid-cols-7 2xl:gap-32">
          {/* Brand section */}
          <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6 lg:col-span-2">
            <Link href="/" aria-label="Home Page">
              <Logo aria-hidden="true" className="text-text-emphasized h-auto w-20" />
            </Link>
            <p className="text-text-subtle text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <Divider subtle />
            <ThemeToggle />
            <ScrollToTopButton className="mt-auto" />
          </div>

          {/* Navigation sections */}
          <div className="grid min-w-0 grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 lg:col-span-5 lg:grid-cols-4 lg:gap-8">
            {/* Col 1  */}
            <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6">
              <h3 className="text-text-emphasized text-sm/6 font-semibold">Navigation</h3>
              <FooterNavigation navigation={primaryNavLinksArray} />
            </div>
            {/* Col 2  */}
            <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6">
              <h3 className="text-text-emphasized text-sm/6 font-semibold">Other</h3>
              <FooterNavigation navigation={secondaryNavLinksArray} />
            </div>
            {/* Col 3  */}
            <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6">
              <h3 className="text-text-emphasized text-sm/6 font-semibold">Socials</h3>
              <FooterSocialNavigation navigation={socialMediaLinksArray} />
            </div>
            {/* Col 4  */}
            <div className="flex min-w-0 flex-col items-start justify-start gap-4 sm:gap-6">
              <h3 className="text-text-emphasized text-sm/6 font-semibold">Legal</h3>
              <FooterNavigation navigation={legalLinksArray} />
              <p className="text-text-subtle text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>
          </div>
        </div>

        {/* Metadata footer section */}
        <div className="border-t-border-default flex min-w-0 flex-wrap items-start justify-between gap-6 border-t py-12 sm:items-center">
          <Copyright company="gtdn.online" />
          <AgencyCredit />
        </div>
      </Container>
    </footer>
  );
}

function FooterNavigation({
  navigation,
  ...props
}: Omit<React.ComponentProps<"ul">, "children"> & {
  navigation: NavigationItem[];
}) {
  return (
    <ul {...props} role="list" className={clsx("flex min-w-0 flex-col gap-2", props.className)}>
      {navigation.map((item, i) => (
        <li key={i}>
          {"items" in item ? (
            <>
              <div className="text-text-subtle sm:text-sm/6">{item.name}</div>
              <div className="pt-1.5">
                <div className="border-border-subtle flex min-w-0 flex-col items-start gap-2 border-l py-1 pl-3 sm:text-sm/6">
                  {item.items.map((subitem, j) => (
                    <NavLink
                      key={j}
                      href={subitem.href}
                      className="underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60 sm:text-sm/6"
                    >
                      {subitem.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <NavLink
              href={item.href}
              className="underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60 sm:text-sm/6"
            >
              {item.name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
}

function FooterSocialNavigation({
  navigation,
  ...props
}: Omit<React.ComponentProps<"ul">, "children"> & {
  navigation: typeof socialMediaLinksArray;
}) {
  return (
    <ul {...props} role="list" className={clsx("flex min-w-0 flex-col gap-2", props.className)}>
      {navigation.map((item, i) => (
        <li key={i}>
          <NavLink
            href={item.href}
            className="underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60 sm:text-sm/6"
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function Copyright({
  company = "Your Company",
  ...props
}: Omit<React.ComponentProps<"p">, "children"> & {
  company?: string;
}) {
  return (
    <p {...props} className={clsx("text-text-subtle text-sm", props.className)}>
      Copyright &copy;&nbsp;{new Date().getFullYear()}&nbsp;{company} - All rights reserved.
    </p>
  );
}

function ScrollToTopButton(props: Omit<Headless.ButtonProps, "children">) {
  return (
    <Headless.Button
      {...props}
      onClick={chain(props.onClick, () => window.scrollTo({ top: 0, behavior: "smooth" }))}
      className={clsx(
        "cursor-pointer underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60 sm:text-sm/6",
        props.className
      )}
    >
      Scroll to top{" "}
      <span aria-hidden="true" className="ml-2">
        ↑
      </span>
    </Headless.Button>
  );
}

function AgencyCredit(props: React.ComponentProps<"p">) {
  return (
    <p {...props} className={clsx("text-sm", props.className)}>
      <span className="text-text-subtle">Created by </span>
      <NavLink
        href="https://www.gtdn.online/"
        className="underline decoration-current/20 decoration-1 underline-offset-2 hover:decoration-current/60"
      >
        gtdn.online
      </NavLink>
    </p>
  );
}
