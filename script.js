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
// let jumlah = document.querySelectorAll(".jumlah"),
//   num = document.querySelectorAll(".num");

// let x = 1;

// jumlah.forEach(function(el)) {
//   let numData = num
// };

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("plus")) {
//     let number = num.getAttribute("data-num");
//     num.forEach(function (element) {
//       if (jml == number) {
//         element.innerHTML = `${(x += 1)}`;
//       }
//     });
//   }
// });
