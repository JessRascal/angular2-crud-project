export class Post {
    userId: string;
    id: string;
    title: string;
    body: string;
}

export class PostComment {
    postid: string;
    id: string;
    name: string;
    email: string;
    body: string;
}