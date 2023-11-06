const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const tabs = $$(".page-item");
const numPages = Math.ceil(tabs.length);
let current_page = 1;

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  const btn_next = $("#btn_next");
  const btn_prev = $("#btn_prev");
  const listing_page = $("#listPage");

  if (page < 1) return (page = 1);
  if (page > numPages) return (page = numPages);
  $(".page-item.active").classList.remove("active");
  for (let i = page - 1; i < page; i++) {
    listing_page.appendChild(tabs[i]);
    tabs[i].classList.add("active");
  }

  if (page == 1) {
    btn_prev.setAttribute("class", "prevBtn disable");
  } else {
    btn_prev.setAttribute("class", "prevBtn");
  }

  if (page == numPages) {
    btn_next.setAttribute("class", "nextBtn disable");
  } else {
    btn_next.setAttribute("class", "nextBtn");
  }
}

window.onload = function () {
  changePage(1);
};
