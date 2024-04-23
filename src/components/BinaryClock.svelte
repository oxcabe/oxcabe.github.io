<script lang="ts">
  let date = Math.trunc(Date.now() / 1000);

  setInterval(() => {
    date += 1;
  }, 1000);

  /**
   * Turns a number `num` into a array containing its binary representation,
   * splitted into segments of size `segmentSize`.
   * @param num Number to process.
   * @param segmentSize Size of the segments of the resulting array.
   * @returns String array with the binary representation of `num` in segments
   *  of size `segmentSize`.
   */
  const numberToBinarySegments = (
    num: number,
    segmentSize: number,
  ): String[] => {
    let numBinaryString = num.toString(2);
    const regex = new RegExp(`.{1,${segmentSize}}`, "g");

    const padding = "0".repeat(
      segmentSize - (numBinaryString.length % segmentSize),
    );
    numBinaryString = `${padding}${numBinaryString}`;

    return numBinaryString.match(regex) || [];
  };
</script>

<article id="binaryclock" class="grid grid-rows-2 grid-flow-col gap-4 text-2xl">
  {#each numberToBinarySegments(date, 4) as segment}
    <span>{segment}</span>
  {/each}
</article>
