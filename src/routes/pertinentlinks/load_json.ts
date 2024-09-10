import type { PertinentLink } from "./interfaces.js";


//Fetches the JSON data from sample.json
export const getPertinentLinks = async():Promise<PertinentLink[]|null> => {
    const data:Promise<PertinentLink[]> = await fetch('links/sample.json').then(
        (value) => {
            return value.json();
        }
    ).catch((e) => {
        console.log(e);
        return null;
    });

    return data;

}
