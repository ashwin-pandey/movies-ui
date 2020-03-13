export class Movie {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public image: string,
        public movieurl: string,
        public tags: string
    ) {}
}