import { useEffect, useState } from "react";
import css from "./CardTable.module.css";

let activatedCards = [], canChoose = true;

const CardTable = (props) => {
  let [shouldCompare, setShouldCompare] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const cardElements = document.querySelectorAll("." + css["cart-table__item"]);
      cardElements.forEach(card => card.classList.add("hidden"))
    }, 5000)
  }, [])

  const choseCards = (event) => {
    if (activatedCards.length < 2 && event.target.classList.contains("hidden") && canChoose) {
      event.target.classList.remove("hidden");
      event.target.style.border = "1px solid #ED5517";
      event.target.style.boxShadow = "2px 4px 8px #CDCDCD";
      // event.target.classList.add("choosen");
      activatedCards.push(event.target.getAttribute("cardindex"));

      if (activatedCards.length === 2) {
        canChoose = false;
        setShouldCompare(true);
      }
    }
  }

  useEffect(() => {
    if (activatedCards.length === 2) {
      const activatedElements = [
        document.querySelector("." + css["cart-table__item"] + "[cardindex='" + activatedCards[0] + "']"),
        document.querySelector("." + css["cart-table__item"] + "[cardindex='" + activatedCards[1] + "']"),
      ]

      if (props.finalCardsArray[activatedCards[0]] === props.finalCardsArray[activatedCards[1]]) {
        canChoose = true;
        activatedCards = [];

        activatedElements[0].style.border = "1px solid #0A0A0C";
        activatedElements[1].style.border = "1px solid #0A0A0C";
        activatedElements[0].style.boxShadow = "none";
        activatedElements[1].style.boxShadow = "none";
      }
      else {
        setTimeout(() => {
          activatedElements[0].classList.add("hidden");
          activatedElements[1].classList.add("hidden");
          activatedElements[0].style.border = null;
          activatedElements[1].style.border = null;
          activatedElements[0].style.boxShadow = null;
          activatedElements[1].style.boxShadow = null;

          canChoose = true;
          activatedCards = [];
        }, 1000);
      }

      setShouldCompare(false);
    }
  }, [shouldCompare])

  return (
    <div className={css["cart-table"]}>
      {
        props.finalCardsArray.map((number, index) => (
          <div className={css["cart-table__item"]} onClick={choseCards} cardindex={index} key={index}>{number}</div>
        ))
      }
    </div>
  )
}

export default CardTable;