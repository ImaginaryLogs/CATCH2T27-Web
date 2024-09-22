//Interface for the pertinent link
export interface PertinentLink {
    title: string,
    link: string,
    body: string,
}

export interface PertinentModule {
    title: string,
    link_set: PertinentLink[],
    body: string,
}