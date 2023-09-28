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
     * Approach #0 - Back to basics, using a naive for-loop
     */

    const filteredResult = []
    for (let index = 0; index < contentList.length; index++) {
      const element = contentList[index]

      const createdAtDate = new Date(element.createdAt)
      if (
        // Using the valueOf() method to compare the two dates as milliseconds
        createdAtDate.valueOf() < academyFirstDate.valueOf() &&
        // Using the + sign to convert both dates to numbers and then comparing them
        +createdAtDate < +academyFirstDate &&
        // Simply comparing the two dates directly
        createdAtDate < academyFirstDate
      )
        filteredResult.push(element)
      /**
       * Note: It is intentional to use the [&&] operator for all expressions above,
       * as it will all yield a true value, true && true && true == true.
       * This means that the code will only push the element to filteredResult if all three expressions are true.
       */
    }

    /**
     * Approach #1: Map each piece of content.createdAt from string to Date first,
     * and then filter only content that was created before 22-05-2023
     */
    const mappedToDate = contentList
      // Map from string => Date
      .map((
        /* Object desctruction, we only need the [createdAt] field, leaving the rest to [others] */ {
          createdAt,
          ...others
        },
      ) => ({
        ...others,
        createdAt: new Date(createdAt),
      }))

    // Then filter only the contents that were created before 22-05-2023
    const filteredContentUsingMapped = mappedToDate.filter(
      ({ createdAt }) => createdAt.valueOf() < academyFirstDate.valueOf(),
    )

    // We can also make this work by using [+] as a prefix
    const shorterFilteredContentUsingMapped = mappedToDate.filter(
      ({ createdAt }) => +createdAt < +academyFirstDate,
    )

    // Or, even comparing Date without a [+] sign
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

    // just using a [+] sign
    const shorterFilteredContentWithOnlyFilter = contentList.filter(
      (content) => +new Date(content.createdAt) < +academyFirstDate,
    )

    // Or comparing Date directly
    const shortestFilteredContentWithOnlyFilter = contentList.filter(
      (content) => new Date(content.createdAt) < academyFirstDate,
    )

    console.log(JSON.stringify(filteredResult, null, 2))

    console.log(
      // plus sign is equal to Number()
      +academyFirstDate === Number(academyFirstDate),
      /**
       * Print only the length for readability,
       * but demonstrate that any of the above-mentioned solutions will generate the same outcome.
       * */
      filteredResult.length,
      filteredContentUsingMapped.length,
      shorterFilteredContentUsingMapped.length,
      shortestFilteredContentUsingMapped.length,
      filteredContentWithOnlyFilter.length,
      shorterFilteredContentWithOnlyFilter.length,
      shortestFilteredContentWithOnlyFilter.length,
    )
  } catch (error) {
    console.error(error)
  }
}

getContents()
