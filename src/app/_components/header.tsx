import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" width={120} height={18} />

        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
