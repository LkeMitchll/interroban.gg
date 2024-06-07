import LastFMAPI from '../_providers/lastfm.js'

function dateToEpochWithOffset (time, offset) {
  const date = new Date()
  date.setHours(time)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  date.setDate(date.getDate() - date.getDay() - offset)
  return Math.round(date.valueOf() / 1000).toString()
}

async function lastWeek () {
  const api = new LastFMAPI()
  const lastWeekStart = dateToEpochWithOffset(0, 6)
  const lastWeekEnd = dateToEpochWithOffset(23, 0)

  const lastWeekTracks = await api
    .fetchTrackTotal(lastWeekStart, lastWeekEnd)
    .then((json) => Number(json.recenttracks['@attr'].total))
  const lastWeekAlbums = await api
    .fetchAlbumTotal(lastWeekStart, lastWeekEnd)
    .then((json) => json.weeklyalbumchart.album.length)

  return {
    title: 'Last week',
    tracks: {
      title: 'Tracks',
      total: lastWeekTracks
    },
    albums: {
      title: 'Albums',
      total: lastWeekAlbums
    }
  }
}

async function thisWeek () {
  const api = new LastFMAPI()
  const date = new Date()
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  const lastWeekEnd = dateToEpochWithOffset(23, 0)
  const now = Math.round(date.valueOf() / 1000).toString()

  const thisWeekTracks = await api
    .fetchTrackTotal(lastWeekEnd, now)
    .then((json) => json.recenttracks['@attr'].total)
  const thisWeekAlbums = await api
    .fetchAlbumTotal(lastWeekEnd, now)
    .then((json) => json.weeklyalbumchart.album.length)

  return {
    title: 'This week (so far)',
    tracks: {
      title: 'Tracks',
      total: thisWeekTracks
    },
    albums: {
      title: 'Albums',
      total: thisWeekAlbums
    }
  }
}

async function topAlbums () {
  const api = new LastFMAPI()
  const response = await api
    .fetchTopAlbums()
    .then((json) => json.topalbums.album)
  return response.map((album) => ({
    title: album.name,
    artist: album.artist.name,
    url: album.url
  }))
}

async function topArtists () {
  const api = new LastFMAPI()
  const response = await api
    .fetchTopArtists()
    .then((json) => json.topartists.artist)
  return response
}

export default {
  lastWeek: await lastWeek(),
  thisWeek: await thisWeek(),
  topAlbums: await topAlbums(),
  topArtists: await topArtists()
}
