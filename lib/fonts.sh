#! /bin/bash

pyftsubset\
      Blanco-Regular.woff \
      --output-file="Blanco-Regular.subset.woff2" \
      --flavor=woff2 \
      --layout-features="ccmp,locl,mark,kern,liga,calt,ss01,ss02,smcp"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD,U+0250-02AF" &&

pyftsubset\
      Blanco-Regular.woff \
      --output-file="Blanco-Regular.subset.woff" \
      --flavor=woff \
      --layout-features="ccmp,locl,mark,kern,liga,calt,ss01,ss02,smcp"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD,U+0250-02AF" &&

pyftsubset\
      Blanco-Italic.woff \
      --output-file="Blanco-Italic.subset.woff2" \
      --flavor=woff2 \
      --layout-features="ccmp,locl,mark,mkmk,kern,liga,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      Blanco-Italic.woff \
      --output-file="Blanco-Italic.subset.woff" \
      --flavor=woff \
      --layout-features="ccmp,locl,mark,mkmk,kern,liga,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      Blanco-Medium.woff \
      --output-file="Blanco-Medium.subset.woff2" \
      --flavor=woff2 \
      --layout-features="ccmp,locl,mark,mkmk,kern,liga,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      Blanco-Medium.woff \
      --output-file="Blanco-Medium.subset.woff" \
      --flavor=woff \
      --layout-features="ccmp,locl,mark,mkmk,kern,liga,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      GT-America-Extended-Medium.woff \
      --output-file="GT-America-Extended-Medium.subset.woff2" \
      --flavor=woff2 \
      --layout-features="ccmp,locl,mark,mkmk,kern,liga,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      GT-America-Extended-Medium.woff \
      --output-file="GT-America-Extended-Medium.subset.woff" \
      --flavor=woff \
      --layout-features="ccmp,locl,mark,mkmk,kern,liga,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      Blanco-Italic.woff \
      --output-file="Blanco-Italic.subset.woff2" \
      --flavor=woff2 \
      --layout-features="ccmp,locl,mark,mkmk,kern,liga,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      pitch-web-semibold.woff \
      --output-file="pitch-web-semibold.subset.woff2" \
      --flavor=woff2 \
      --layout-features="locl,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      pitch-web-semibold.woff \
      --output-file="pitch-web-semibold.subset.woff" \
      --flavor=woff \
      --layout-features="locl,calt"\
      --unicodes="U+0000-00A0,U+00A2-00A9,U+00AC-00AE,U+00B0-00B7,\
      U+00B9-00BA,U+00BC-00BE,U+00D7,U+00F7,U+2000-206F,U+2074,U+20AC,\
      U+2122,U+2190-21BB,U+2212,U+2215,U+F8FF,U+FEFF,U+FFFD" &&

pyftsubset\
      pitch-web-semibold-italic.woff \
      --output-file="pitch-web-semibold-italic.subset.woff2" \
      --flavor=woff2 \
      --layout-features="locl,calt"\
      --unicodes="U+0020-007F"

pyftsubset\
      pitch-web-semibold-italic.woff \
      --output-file="pitch-web-semibold-italic.subset.woff" \
      --flavor=woff \
      --layout-features="locl,calt"\
      --unicodes="U+0020-007F"
