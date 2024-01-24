export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }

    const results = numerator / denominator;
    return results;
  } catch (error) {
    console.error(`(Error: ${error.message})`);
  } finally {
    console.log('Division completed');
  }
}
