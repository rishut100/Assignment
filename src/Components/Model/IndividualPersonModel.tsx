export interface Data {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface Support {
    url: string;
    text: string;    
}

export interface RootObject {
    data: Data;
    support: Support;
}