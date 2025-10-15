import { LinkButton } from "./components/LinkButton";
import { Symbol } from "./components/Symbol";

export const App = () => (
  <div className="font-sans bg-gray-100 flex flex-col items-center justify-center min-h-screen p-8 h-full">
    <main className="bg-white aspect-[1/1.65] max-w-[379px] max-h-[627px] w-full h-full rounded-3xl relative overflow-hidden shadow-xl p-2">
      <Symbol className="absolute top-0 right-0" />
      <div className="flex flex-col items-start justify-center h-full p-4 mt-8">
        <div className="mb-8 max-sm:mb-6">
          <h2 className="font-bold text-sm/5">
            フリーランス
            <br />
            フロントエンドエンジニア
          </h2>
          <h1 className="font-bold text-3xl">TinyKitten</h1>
          <h2 className="font-bold text-sm/4">Tsubasa SEKIGUCHI</h2>
          <p className="text-sm/4">
            aka <span className="font-bold">Kittan</span>
          </p>
        </div>

        <ul className="list-none space-y-5 max-sm:space-y-4 w-full">
          <li>
            <LinkButton color="#008ffe" label="ポートフォリオ" href="https://tinykitten.me" />
          </li>
          <li>
            <LinkButton color="#277bc0" label="TrainLCD" href="https://trainlcd.app" />
          </li>
          <li>
            <LinkButton color="#171515" label="GitHub" href="https://github.com/tinykitten" />
          </li>
        </ul>
      </div>
    </main>
    <footer className="mt-6 flex-wrap items-center justify-center">
      <p className="text-center text-gray-600 leading-5">
        The combination of <span className="font-semibold">Alpha</span>
        <br />A piece of something else.
      </p>
    </footer>
  </div>
);
