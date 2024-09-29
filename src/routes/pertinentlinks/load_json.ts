import type { PertinentLink, PertinentModule } from "./interfaces.js";

const json_link = "src/lib/assets/json/sample.json";

//Fetches the JSON data from sample.json
export const getPertinentLinks = async():Promise<PertinentLink[]|null> => {
    const data:Promise<PertinentLink[]> = await fetch(json_link).then(
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
    const data:Promise<PertinentModule[]> = await fetch(json_link).then(
        (value) => {
            return value.json();
        }
    ).catch((e) => {
        console.log(e);
        return null;
    });

    return data;

}
