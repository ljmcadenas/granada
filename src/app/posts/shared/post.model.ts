export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
