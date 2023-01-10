function getFirstFiveRatings(ratings) {
  const firstFiveRatings = ratings.slice(0, 5);

  return ratings.length >= 5 && firstFiveRatings;
}

function sumFirstFiveRatings(ratings) {
  const ratingsBool = Boolean(ratings);

  if (ratingsBool) {
    const firstFiveRatings = getFirstFiveRatings(ratings);

    if (!firstFiveRatings) return { error: "there must be at least 5 ratings" };

    let ratingsSum = 0;

    for (const rating of firstFiveRatings) {
      ratingsSum += Number(rating);
    }

    const dataInTimestap = +new Date();

    return { ratingsSum, created_at: dataInTimestap };
  }

  return { error: "ratings is required" };
}

const appRatings = ["5", "3", "4", "4", "5", "1", "5", "4", "4", "3"];
sumFirstFiveRatings(appRatings);
