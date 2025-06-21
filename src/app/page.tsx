import MadeiraHomeLogo from "@/components/MadeiraHomeLogo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center relative">
      <Image
        src="/calheta-beach.jpg"
        alt="Calheta beach"
        width={600}
        height={500}
        style={{ width: "100%", height: "500px" }}
      />
      <div className="flex flex-col items-center gap-4 absolute top-1/3">
        <h2 className="text-5xl text-white font-bold">Bem-vindo ao Paraiso</h2>
        <Link
          className="bg-[#319275] rounded py-2 px-6 text-white font-bold hover:bg-green-700 "
          href="/mainHouse"
        >
          Nossos alojamentos
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <MadeiraHomeLogo />
        <p className="max-w-[80%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          velit eos dolorum blanditiis. Numquam, incidunt autem exercitationem,
          laboriosam rerum est architecto dolorem molestias laudantium adipisci
          aliquid, natus atque possimus veritatis.
        </p>
      </div>
    </div>
  );
}
