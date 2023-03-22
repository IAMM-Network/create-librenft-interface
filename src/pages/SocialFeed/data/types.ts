export interface PostProps {
  postId: string
  username: string
  profile: string
  fullName: string
  text: string
  mediaUrl: string
  createdAt: string
  commentCount: number
  shareCount: number
  likeCount: number
  threads: string[] //postIds
  canTip: boolean
}

function randomDate(start: Date, end: Date) {
  const randDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  return randDate.toISOString()
}

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getPostMockData = (count: number) => {
  return Array.from(Array(count).keys()).map((_, idx) => ({
    postId: `${idx}`,
    profile: '/profile-1.png',
    username: 'Dolor ist amet',
    fullName: 'doloristamet',
    text: 'Amet nisl purus in mollis. Faucibus et molestie ac feugiat sed. @Lorem_Ipsum',
    mediaUrl: idx % 2 === 0 ? '/thumbnail-1.png' : '/thumbnail-2.png',
    createdAt: randomDate(new Date(Date.now() - idx * 24 * 60 * 60 * 1000), new Date(Date.now() - idx - 1 * 24 * 60 * 60 * 1000)),
    commentCount: randomIntFromInterval(1, 10),
    shareCount: randomIntFromInterval(1, 50),
    likeCount: randomIntFromInterval(1, 100),
    threads: idx % 3 === 0 ? ['1', '2', '3'] : [],
    canTip: idx % 2 === 0 ? true : false,
  }))
}
