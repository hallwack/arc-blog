import React from "react";

interface CardProps {
  title: string;
  slugTitle?: string;
  author: string;
  slugAuthor?: string;
  category: string;
  slugCategory?: string;
  excerpt: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="rounded-xl bg-transparent border-dark-primary border-opacity-60 border-2 p-6">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-dark-primary font-inter text-3xl font-semibold">
            {props.title}
          </h1>
          <p className="text-dark-primary font-inter font-medium">
            by <a href={props.slugAuthor}>{props.author}</a>
          </p>
        </div>
        <p className="text-dark-primary font-inter mt-4 mb-1">
          {props.excerpt}...
        </p>
        <a
          href={props.slugTitle}
          className="underline hover:no-underline text-dark-primary font-inter"
        >
          Read More...
        </a>
        <p className="text-dark-primary font-inter text-lg font-medium mt-4">
          Category: <a href={props.slugCategory}>{props.category}</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
