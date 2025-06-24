
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Home, Dumbbell, Apple, Users, TrendingUp, Target, Calendar, Settings, LogOut, ChevronUp } from "lucide-react"
import { useUser } from "./UserContext"
import { auth } from "@/lib/Firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"


const navigation = [
  { name: "Dashboard", href: "#", icon: Home, current: true },
  { name: "Workouts", href: "#", icon: Dumbbell, current: false },
  { name: "Nutrition", href: "#", icon: Apple, current: false },
  { name: "Community", href: "#", icon: Users, current: false },
  { name: "Progress", href: "#", icon: TrendingUp, current: false },
  { name: "Goals", href: "#", icon: Target, current: false },
  { name: "Schedule", href: "#", icon: Calendar, current: false },
]

export function AppSidebar() {
  const {username}  = useUser()
  const navigate = useNavigate()
  const handleSignOut = async () =>{
    await signOut(auth);
    navigate("/sign-in");
  
  }

  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="border-b border-gray-100 pb-4">
        <div className="flex items-center space-x-3 px-3">
          <div className="w-10 h-10 bg-blue-300 rounded-xl flex items-center justify-center">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className=" bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              FitBuddy
            </p>
            <p className="text-xs text-gray-500">Your fitness journey</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 cursor-pointer">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.current}
                    className="h-11 px-3 rounded-xl transition-all duration-200 hover:bg-blue-400 hover:text-white"
                  >
                    <a href={item.href} className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100 pt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-12 px-3 rounded-xl">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-blue-400 text-white text-sm font-semibold">
                     {username.slice(0,2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">{username}</p>
                    <p className="text-xs text-gray-500"> Member</p>
                  </div>
                  <ChevronUp className="h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-56">
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="h-4 w-4 mr-2 " />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => handleSignOut()}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
