import Topbar6 from '@/components/headers/Topbar6';
import Career from '@/components/otherPages/Career';
import Header2 from '@/components/headers/Header2';
export const metadata = {
  title: 'Careers - Join Our Team | CURVE & COMFY',
  description: 'Explore career opportunities at CURVE & COMFY. Join our team and be part of creating beautiful spaces.',
};

export default function CareerPage() {
  return (
  <>
  <Topbar6 bgColor="bg-main" />
  <Header2/>
  <Career />
  </>
  );
}
