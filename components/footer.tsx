import Link from "next/link"
import { Github, Mail, Linkedin, Twitter,Copyright} from "lucide-react"

export default function Footer() {
  return (
    <footer className="p-10">
      <div className="flex justify-center mt-4 space-x-4 lg:mt-2">
        <Link href={"https://twitter.com/psv2522"}>
          <Twitter className="text-sky-300" />
        </Link>
        <Link href={"https://github.com/psv2522"}>
          <Github/>
        </Link>
        <Link href={"mailto:psv2522@gmail.com"}>
          <Mail className="text-primary"/>
        </Link>
        <Link href={"https://www.linkedin.com/in/psv2522"}>
          <Linkedin className="text-blue-400" />
        </Link>
      </div>
      <span className="flex justify-center mt-5 gap-2 text-center">
        <Copyright /> 2024 Copyright reserved
      </span>
    </footer>
  )
}