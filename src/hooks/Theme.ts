import { useEffect, useState } from "react"

export const useTheme = () => {

  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark")

  useEffect(() => {
    console.log("Updating theme:", dark)
    if (dark) {
      document.documentElement.classList.add("dark")
      console.log("Added dark class")
    } else {
      document.documentElement.classList.remove("dark")
      console.log("Removed dark class")
    }
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return { dark, setDark }
}