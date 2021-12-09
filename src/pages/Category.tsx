import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

interface Props {}

const Category: React.FC = (props: Props) => {
  return (
    <div className="bg-blue-light min-h-screen h-full">
      <header className="bg-dark-primary w-full py-8 px-24">
        <Navbar />
      </header>

      <main className="bg-transparent w-full container mx-auto py-12">
        <div className="flex flex-col">
          <div className="text-left mb-6">
            <p className="font-inter text-dark-primary text-4xl font-bold">
              Category: Programming
            </p>
          </div>
          <div className="grid grid-flow-row grid-cols-3 gap-24">
            <Card
              title="Lorem, ipsum."
              author="Raihan Adam"
              slugAuthor="raihan-adam"
              category="Programming"
              excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eveniet, similique"
            />
            <div className="rounded-xl bg-transparent border-dark-primary border-opacity-60 border-2 p-6">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <h1 className="text-dark-primary font-inter text-3xl font-semibold">
                    Lorem, ipsum.
                  </h1>
                  <p className="text-dark-primary font-inter font-medium">
                    by <a href="/">Raihan Adam</a>
                  </p>
                </div>
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
                  Category: <a href="/">Programming</a>
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
                  Category: <a href="/">Programming</a>
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
                  Category: <a href="/">Programming</a>
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
                  Category: <a href="/">Programming</a>
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
                  Category: <a href="/">Programming</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Category;
