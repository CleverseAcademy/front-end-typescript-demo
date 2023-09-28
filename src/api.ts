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

    const academyFirstDate = new Date('2023-05-22T00:00:00.000+07:00')

    /**
     * Approach #0 - Back to basic, use naive for loop
     */

    const filteredResult = []
    for (let index = 0; index < contentList.length; index++) {
      const element = contentList[index]

      const createdAtDate = new Date(element.createdAt)
      if (
        // using valueOf method
        createdAtDate.valueOf() < academyFirstDate.valueOf() &&
        // or using + sign
        +createdAtDate < +academyFirstDate &&
        // or just compare two Date
        createdAtDate < academyFirstDate
      )
        filteredResult.push(element)
    }

    /**
     * Approach #1: Map each content.createdAt from string to Date first,
     * and then filter only content that was created before 22-05-2023
     */
    const mappedToDate = contentList
      // Map from string => Date
      .map((
        /* Object desctruction, we only need [createdAt] field and left the rest being [others] */ {
          createdAt,
          ...others
        },
      ) => ({
        ...others,
        createdAt: new Date(createdAt),
      }))

    // And filter only contents that were created before 22-05-2023
    const filteredContentUsingMapped = mappedToDate.filter(
      ({ createdAt }) => createdAt.valueOf() < academyFirstDate.valueOf(),
    )

    // We can also make this work by + as a prefix
    const shorterFilteredContentUsingMapped = mappedToDate.filter(
      ({ createdAt }) => +createdAt < +academyFirstDate,
    )

    // Or, even comparing Date without a + sign
    const shortestFilteredContentUsingMapped = mappedToDate.filter(
      ({ createdAt }) => createdAt < academyFirstDate,
    )

    /**
     * Approach #2: put cast logic within filter, no map required - no wasting CPU time
     */
    const filteredContentWithOnlyFilter = contentList.filter(
      (content) =>
        new Date(content.createdAt).valueOf() < academyFirstDate.valueOf(),
    )

    // just using + sign
    const shorterFilteredContentWithOnlyFilter = contentList.filter(
      (content) => +new Date(content.createdAt) < +academyFirstDate,
    )

    // Or comparing Date directly
    const shortestFilteredContentWithOnlyFilter = contentList.filter(
      (content) => new Date(content.createdAt) < academyFirstDate,
    )

    console.log(
      filteredResult.length,
      filteredContentUsingMapped.length,
      shorterFilteredContentUsingMapped.length,
      shortestFilteredContentUsingMapped.length,
      filteredContentWithOnlyFilter.length,
      shorterFilteredContentWithOnlyFilter.length,
      shortestFilteredContentWithOnlyFilter.length,
    )

    console.log(JSON.stringify(filteredResult, null, 2))
  } catch (error) {
    console.error(error)
  }
}

getContents()
