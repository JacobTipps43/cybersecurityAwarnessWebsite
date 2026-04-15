const quotes = [
  { quote: "I feel more confident using work systems after this.", author: "Alex P." },
  { quote: "This made Cybersecurity feel less scary and more practical.", author: "Sarah H." },
  { quote: "It's stuff I can actually use, not just theory.", author: "Chris K." },
  { quote: "This site actually taught me things I use every day.", author: "Jordan L." },
  { quote: "Super easy to understand and really helpful.", author: "Taylor M." },
  { quote: "I finally get how to protect my accounts online.", author: "Morgan S." },
  { quote: "Way better than just reading boring textbooks.", author: "Casey R." },
  { quote: "Everything is explained clearly and simply.", author: "Jamie T." },
  { quote: "I feel a lot safer online after using this site.", author: "Drew K." },
  { quote: "This made cybersecurity finally make sense.", author: "Avery B." }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateTestimonials() {
  const testimonialQuotes = document.querySelectorAll(".testimonial .quote");
  const testimonialAuthors = document.querySelectorAll(".testimonial .author");

  testimonialQuotes.forEach((quoteEl, index) => {
    const random = getRandomQuote();
    quoteEl.textContent = `“${random.quote}”`;

    if (testimonialAuthors[index]) {
      testimonialAuthors[index].textContent = `- ${random.author}`;
    }
  });
}

document.addEventListener("DOMContentLoaded", updateTestimonials);