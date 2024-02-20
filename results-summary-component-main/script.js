async function getData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();

    let li = "";
    data.forEach((item) => {
      li += `
          <li class="list_item">
            <img src="${item.icon}" alt="" class="Imgicon" />
            <p class="category">${item.category}</p>
            <p class="list_right">
              <strong class="score">${item.score}</strong>
              <span>/100</span>
            </p>
          </li>
        `;
      const summaryDetail = document.querySelector(".summary_details");

      summaryDetail.innerHTML = li;
    });
  } catch (error) {
    console.log("Error Fetching data: ", error);
  }
}
getData();
