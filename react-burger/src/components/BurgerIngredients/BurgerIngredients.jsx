import React from "react";
import Chapter from "../Chapter/Chapter";
import style from "./BurgerIngredients.module.css";
import ChapterPanel from "../ChapterPanel/ChapterPanel";

export default function BurgerIngredients (props) {
  const chapters = [
    {title: "Булки", type: "bun"},
    {title: "Соусы", type: "sauce"},
    {title: "Начинки", type: "main"}
  ];

  return (
    <div className={style.BurgerIngredients} >
      <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
      <ChapterPanel chapters={chapters} />
      <div className={style.IngredientsContainer}>
        {
          chapters.map( (chapter) => 
          <Chapter 
            {...props}
            key={"chapter-" + chapter.type} 
            title={chapter.title} 
            type={chapter.type} 
            name={chapter.title}>
          </Chapter>
          )
        }
      </div>
    </div>
  );
};