const mainWrapper = document.querySelector(".main-wrapper");
const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
  card(res.data);
  form.elements.query.value = "";
});

const card = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const mainCard = document.createElement("div");
      const img = document.createElement("img");
      const titleLink = document.createElement("div");
      const link = document.createElement("a");
      mainCard.className = "main-card";
      mainWrapper.append(mainCard);
      img.src = result.show.image.medium;
      mainCard.append(img);
      titleLink.className = "link";
      link.innerText = `${result.show.name}`;
      link.href = `${result.show.url}`;
      mainCard.append(titleLink);
      titleLink.append(link);
    }
  }
};
