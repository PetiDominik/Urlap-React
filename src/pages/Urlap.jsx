import FoUrlap from "../components/FoUrlap";

export default function Urlap() {
    function adatKap(data) {
        console.log(data);
    }

    return (
        <div className="App">
            <FoUrlap adatKap={adatKap}/>
        </div>
    )
}