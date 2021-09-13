import { useEffect, useState } from "react";

export function Media() {

    let small = useMedia("(max-width: 400px)");
    let large = useMedia("(min-width: 800px)");

    return (
        <div>
            <h1>Media</h1>
            <p>
                Small? {small ? "Yep" : "Nope"}
            </p>
            <p>
                Large? {large ? "Yep" : "Nope"}
            </p>
        </div>
    );

}

function useMedia(query: string) {
    let [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        let media = window.matchMedia(query);
        if(media.matches !== matches) {
            setMatches(media.matches);
        }
        let listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => {
            media.removeEventListener("change", listener);
        }
    }, [query]); // What matters

    return matches;
}
