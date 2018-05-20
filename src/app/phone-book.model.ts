export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public company: string,
    public email: string,
    public photo: string,
    public id?: number
  ) {}
}

export interface Contacts {
  Contacts: Contact[];
}
