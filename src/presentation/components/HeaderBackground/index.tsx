function HeaderBackground() {
  return (
    <main style={{marginTop: '2rem'}}>
      <div>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-2/8 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="./bg-fighter-sebastian-cavazzoli.jpg"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-[#a99260] mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Uma jornada</span>
                  <span className="block text-[#a99260]">Pura nostalgia</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-300 sm:max-w-3xl">
                  Retorne aos primórdios do Priston Tale, relembre e embarque
                  nesta imensidão nostálgica do bom e eterno priston.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#a99260] bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Comece Já!
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#a99260] bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Apresentação
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export { HeaderBackground }