import Image from "next/image";
import Footer from "@/components/ui/footer";

async function getData(id: string) {
  const response = await fetch(`https://pokeapi.deno.dev/pokemon/${id}`);
  return response.json();
}

export default async function DetailCat({
  params,
}: {
  params: { id: string };
}) {
  let linkImage = "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev";
  const pokemon = await getData(params.id);

  return (
    <div>
      <div className="flex h-screen w-full flex-col content-center items-center justify-center bg-slate-100 align-middle">
        <div className="flex h-fit flex-row gap-x-5 rounded-3xl bg-white p-5 shadow-xl">
          <Image
            src={`${linkImage}/${pokemon.id}.webp`}
            alt={pokemon.name}
            width={200}
            height={200}
            className=""
          />
          <div className="flex flex-col justify-center">
            <h1 className="mb-3 text-3xl font-bold text-slate-800">
              {pokemon.name}
            </h1>
            <p className="w-80 text-lg text-slate-600">{pokemon.description}</p>
          </div>
        </div>
        <a href="/">
          <button className="mt-9 rounded-3xl px-5 py-3 font-medium text-slate-600 hover:bg-blue-200">
            Kembali ke List
          </button>
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}
