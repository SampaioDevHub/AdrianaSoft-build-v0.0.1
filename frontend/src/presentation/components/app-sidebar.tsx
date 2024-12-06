import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/presentation/components/nav-main";
import { TeamSwitcher } from "@/presentation/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Adriana Showroom",
      logo: GalleryVerticalEnd,
      plan: "Enterprise Software",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
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
          url: "/frontend/src/presentation/pages/cadastro",
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
      title: "Controle de Estoque",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Link",
          url: "#",
        },
        {
          title: "Link",
          url: "#",
        },
        {
          title: "Link",
          url: "#",
        },
      ],
    },
    {
      title: "Descrição Link",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Link",
          url: "#",
        },
        {
          title: "Link",
          url: "#",
        },
        {
          title: "Link",
          url: "#",
        },
        {
          title: "Link",
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
          title: "Administração",
          url: "#",
        },
        {
          title: "Carteira",
          url: "#",
        },
        {
          title: "Configuração",
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
      <SidebarFooter>{/*Auth Service*/}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
