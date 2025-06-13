import AcmeLogo from '@/app/ui/acme-logo';
import styles from "@/app/ui/home.module.css"
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts'
import Link from 'next/link';
import Image from "next/image";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape}>
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing Mobile version"
          />
        </div>

      </div>
    </main>
  );
}
