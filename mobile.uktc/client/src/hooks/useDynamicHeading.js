export function changeTitle() {
  let titles = [
    "Welcome to CarAvenue - Your Dream Car Awaits!",
    "Explore Our Latest Car Deals",
    "Find Your Perfect Car Today",
    "Discover Top Brands and Models",
    "Ready to Drive? Check Our Inventory!",
    "Exclusive Offers for Car Enthusiasts"
  ];

  let index = 0;
  setInterval(() => {
    document.title = titles[index];
    index = (index + 1) % titles.length;
  }, 8000);
}
