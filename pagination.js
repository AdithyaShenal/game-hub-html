const element = document.querySelector(".pagination ul");
let totalPages = 100;
let page = 1; // Change the starting page to 1

// calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, currentPage) {
  let liTag = '';
  let active;
  let beforePage = currentPage - 2; // Adjust beforePage
  let afterPage = currentPage + 2; // Adjust afterPage

  if (currentPage > 1) {
    liTag += `<li class="btn prev" onclick="window.location.href='${currentPage - 1}.html'"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
  } else {
    liTag += `<li class="btn prev disabled"><span><i class="fas fa-angle-left"></i> Prev</span></li>`; // Add disabled class if it's the first page
  }

  if (currentPage > 2) {
    liTag += `<li class="first numb" onclick="window.location.href='1.html'"><a href="1.html" style="color: white; text-decoration: none;">1</a></li>`;
    if (currentPage > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (currentPage == totalPages) {
    beforePage = beforePage - 2;
  } else if (currentPage == totalPages - 1) {
    beforePage = beforePage - 1;
  }

  if (currentPage == 1) {
    afterPage = afterPage + 2;
  } else if (currentPage == 2) {
    afterPage = afterPage + 1;
  }

  // Manually specify the page links
  const pageLinks = [
    { page: 1, href: "1.html" },
    { page: 2, href: "2.html" },
    { page: 7, href: "7.html" },
    // Add more page links here
  ];

  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages || plength < 1) { // Skip pages less than 1
      continue;
    }
    if (currentPage == plength) {
      active = "active";
    } else {
      active = "";
    }
    
    // Check if the current page matches any of the specified page links
    const pageLink = pageLinks.find(link => link.page === plength);
    if (pageLink) {
      liTag += `<li class="numb ${active}" onclick="window.location.href='${pageLink.href}'"><a href="${pageLink.href}" style="color: white; text-decoration: none;">${plength}</a></li>`;
    } else {
      liTag += `<li class="numb ${active}" onclick="window.location.href='${plength}.html'"><a href="${plength}.html" style="color: white; text-decoration: none;">${plength}</a></li>`;
    }
  }

  if (currentPage < totalPages - 1) {
    if (currentPage < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="window.location.href='${totalPages}.html'"><a href="${totalPages}.html" style="color: white; text-decoration: none;">${totalPages}</a></li>`;
  }

  if (currentPage < totalPages) {
    liTag += `<li class="btn next" onclick="window.location.href='${currentPage + 1}.html'"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  } else {
    liTag += `<li class="btn next disabled"><span>Next <i class="fas fa-angle-right"></i></span></li>`; // Add disabled class if it's the last page
  }

  element.innerHTML = liTag;
  return liTag;
}
