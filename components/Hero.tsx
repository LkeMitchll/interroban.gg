import type { Document } from "@contentful/rich-text-types";
import { RichText, Title } from "components";
import ResponsiveImage from "components/ResponsiveImage";
import { Footnote, Grid, GridChild, Small } from "designSystem";
import { ImageSizes } from "helpers/image";
import type { ReactElement } from "react";
import type { Asset } from "services/contentful.types";

export default function Hero({
  image,
  title,
  intro,
  stats,
  linkOverride,
  layoutOverride,
}: {
  title: string;
  image?: Asset;
  intro?: Document;
  stats?: ReactElement;
  linkOverride?: Record<"url" | "text", string>;
  layoutOverride?: "center" | "secondHalf";
}): ReactElement {
  return (
    <Grid
      as="header"
      marginBottom={{ initial: image ? "$1" : "$3", bp2: "$3" }}
    >
      <GridChild as="nav" column={{ initial: "fullWidth", bp2: "$1" }}>
        <Title
          title={title}
          link={linkOverride ? linkOverride : { url: "/", text: "Back" }}
        />
      </GridChild>
      {intro ? (
        <GridChild
          as="section"
          column={
            layoutOverride
              ? { initial: "fullWidth", bp2: layoutOverride }
              : {
                  initial: "fullWidth",
                  bp2: image || !stats ? "threeQuarters" : "secondHalf",
                  bp3: image || !stats ? "center" : "secondHalf",
                }
          }
        >
          <RichText source={intro} unwrapped />
        </GridChild>
      ) : null}
      {stats && (
        <GridChild
          as="section"
          column={{
            initial: "firstHalf",
            bp2: image || layoutOverride ? "$2" : "secondHalf",
            bp3: image || layoutOverride ? "$2" : "$3",
          }}
        >
          {stats}
        </GridChild>
      )}
      {image ? (
        <>
          <GridChild
            column={{ initial: "fullWidth", bp2: "threeQuarters" }}
            row={{ initial: "$2", bp2: "spanTwo" }}
          >
            <ResponsiveImage image={image} sizes={ImageSizes.SixtyPercent} />
          </GridChild>

          <GridChild
            column={{ initial: "fullWidth", bp2: "$1" }}
            row={{ initial: "$3", bp2: "$2" }}
            position="bottom"
          >
            <Footnote as="aside" position="hero">
              <Small as="figcaption">Image: {image.desc}</Small>
            </Footnote>
          </GridChild>
        </>
      ) : null}
    </Grid>
  );
}
