import type { Document } from "@contentful/rich-text-types";
import { RichText, Title } from "components";
import ResponsiveImage from "components/ResponsiveImage";
import { Footnote, Small } from "designSystem";
import { ImageSizes } from "helpers/image";
import type { ReactElement } from "react";
import type { Asset } from "services/contentful.types";
import { css, styled } from "stitches";

const Container = styled("div", {
  display: "grid",
  position: "relative",

  variants: {
    layout: {
      vertical: {
        gridTemplate: `"a a a ." auto
                       "b b b b" auto
                       "f f f ." auto / 1fr 1fr 1fr 1fr`,
        marginBottom: "$2",
      },
      horizontal: {
        gridTemplate: `"a b b i" auto
                       "f b b i"/ 1fr 1fr 1fr 1fr`,
        marginBottom: "$2",
        gridGap: "$2",
      },
      withStatsVertical: {
        gridTemplate: `"a a a ." auto
                      "b b b b" auto
                      "c c . ." auto / 1fr 1fr 1fr 1fr`,
        marginBottom: "$3",
        gridColumnGap: "$2",
      },
      withStatsHorizontal: {
        gridTemplate: `"a . b b" auto
                       "f f c ."/ 1fr 1fr 1fr 1fr`,
        marginBottom: "$3",
        gridGap: "$2",
      },
    },
  },
});

const StatsContainer = styled("div", {
  gridArea: "c",
});

export default function Hero({
  image,
  title,
  intro,
  stats,
}: {
  image?: Asset;
  title: string;
  intro?: Document;
  stats?: ReactElement;
}): ReactElement {
  const introWrapper = css({
    gridColumn: "b",
    gridRow: image ? "4" : "b",
    paddingRight: "$2",

    bp2: {
      gridRow: image ? "3" : "b",
    },
  });

  return (
    <Container
      layout={
        stats
          ? { initial: "withStatsVertical", bp2: "withStatsHorizontal" }
          : { initial: "vertical", bp2: "horizontal" }
      }
    >
      <Title
        title={title}
        link={{ url: "/", text: "Back" }}
        css={{ gridArea: "a" }}
      />
      {intro ? (
        <div className={introWrapper}>
          <RichText source={intro} unwrapped />
        </div>
      ) : null}
      {stats && <StatsContainer>{stats}</StatsContainer>}
      {image ? (
        <>
          <ResponsiveImage
            image={image}
            sizes={ImageSizes.SixtyPercent}
            styles={{
              gridArea: "b",
              bp2: { gridArea: "b-start / b-start / i-end / i-end" },
            }}
          />

          <Footnote position="hero" css={{ gridArea: "f" }}>
            <Small as="figcaption">Image: {image.desc}</Small>
          </Footnote>
        </>
      ) : null}
    </Container>
  );
}
