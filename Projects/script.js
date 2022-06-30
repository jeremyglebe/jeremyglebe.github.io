// Object representing all data associated with the projects page
let projectsData = {
    // The active (selected) tag to filter by
    activeFilters: new Set(),

    // Method which produces a list of all tags in all projects
    allTags() {
        let all = new Set();
        for (let project of this.projectList) {
            for (let tag of project.tags) {
                all.add(tag);
            }
        }
        return [...all].sort();
    },

    // Method which checks if a single tag is active
    tagIsSelected(tag) {
        return this.activeFilters.has(tag);
    },

    // Method which determines if a list of tags meets the requirements of a filtering list
    tagListMatchesFilters(tags) {
        for (let filter of this.activeFilters)
            if (!tags.includes(filter)) return false;
        return true;
    },

    // Method which checks if there are any active tag filters
    noFiltersSelected() {
        return this.activeFilters.size === 0;
    },

    // Method which checks if there are no valid projects based on current filters
    noMatchingProjects() {
        for (let proj of this.projectList) {
            if (this.tagListMatchesFilters(proj.tags)) {
                return false;
            }
        }
        return true;
    },

    // Method to handle clicking on tag filters
    onClickTag(tag) {
        // If tag is null or otherwise invalid, reset filters (this is done intentionally with "Show All" button)
        if (!tag) {
            this.activeFilters.clear()
        }
        // If the tag is already in the filter list, remove it
        else if (this.activeFilters.has(tag)) {
            this.activeFilters.delete(tag);
        }
        // If the tag is not in the filter list, add it
        else {
            this.activeFilters.add(tag);
        }
    },

    createThumbImageStyleURL(title) {
        return 'background-image: url("thumbs/' + title + '.png");';
    },

    // A list of data entries for each project which may be displayed
    projectList: [
        {
            title: "Galactic Snake",
            desc: "Galactic Snake is a mobile friendly game about a giant robotic snake eating planets. "
                + "It was originally developed as part of the Midwestern State University ACM Chapter's Spring 2021 Game Jam. "
                + "It features authentication and a synchronized scoreboard in addition to its gameplay.",
            tags: ["Phaser", "Games", "Mobile", "Javascript", "Typescript", "Capacitor"],
            srcLink: "https://github.com/jeremyglebe/galactic_snake",
            pubLink: "https://drowsyprof.itch.io/galactic-snake"
        },
        {
            title: "Spire Panic",
            desc: "A downloadable tower-defense-like game for Windows featuring cute hats, lasers, and more. "
                + "I wrote this for a game development class at UNT. "
                + "We used a barebones engine, made by the professor, which served as a minimal wrapper for DirectX. "
                + "This may not be my best, but it was probably the hardest game project I have ever worked on and I love it.",
            tags: ["C++", "DirectX", "Games"],
            srcLink: "https://github.com/jeremyglebe/Spire_Panic",
            pubLink: "https://drowsyprof.itch.io/spire-panic"
        },
        {
            title: "3",
            desc: "A downloadable tower-defense-like game for Windows featuring cute hats, lasers, and more. "
                + "I wrote this for a game development class at UNT. "
                + "We used a barebones engine, made by the professor, which served as a minimal wrapper for DirectX. "
                + "This may not be my best, but it was probably the hardest game project I have ever worked on and I love it.",
            tags: ["C++", "DirectX", "Games"],
            srcLink: "https://github.com/jeremyglebe/Spire_Panic",
            pubLink: "https://drowsyprof.itch.io/spire-panic"
        },
        {
            title: "4",
            desc: "A downloadable tower-defense-like game for Windows featuring cute hats, lasers, and more. "
                + "I wrote this for a game development class at UNT. "
                + "We used a barebones engine, made by the professor, which served as a minimal wrapper for DirectX. "
                + "This may not be my best, but it was probably the hardest game project I have ever worked on and I love it.",
            tags: ["C++", "DirectX", "Games"],
            srcLink: "https://github.com/jeremyglebe/Spire_Panic",
            pubLink: "https://drowsyprof.itch.io/spire-panic"
        },
        {
            title: "5",
            desc: "A downloadable tower-defense-like game for Windows featuring cute hats, lasers, and more. "
                + "I wrote this for a game development class at UNT. "
                + "We used a barebones engine, made by the professor, which served as a minimal wrapper for DirectX. "
                + "This may not be my best, but it was probably the hardest game project I have ever worked on and I love it.",
            tags: ["C++", "DirectX", "Games"],
            srcLink: "https://github.com/jeremyglebe/Spire_Panic",
            pubLink: "https://drowsyprof.itch.io/spire-panic"
        },
        {
            title: "6",
            desc: "A downloadable tower-defense-like game for Windows featuring cute hats, lasers, and more. "
                + "I wrote this for a game development class at UNT. "
                + "We used a barebones engine, made by the professor, which served as a minimal wrapper for DirectX. "
                + "This may not be my best, but it was probably the hardest game project I have ever worked on and I love it.",
            tags: ["C++", "DirectX", "Games"],
            srcLink: "https://github.com/jeremyglebe/Spire_Panic",
            pubLink: "https://drowsyprof.itch.io/spire-panic"
        },
        {
            title: "7",
            desc: "A downloadable tower-defense-like game for Windows featuring cute hats, lasers, and more. "
                + "I wrote this for a game development class at UNT. "
                + "We used a barebones engine, made by the professor, which served as a minimal wrapper for DirectX. "
                + "This may not be my best, but it was probably the hardest game project I have ever worked on and I love it.",
            tags: ["C++", "DirectX", "Games"],
            srcLink: "https://github.com/jeremyglebe/Spire_Panic",
            pubLink: "https://drowsyprof.itch.io/spire-panic"
        }
    ]
}

function getProjectsData() { return projectsData }