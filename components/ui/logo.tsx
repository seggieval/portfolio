import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-4xl font-bold">
        Sierykov<span className="text-accent">.</span>
      </h1>
    </Link>
  )
}

export default Logo