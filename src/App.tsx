import React from "react";

function App() {
  return (
    <div className="App bg-blue-light">
      <header className="bg-dark-primary w-full py-8 px-24">
        <div className="flex flex-row justify-between container-page items-center">
          <a
            href="./index.html"
            className="font-inter uppercase font-bold text-4xl text-light-primary"
          >
            ARC Blog
          </a>
          <nav>
            <ul className="flex flex-row space-x-10 items-center">
              <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light-primary">
                <a href="./index.html">Home</a>
              </li>
              <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light-primary">
                <a href="./men_clothes.html">Articles</a>
              </li>
              <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light-primary">
                <a href="./women_clothes.html">Categories</a>
              </li>
              <li className="font-inter text-lg font-semibold uppercase hover:text-light-grey transition duration-500 text-light-primary">
                <a href="./about.html">About</a>
              </li>
              <li className="font-inter text-lg text-light-primary underline hover:no-underline">
                <a href="./login.html">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bg-transparent w-full container mx-auto py-12">
        <div className="flex flex-col">
          <div className="grid grid-flow-row grid-cols-3 gap-24">
            <div className="rounded-xl bg-transparent border-dark-primary border-opacity-60 border-2 p-6">
              <div className="flex flex-col">
                <h1 className="text-dark-primary font-inter text-3xl font-semibold">
                  Lorem, ipsum.
                </h1>
                <p className="text-dark-primary font-inter mt-4 mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, similique...
                </p>
                <a
                  href="#"
                  className="underline hover:no-underline text-dark-primary font-inter"
                >
                  Read More...
                </a>
                <p className="text-dark-primary font-inter text-lg font-medium mt-4">
                  Category: <a href="/">Programming</a>, <a href="/">Blog</a>
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-transparent border-dark-primary border-opacity-60 border-2 p-6">
              <div className="flex flex-col">
                <h1 className="text-dark-primary font-inter text-3xl font-semibold">
                  Lorem, ipsum.
                </h1>
                <p className="text-dark-primary font-inter mt-4 mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, similique...
                </p>
                <a
                  href="#"
                  className="underline hover:no-underline text-dark-primary font-inter"
                >
                  Read More...
                </a>
                <p className="text-dark-primary font-inter text-lg font-medium mt-4">
                  Category: <a href="/">Programming</a>, <a href="/">Blog</a>
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-transparent border-dark-primary border-opacity-60 border-2 p-6">
              <div className="flex flex-col">
                <h1 className="text-dark-primary font-inter text-3xl font-semibold">
                  Lorem, ipsum.
                </h1>
                <p className="text-dark-primary font-inter mt-4 mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, similique...
                </p>
                <a
                  href="#"
                  className="underline hover:no-underline text-dark-primary font-inter"
                >
                  Read More...
                </a>
                <p className="text-dark-primary font-inter text-lg font-medium mt-4">
                  Category: <a href="/">Programming</a>, <a href="/">Blog</a>
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-transparent border-dark-primary border-opacity-60 border-2 p-6">
              <div className="flex flex-col">
                <h1 className="text-dark-primary font-inter text-3xl font-semibold">
                  Lorem, ipsum.
                </h1>
                <p className="text-dark-primary font-inter mt-4 mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, similique...
                </p>
                <a
                  href="#"
                  className="underline hover:no-underline text-dark-primary font-inter"
                >
                  Read More...
                </a>
                <p className="text-dark-primary font-inter text-lg font-medium mt-4">
                  Category: <a href="/">Programming</a>, <a href="/">Blog</a>
                </p>
              </div>
            </div>
            <div className="rounded-xl bg-transparent border-dark-primary border-opacity-60 border-2 p-6">
              <div className="flex flex-col">
                <h1 className="text-dark-primary font-inter text-3xl font-semibold">
                  Lorem, ipsum.
                </h1>
                <p className="text-dark-primary font-inter mt-4 mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, similique...
                </p>
                <a
                  href="#"
                  className="underline hover:no-underline text-dark-primary font-inter"
                >
                  Read More...
                </a>
                <p className="text-dark-primary font-inter text-lg font-medium mt-4">
                  Category: <a href="/">Programming</a>, <a href="/">Blog</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
