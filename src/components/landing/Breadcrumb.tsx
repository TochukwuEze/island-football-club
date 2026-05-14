import Image from "next/image";
import Link from "next/link";

const Breadcrumb = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-primaryColor">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/members/memberImage1.webp"
          alt="Island FC hero"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/30 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>
      <div className="text-center z-40">
        <p className="text-white text-3xl md:text-4xl font-bold">{title}</p>
        <p className="text-white text-sm md:text-base mt-2">
          <Link href="/">Home</Link> <span className="mx-2">/</span> {title}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumb;
