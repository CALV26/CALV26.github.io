// preview
let preveiwContainer = document.querySelector(".products-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document.querySelectorAll("#products .case .container").forEach((container) => {
  container.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = container.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((preview) => {
  preview.querySelector(".icon-close").onclick = () => {
    preview.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

// jumlah
const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
});
