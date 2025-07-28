import { LinkButton } from "./components/LinkButton";
import { Symbol } from "./components/Symbol";

export default function Home() {
  return (
    <div className="font-sans bg-gray-100 flex flex-col items-center justify-center min-h-screen p-8 h-full">
      <main className="bg-white w-[379px] h-[627px] max-sm:w-[252.666666667px] max-sm:h-[418px] max-w-full max-h-full rounded-2xl relative overflow-hidden shadow-xl p-2">
        <Symbol className="absolute top-0 right-0" />
        <div className="flex flex-col items-start justify-center h-full p-4 mt-8">
          <div className="mb-8">
            <h2 className="font-bold text-sm/5">
              フリーランス
              <br />
              フロントエンドエンジニア
            </h2>
            <h1 className="font-bold text-3xl">TinyKitten</h1>
            <h3 className="font-bold text-sm/4">Tsubasa SEKIGUCHI</h3>
            <p className="text-sm/4">
              aka <span className="font-bold">Kittan</span>
            </p>
          </div>

          <ul className="list-none space-y-5 w-full">
            <li>
              <LinkButton
                color="#008ffe"
                label="ポートフォリオ"
                href="https://tinykitten.me"
              />
            </li>

            <li>
              <LinkButton
                color="#277bc0"
                label="TrainLCD"
                href="https://trainlcd.app"
              />
            </li>

            <li>
              <LinkButton
                color="#171515"
                label="GitHub"
                href="https://github.com/tinykitten"
              />
            </li>
          </ul>
        </div>
      </main>
      <footer className="mt-6 flex-wrap items-center justify-center">
        <p className="text-center text-gray-500 leading-5">
          The combination of <span className="font-semibold">Alpha</span>
          <br />A piece of something else.
        </p>
      </footer>
    </div>
  );
}
