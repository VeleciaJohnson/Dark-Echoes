import { useState } from "react";
import { episodeList } from "./data";

function EpisodeList({ episodes, selectedEpisode, onSelectEpisode }) {
  return (
    <section className="episode-list-section">
      <h2>Episodes</h2>

      <ul className="episode-list">
        {episodes.map((episode) => (
          <li key={episode.id}>
            <button
              type="button"
              className={
                selectedEpisode?.id === episode.id
                  ? "episode-button selected"
                  : "episode-button"
              }
              onClick={() => onSelectEpisode(episode)}
            >
              <span>Episode {episode.id}</span>
              {episode.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EpisodeDetails({ episode }) {
  if (!episode) {
    return (
      <section className="episode-details empty-state">
        <h2>Select an episode</h2>
        <p>Choose an episode from the list to reveal its details.</p>
      </section>
    );
  }

  return (
    <section className="episode-details">
      <p className="episode-number">Episode {episode.id}</p>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
    </section>
  );
}

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">A Mystery Podcast</p>
        <h1>Dark Echoes</h1>
        <p>Follow the clues. Uncover the truth.</p>
      </header>

      <div className="content">
        <EpisodeList
          episodes={episodes}
          selectedEpisode={selectedEpisode}
          onSelectEpisode={setSelectedEpisode}
        />

        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </main>
  );
}
