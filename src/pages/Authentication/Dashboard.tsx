import { AppSidebar } from "../../components/sub-sections/Sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Activity,
  Apple,
  ArrowRight,
  Clock,
  FlameIcon as Fire,
  Heart,
  Play,
  Star,
  Target,
  TrendingUp,
  Users,
  Trophy,
  Timer,
  Award,
  Sparkles,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDoc,doc} from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "@/lib/Firebase"
import { useUser } from "@/components/sub-sections/UserContext"



export default function Dashboard() {
  const [username, setUsername] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const userData = userDoc.data();
          if (userData) {
            setUsername(userData.username);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        navigate("/sign-in");
      }
    });

    return () => unsubscribe();
  }, [navigate]);




  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          {/* Header */}
          <header className="top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
            <div className="flex h-16 items-center gap-4 px-6">
              <SidebarTrigger className="-ml-1 cursor-pointer" />
                  <div>
                    <h3 className="text-2xl font-bold ">
                      Welcome, {username}👋
                    </h3>
                    <p className="text-gray-600 mt-1">Ready to crush your goals today?</p>
                  </div>
            </div>
          </header>

          <main className="p-6 space-y-8">
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="relative overflow-hidden bg-blue-400 text-white border-0 shadow-xl shadow-blue-500/20">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=300')] opacity-10 bg-cover bg-center"></div>
                <CardContent className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Activity className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      +12% vs yesterday
                    </Badge>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm font-medium mb-1">Steps Today</p>
                    <p className="text-3xl font-bold mb-2">8,547</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-100">Goal: 10,000</span>
                      <span className="font-semibold">85%</span>
                    </div>
                    <Progress value={85} className="mt-3 bg-blue-500/30 h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gray-400 text-white border-0 shadow-xl shadow-orange-500/20">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=300')] opacity-10 bg-cover bg-center"></div>
                <CardContent className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Fire className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      On fire! 🔥
                    </Badge>
                  </div>
                  <div>
                    <p className="text-orange-100 text-sm font-medium mb-1">Calories Burned</p>
                    <p className="text-3xl font-bold mb-2">1,247</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-100">Goal: 1,500</span>
                      <span className="font-semibold">83%</span>
                    </div>
                    <Progress value={83} className="mt-3 bg-orange-400/30 h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-cyan-800 text-white border-0 shadow-xl shadow-green-500/20">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=300')] opacity-10 bg-cover bg-center"></div>
                <CardContent className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Timer className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      Almost there!
                    </Badge>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm font-medium mb-1">Active Minutes</p>
                    <p className="text-3xl font-bold mb-2">47</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-100">Goal: 60</span>
                      <span className="font-semibold">78%</span>
                    </div>
                    <Progress value={78} className="mt-3 bg-green-400/30 h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gray-700 text-white border-0 shadow-xl shadow-purple-500/20">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=300')] opacity-10 bg-cover bg-center"></div>
                <CardContent className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Streak!
                    </Badge>
                  </div>
                  <div>
                    <p className="text-purple-100 text-sm font-medium mb-1">Current Streak</p>
                    <p className="text-3xl font-bold mb-2">12</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-100">Days</span>
                      <span className="font-semibold">Personal Best!</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
              <div className="lg:col-span-2 space-y-8">
        
                <Card className="border-0 shadow-xl bg-gradient-to-r from-indigo-50 to-purple-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                          <Target className="h-5 w-5 mr-2 text-blue-400" />
                          Today's Focus
                        </CardTitle>
                        <CardDescription className="text-gray-600 mt-1">
                          Your personalized workout recommendation
                        </CardDescription>
                      </div>
                      <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">Recommended</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-700 to-blue-400 p-6 text-white">
                      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=600')] opacity-20 bg-cover bg-center"></div>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-white/20 text-white border-0">
                            <Star className="h-3 w-3 mr-1" />
                            Perfect Match
                          </Badge>
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>45 min</span>
                            <Fire className="h-4 w-4 ml-2" />
                            <span>400 cal</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Upper Body Power</h3>
                        <p className="text-indigo-100 mb-6">
                          Build strength and definition with this targeted upper body workout designed for your fitness
                          level.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Award className="h-4 w-4" />
                              <span className="text-sm">Intermediate</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span className="text-sm">2.1k completed</span>
                            </div>
                          </div>
                          <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold">
                            <Play className="h-4 w-4 mr-2" />
                            Start Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

               
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-gray-900">Quick Workouts</CardTitle>
                      <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700">
                        View All
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          name: "Morning Energizer",
                          duration: "15 min",
                          type: "Cardio",
                          image: "/placeholder.svg?height=120&width=200",
                          color: "blue-400",
                        },
                        {
                          name: "Core Crusher",
                          duration: "20 min",
                          type: "Strength",
                          image: "/placeholder.svg?height=120&width=200",
                          color: "gray-400",
                        },
                        {
                          name: "Flexibility Flow",
                          duration: "25 min",
                          type: "Yoga",
                          image: "/placeholder.svg?height=120&width=200",
                          color: "gray-700",
                        },
                        {
                          name: "HIIT Blast",
                          duration: "30 min",
                          type: "HIIT",
                          image: "/placeholder.svg?height=120&width=200",
                          color: "black/80",
                        },
                      ].map((workout, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-xl bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                          <div className={`absolute inset-0 bg-${workout.color} opacity-90`}></div>
                          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=120&width=200')] bg-cover bg-center opacity-30"></div>
                          <div className="relative p-4 text-white">
                            <div className="flex items-center justify-between mb-2">
                              <Badge className="bg-white/20 text-white border-0 text-xs">{workout.type}</Badge>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Play className="h-5 w-5" />
                              </div>
                            </div>
                            <h4 className="font-semibold mb-1">{workout.name}</h4>
                            <p className="text-sm opacity-90">{workout.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Nutrition Insights */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                      <Apple className="h-5 w-5 mr-2 text-blue-400" />
                      Nutrition Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-3">
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-gray-200"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 36}`}
                              strokeDashoffset={`${2 * Math.PI * 36 * (1 - 0.75)}`}
                              className="text-blue-500"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-900">75%</span>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-900">Calories</p>
                        <p className="text-xs text-gray-500">1,847 / 2,200</p>
                      </div>
                      <div className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-3">
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-gray-200"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 36}`}
                              strokeDashoffset={`${2 * Math.PI * 36 * (1 - 0.85)}`}
                              className="text-green-500"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-900">85%</span>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-900">Protein</p>
                        <p className="text-xs text-gray-500">127g / 150g</p>
                      </div>
                      <div className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-3">
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-gray-200"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${2 * Math.PI * 36}`}
                              strokeDashoffset={`${2 * Math.PI * 36 * (1 - 0.6)}`}
                              className="text-orange-500"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-900">60%</span>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-900">Carbs</p>
                        <p className="text-xs text-gray-500">89g / 150g</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-4">
                      <h4 className="font-semibold text-blue-600 mb-2">Meal Suggestion</h4>
                      <p className="text-blue-600 text-sm mb-3">
                        Try a grilled salmon bowl with quinoa and roasted vegetables for your next meal. Perfect balance
                        of protein and nutrients!
                      </p>
                      <Button size="sm" className="bg-blue-500 cursor-pointer hover:bg-blue-300 text-white">
                        View Recipe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              
              <div className="space-y-6">
                {/* Weekly Progress */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                      Weekly Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">87%</p>
                      <p className="text-sm text-gray-500">Goal Completion</p>
                    </div>
                    <div className="space-y-3">
                      {[
                        { day: "Mon", progress: 100, color: "bg-green-500" },
                        { day: "Tue", progress: 85, color: "bg-blue-500" },
                        { day: "Wed", progress: 90, color: "bg-green-500" },
                        { day: "Thu", progress: 75, color: "bg-yellow-500" },
                        { day: "Fri", progress: 95, color: "bg-green-500" },
                        { day: "Sat", progress: 60, color: "bg-orange-500" },
                        { day: "Sun", progress: 0, color: "bg-gray-300" },
                      ].map((day, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <span className="text-sm font-medium w-8">{day.day}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${day.color} transition-all duration-300`}
                              style={{ width: `${day.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-10">{day.progress}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Community Highlights */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-blue-400" />
                      Community
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Sarah M.", achievement: "Completed 5K run", time: "2h ago", avatar: "SM" },
                      { name: "Mike R.", achievement: "New deadlift PR!", time: "4h ago", avatar: "MR" },
                      { name: "Emma L.", achievement: "30-day streak", time: "6h ago", avatar: "EL" },
                    ].map((post, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          {post.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">
                            <span className="font-semibold">{post.name}</span> {post.achievement}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{post.time}</p>
                        </div>
                        <Button size="sm" variant="ghost" className="text-blue-500 hover:text-blue-600">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Activity
                    </Button>
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                      <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                      Recent Achievement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-1">Consistency Champion</h4>
                      <p className="text-sm text-gray-600 mb-4">12 days workout streak! Keep it up!</p>
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        <Sparkles className="h-3 w-3 mr-1" />
                        New Badge Earned
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
