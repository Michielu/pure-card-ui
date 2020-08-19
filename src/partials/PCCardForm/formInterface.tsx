interface Staples {
    "gas": number,
    "grocery": number,
    "fastFood": number,
    "resturant": number,
    "homeImprovement": number,
    "travel": number
};

interface Specialities {
    "airlines": number,
    "amazon": number,
    "cellPhone": number,
    "deptStores": number,
    "drugStore": number,
    "homeUtilities": number,
    "rideShares": number,
    "wholesale": number

}

export interface FormFields {
    default: number,
    staples: Staples,
    specialties: Specialities
}

export interface submitType {
    values: formFields,
    errors: any
}

export interface formFields {
    cardname: string,
    defaultpercent: string,
    gas: string,
    grocery: string,
    fastfood: string,
    resturant: string,
    homeimprovement: string,
    travel: string,
    amazon: string,
    cellphone: string,
    drugstore: string,
    homeutils: string,
    airlines: string,
    rideshares: string,
    deptstores: string,
    wholesale: string
}

