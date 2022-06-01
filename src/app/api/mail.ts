export interface Mail {
    id?: number;
    from?: string;
    email?:string;
    image?: string;
    date?: string;
    message?: string;
    title?: string;
    important?: boolean;
    starred?: boolean;
}
