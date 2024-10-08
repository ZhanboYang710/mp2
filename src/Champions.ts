
export interface Info {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
}

export interface Image {
    full: string;
    spirit: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface Champion{
    id: string;
    key: number;
    name: string;
    title: string;
    info: Info;
    image: Image;
    tags: string[];
}

