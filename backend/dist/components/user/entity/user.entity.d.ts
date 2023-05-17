export declare class User {
    id: number;
    email: string;
    password: string;
    createdAt: any;
    updatedAt: any;
    hashPassword(): Promise<void>;
}
