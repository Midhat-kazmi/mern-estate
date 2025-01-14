import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { Profile } from "./pages/profile"
import { About } from "./pages/about"

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={< Home/>}/>
      <Route path = "about" element={< About/>}/>
      <Route path = "/profile" element={< Profile/>}/>
      <Route path = "/sign-in" element={< Signin/>}/>
      <Route path = "/sign-up" element={< Signup/>}/>

    </Routes>
    </BrowserRouter>
  )
}
