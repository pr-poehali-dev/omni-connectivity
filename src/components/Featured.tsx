export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/ba97bdcd-3ad5-4dc9-937e-0aedb327c5c1/files/cb44edb3-4087-4db3-85e5-183840bf1ab7.jpg"
          alt="Уютный интерьер квартиры в ЖК Горький"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Дом, в который хочется возвращаться</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Продуманные планировки, панорамные окна и тёплый свет в каждой квартире. Современный двор без машин,
          подземный паркинг и развитая инфраструктура — всё для комфортной жизни вашей семьи.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Выбрать квартиру
        </button>
      </div>
    </div>
  );
}