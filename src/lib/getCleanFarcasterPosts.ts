import _ from 'lodash'

async function getCleanFarcasterPosts() {
  const farcasterPostsUri = `https://api.warpcast.com/v2/casts?fid=4905&limit=35`
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.WARPCAST_TOKEN}`,
    },
  }
  type Fetcher = (uri: string) => Promise<any>
  const fetcher: Fetcher = (uri: string) =>
    fetch(uri, config as RequestInit).then((res) => res.json())

  const data = await fetcher(farcasterPostsUri)
  console.log({
    farcasterData: data,
  })
  const originalPosts = _.filter(
    _.get(data, 'result.casts'),
    (item) => item.recast !== true && _.isUndefined(item.parentHash)
  )

  const cleanPosts = _.map(originalPosts, (p) => ({
    text: _.get(
      p,
      'attachments.openGraph[0].strippedCastText',
      _.get(p, 'text')
    ),
    image: _.get(p, 'embeds.images[0].url', null),
    timestamp: p.timestamp,
    reactions: p.reactions.count,
    replies: p.replies.count,
    hash: p.hash,
  }))
  return cleanPosts
}

export { getCleanFarcasterPosts }
