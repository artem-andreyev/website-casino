document.addEventListener("DOMContentLoaded", function () {
  const playNowBtn = document.querySelector('.play-now-animated');
  if (playNowBtn) {
    playNowBtn.addEventListener('mouseenter', () => {
      playNowBtn.style.animationPlayState = 'paused';
      playNowBtn.style.transform = 'scale(1.14)';
      playNowBtn.style.boxShadow = '0 12px 36px 0 #a259e6cc';
    });
    playNowBtn.addEventListener('mouseleave', () => {
      playNowBtn.style.animationPlayState = 'running';
      playNowBtn.style.transform = '';
      playNowBtn.style.boxShadow = '';
    });
    playNowBtn.addEventListener('focus', () => {
      playNowBtn.style.animationPlayState = 'paused';
      playNowBtn.style.transform = 'scale(1.14)';
      playNowBtn.style.boxShadow = '0 12px 36px 0 #a259e6cc';
    });
    playNowBtn.addEventListener('blur', () => {
      playNowBtn.style.animationPlayState = 'running';
      playNowBtn.style.transform = '';
      playNowBtn.style.boxShadow = '';
    });
  }
  var headerBlock = document.querySelector(".header-block");
  if (!headerBlock) return;

  function onScroll() {
    if (window.scrollY > 0) {
      headerBlock.classList.add("sticky-header");
    } else {
      headerBlock.classList.remove("sticky-header");
    }
  }

  window.addEventListener("scroll", onScroll);
});

const clsbtn = document.querySelector(".footer-visible-close-btn");
clsbtn.addEventListener("click", () => {
  document.querySelector(".footer-visible").hidden = true;
});

document
  .querySelectorAll(".faq-plus-minus-block .accordion-question")
  .forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".accordion-item");
      if (!item) return;
      document
        .querySelectorAll(".faq-plus-minus-block .accordion-item")
        .forEach(function (other) {
          if (other !== item) other.classList.remove("open");
        });
      item.classList.toggle("open");
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  const tocSlider = document.getElementById("tocSlider");
  if (!tocSlider) return;
  tocSlider.innerHTML = "";
  setTimeout(() => {
    document.querySelectorAll(".page-section h2 > span[id]").forEach((span) => {
      const id = span.id;
      const h2 = span.parentElement;
      if (!id || !h2) return;
      let label = "";
      h2.childNodes.forEach((n) => {
        if (n !== span && n.nodeType === 3) label += n.textContent;
      });
      label = label.trim() || h2.textContent.trim();
      if (!label) return;
      const a = document.createElement("a");
      a.className = "toc-slider-link";
      a.href = `#${id}`;
      a.textContent = label;
      tocSlider.appendChild(a);
    });
  }, 0);
});
document.addEventListener("DOMContentLoaded", function () {
  const tocSlider = document.getElementById("tocSlider");
  const leftArrow = document.querySelector(".toc-slider-arrow-left");
  const rightArrow = document.querySelector(".toc-slider-arrow-right");
  if (!tocSlider || !leftArrow || !rightArrow) return;
  const scrollAmount = 300;
  function updateArrows() {
    if (tocSlider.scrollLeft <= 0) {
      leftArrow.disabled = true;
    } else {
      leftArrow.disabled = false;
    }
    if (
      tocSlider.scrollLeft + tocSlider.offsetWidth >=
      tocSlider.scrollWidth - 1
    ) {
      rightArrow.disabled = true;
    } else {
      rightArrow.disabled = false;
    }
  }
  leftArrow.addEventListener("click", function (e) {
    e.preventDefault();
    tocSlider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  rightArrow.addEventListener("click", function (e) {
    e.preventDefault();
    tocSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  tocSlider.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);
  setTimeout(updateArrows, 100);
});
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".game-slider");
  const leftArrow = document.querySelector(".slider-arrow-left");
  const rightArrow = document.querySelector(".slider-arrow-right");
  if (!slider || !leftArrow || !rightArrow) return;

  const scrollAmount = 300;

  leftArrow.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  rightArrow.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
document.querySelectorAll(".action-link").forEach((e) => {
  e.addEventListener("click", (t) => {
    t.preventDefault();
    const n = e.getAttribute("href");
    n.endsWith("/")
      ? (window.location.href = n)
      : (window.location.href = n + ".html");
  });
});

(() => {
  const t = "https://howl-casino.com",
    e = document.getElementById("langDropdownToggle"),
    n = document.getElementById("langDropdownList");
  e.addEventListener("click", () => {
    n.style.display = "block" === n.style.display ? "none" : "block";
  });
  document.addEventListener("click", (t) => {
    e.contains(t.target) || n.contains(t.target) || (n.style.display = "none");
  });
  n.querySelectorAll(".lang-item").forEach((e) => {
    e.addEventListener("click", () => {
      const n = e.getAttribute("data-lang");
      let o;
      o = "en" === n ? t + "/" : t + "/" + n;
      window.location.href = o;
    });
  });
})();

document.querySelectorAll(".footer-action-link").forEach((t) => {
  t.addEventListener("click", (e) => {
    e.preventDefault();
    const n = t.getAttribute("href"),
      o = n.endsWith("/") ? n + "index.html" : n + ".html";
    window.location.href = o;
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const t = window.location.pathname;
  if (t.endsWith(".html")) {
    const e = t.replace(/\.html$/, "") || "/";
    history.replaceState({}, "", e);
  }
});

(() => {
  const e = atob("aHR0cHM6Ly9ob3dsLmdnLw==");
  document.addEventListener("click", (n) => {
    const o = n.target.closest('a[href="/go"]');
    if (o) {
      n.preventDefault();
      if ("_blank" === o.target) {
        window.open(e, "_blank", "noopener,noreferrer");
      } else {
        location.href = e;
      }
    }
  });
})
();
