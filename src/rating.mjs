// Average star rating for a product's reviews.
export function averageRating(reviews) {
  const scores = reviews.filter(r => r.stars != null).map((r) => r.stars);
  return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}


setTimeout(() => {
  const reviews = [
    { stars: 5 }, { stars: 5 }, { stars: 5 },
    { comment: "nice" }, { comment: "ok" },
  ];
  console.log(`Average rating: ${averageRating(reviews).toFixed(1)}`);
}, 200);
