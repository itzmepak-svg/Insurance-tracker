import { Header } from "@/components/Header";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { HeroBanner } from "@/components/HeroBanner";
import { QuickStats } from "@/components/QuickStats";
import { AppointmentBar } from "@/components/AppointmentBar";
import { AboutSection } from "@/components/AboutSection";
import { Specialties } from "@/components/Specialties";
import { DoctorsSection } from "@/components/DoctorsSection";
import { Facilities } from "@/components/Facilities";
import { LocationContact } from "@/components/LocationContact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <Header />
      <main>
        <HeroBanner />
        <QuickStats />
        <AppointmentBar />
        <AboutSection />
        <Specialties />
        <DoctorsSection />
        <Facilities />
        <LocationContact />
      </main>
      <Footer />
    </>
  );
}
