import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Main from "@/components/Main";
import PartnerStore from "@/components/PartnerStore";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Main />
      <PartnerStore />
      <About />
      <Services />
      <Products />
      <Contacts />
    </>
  );
}
