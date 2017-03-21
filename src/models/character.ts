export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string,
        extension: string
    };

    comics: {
        available: number
        items: {
            resourceURI: string
            name: string
        }
    };

    series: {
        available: number
        items: {
            resourceURI: string
            name: string
        }
    };

    stories: {
        available: number
        items: {
            resourceURI: string
            name: string
        }
    };

    events: {
        available: number
        items: {
            resourceURI: string
            name: string
        }
    };
}