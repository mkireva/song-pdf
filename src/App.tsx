import songbook from "./assets/ПесниотУчителя2024.pdf";
import image from "./assets/cover.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <h2 className="text-3xl text-center font-semibold  text-sky-700 mt-20">
        Петър Дънов
      </h2>
      <h1 className="text-6xl text-center font-bold  text-sky-700 mt-6">
        Песни от Учителя
      </h1>
      <h1 className="text-xl p-3 italic text-center text-sky-700 mt-6">
        Четвърто преработено и допълнено издание
      </h1>
      <h1 className="text-xl text-center font-semibold text-sky-700 mt-6">
        2024
      </h1>
      <div className="max-w-5xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto my-10 pl-9 pr-9 pt-7 pb-8 bg-amber-100 rounded-lg shadow-md">
        <div className="my-6">
          <img src={image} alt="" className="w-auto shadow-xl rounded-xl" />
        </div>
        <div className=" my-4 max-w-4xl mx-auto p-2">
          <p className="text-3xl text-center text-sky-700">
            Интерактивният пдф-документ предлага:
          </p>
          <ul className="mt-3 pl-5 pr-5 list-disc">
            <li className="mt-1 ml-10 text-xl font-semibold text-sky-700">
              Азбучно съдържание за мобилни устройства с навигация към всяка
              песен
            </li>
            <li className="ml-10 text-xl font-semibold  text-sky-700">
              Навигация от съдържанието на документа
            </li>
            <li className="ml-10 text-xl font-semibold  text-sky-700">
              Навигация от заглавието на всяка песен до съответната обяснителна
              бележка
            </li>
            <li className="ml-10 text-xl font-semibold  text-sky-700">
              Обратна навигация от обяснителната бележка на песента към
              съответната песен
            </li>
            <li className="ml-10 text-xl font-semibold  text-sky-700">
              Азбучен показател с навигация към съответната песен
            </li>
          </ul>

          <div className=" my-10 flex items-center justify-center">
            <button className="bg-buttoncolor w-3/4 py-2 rounded-md items-center justify-center shadow-xl">
              <a
                href={songbook}
                download="Песни от Учителя 2024"
                className="text-white text-2xl font-semibold"
              >
                Download
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
