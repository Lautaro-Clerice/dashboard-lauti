"use client";
import React from "react";
import Cookies from "cookies-js";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { ThemeSwitch } from "./theme-switch";
import AccountTotal from "./AccountTotal";
import LoginRepository from "@/services/LoginRepository";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const token = Cookies.get("token");
  const handleLogout = () => {
    LoginRepository.logout();
  };
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand className="flex gap-4">
          <ThemeSwitch />
          {!!token && <AccountTotal />}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="flex gap-4">
          <ThemeSwitch />
          {!!token && <AccountTotal />}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {!!token && (
          <NavbarItem>
            <Button onPress={handleLogout} color="danger" variant="flat">
              Cerrar sesión
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
