import { A, Heading, NumberedList, P, SecondaryText } from "designSystem";
import { ListItem } from "components";
import { ReactElement } from "react";
import { MusicTotals } from "services/last-fm.types";
import { Track } from "services/spotify.types";

export default function Listening({
  totals,
  tracks,
}: {
  totals: MusicTotals;
  tracks: Track[];
}): ReactElement {
  return (
    <div>
      <Heading css={{ marginBottom: "$2" }} small>
        Listening
      </Heading>
      {totals ? (
        <P css={{ marginBottom: "$2" }}>
          Last week I listened to around
          <br />
          <A href="https://open.spotify.com/user/lkemitchll?si=dPG3-TtUSdSL5lLczPEg_A">
            {totals.tracks} songs, on {totals.albums} albums.
          </A>
        </P>
      ) : (
        <P css={{ marginBottom: "$2" }}>
          Loading...
          <br />
          <br />
        </P>
      )}
      <SecondaryText as="h3" css={{ marginBottom: "$2" }}>
        Top Tracks (Past month)
      </SecondaryText>
      {tracks ? (
        <NumberedList>
          {tracks.map((track: Track) => (
            <ListItem
              key={track.id}
              title={track.title}
              subtitle={track.artist}
              url={track.url}
              image={track.cover}
              external
            />
          ))}
        </NumberedList>
      ) : (
        <P>Loading...</P>
      )}
    </div>
  );
}
