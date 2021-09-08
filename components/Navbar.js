import Nav from "./Nav";
import Button from "./Button";
import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <div className="flex items-center">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <Button href="#contacts" pill variant="outline-yellow">Kontak</Button>
      </div>
    </div>
  );
}