import { useEffect, useState } from "preact/hooks";
import { tiers, toDetermine } from "../global";
import Row from "./Row";

export default function App() {
    let [currentEditor, setCurrentEditor] = useState(-1);
    let [placedRow, setPlacedRow] = useState(-1);
    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            event.preventDefault();
            const num = parseInt(event.key);
            if (event.key === " ") {
                setPlacedRow(placedRow = -1);
                setCurrentEditor(currentEditor = currentEditor + 1);
            } else if (typeof num === "number" && num >= 1 && num <= 6) {
                const row = num - 1;
                if (placedRow >= 0) {
                    tiers[placedRow][2].splice(tiers[placedRow][2].length - 1);
                }
                tiers[row][2].push(toDetermine[currentEditor]);
                setPlacedRow(placedRow = row);
            }
        });
    }, []);
    return <>
        {tiers.map(x => <Row tier={x} />)}
        {placedRow < 0 ? <img src={toDetermine[currentEditor]} className="center" /> : undefined}
        {placedRow < 0 ? <div className="text-editor">{toDetermine[currentEditor]}</div> : undefined}
    </>;
}
