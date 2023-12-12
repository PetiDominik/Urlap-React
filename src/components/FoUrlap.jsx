import "./FoUrlap.css";
import {URLAP_LEIRO} from "../model/adatLeiro";


const adat = {};
export default function FoUrlap(props) {
    
    function adatKuld(event) {
        event.preventDefault();
        props.adatKap(adat);
    }

    function adatvaltoztatas(event) {
        let input = event.target;
        /* console.log(input.id, input.value);
        console.log(adat); */
        adat[input.id] = input.value;
    }

    return (
        <form className="FoUrlap" onSubmit={adatKuld}>
            {
                Object.keys(URLAP_LEIRO).map((key, index) => {
                    let value = URLAP_LEIRO[key];
                    return(
                        <div className="form-group" key={index} >
                            <label htmlFor={key}>{value.extra.label}</label>

                            <input type={value.type} className="form-control" id={key} placeholder={value.extra.label} onChange={adatvaltoztatas}/>
                        </div>
                    )
                })
            }
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}