import * as React from "react";
import {
  Bot,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/presentation/components/nav-main";
import { TeamSwitcher } from "@/presentation/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Adriana Showroom",
      logo: GalleryVerticalEnd,
      plan: "Enterprise Software",
    },
  ],
  navMain: [
    {
      title: "Cadastro",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Produto",
          url: "/products",
        },
        {
          title: "Cliente",
          url: "#",
        },
        {
          title: "Fornecedor",
          url: "#",
        },
      ],
    },
    {
      title: "Administração",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Produto",
          url: "#",
        },
        {
          title: "Cliente",
          url: "#",
        },
        {
          title: "Fornecedor",
          url: "#",
        },
      ],
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Em Produção",
          url: "#",
        },
        {
          title: "Thema",
          url: "#",
        },
      ],
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
