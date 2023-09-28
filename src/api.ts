import axios from 'axios'

interface Content {
  id: number
  createdAt: string
}

interface ContentListResponse {
  data: Content[]
}

const getContents = async () => {
  try {
    const response = await axios.get<ContentListResponse>(
      `https://api.learnhub.thanayut.in.th/content`,
    )
    const contentList = response.data.data

    const filteredContent = contentList.filter(
      (content) =>
        Number(new Date(content.createdAt)) <
        Number(new Date('2023-05-22T00:00:00.000+07:00')),
    )

    // const result = []
    // for (let index = 0; index < contentList.length; index++) {
    //   const element = contentList[index]

    //   const dated = new Date(element.createdAt)
    //   if (dated.valueOf() < new Date('2023-05-22T00:00:00.000+07:00').valueOf())
    //     result.push(element)
    // }

    console.log(filteredContent)

    // const filteredContent = contentList.map(({ createdAt, ...others }) => ({
    //   ...others,
    //   createdAt: new Date(createdAt),
    // })).filter(({createdAt}) => createdAt.valueOf() < (new Date("2023-05-22T00:00:00.000+07:00")).valueOf())

    // console.log(JSON.stringify(filteredContent, null, 2))
  } catch (error) {
    console.error(error)
  }
}

getContents()
