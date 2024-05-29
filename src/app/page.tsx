import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/footer";

async function getData() {
  const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
  return response.json();
}

export default async function CatPage() {
  let linkImage = "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev";
  const pokemons = await getData();
  console.log(pokemons);

  return (
    <div className="h-screen w-screen">
      <h1 className="font- w-screen bg-slate-300 p-5 text-center text-3xl font-bold text-slate-700">
        MY POKEMON LIST
      </h1>
      <section className="flex flex-row flex-wrap justify-center gap-4 bg-slate-100 p-10">
        {pokemons.map((item: any) => (
          <div
            className="h-72 w-64 rounded-xl bg-white p-5 shadow-xl hover:bg-blue-100 hover:shadow-none"
            key={item.id}
          >
            <Link href={`/${item.id}`}>
              <Image
                src={`${linkImage}/${item.id}.webp`}
                alt={item.name}
                width={700}
                height={200}
                className="h-50 mb-1 object-cover"
              />
              <h2 className="text-center text-xl font-bold text-slate-700">
                {item.name}
              </h2>
            </Link>
          </div>
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
}
