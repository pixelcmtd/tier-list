import { type Tier } from "../global";

export default function Row({ tier }: { tier: Tier }) {
    return <>
        <div className="row-title" style={{ backgroundColor: "#" + tier[1] }}>{tier[0]}</div>
        <div className="row">{tier[2].map(x => <img src={x} />)}</div>
    </>;
}
