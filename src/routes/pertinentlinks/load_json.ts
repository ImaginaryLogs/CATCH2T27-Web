import type { PertinentLink, PertinentModule } from "./interfaces.js";


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

export const getPertinentModules = async():Promise<PertinentModule[]|null> => {
    const data:Promise<PertinentModule[]> = await fetch('links/sample.json').then(
        (value) => {
            return value.json();
        }
    ).catch((e) => {
        console.log(e);
        return null;
    });

    return data;

}
