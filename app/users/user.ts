export class Address {
    street: string;
    suite: string;
    city: string;
    zip: string;
}

export class User {
    id: string;
    name: string;
    email: string;
    phone: string;
    address = new Address();
}