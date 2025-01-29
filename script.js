const link1 = "https://viragbolt-backend.onrender.com/api/flowers";
const link2 = "https://viragbolt-backend.onrender.com/api/categories";

let categ = "";
let searchVar = "";

const renderCategories = (data) => {
  const categ = document.querySelector(".categ");
  data.forEach((category) => {
    let a = category.nev;
    console.log(a);
    categ.innerHTML += `
        <button onclick="nextStep('${a}')" type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">${category.nev}</button>
        `;
  });
};

const nextStep = (id) => {
  categ = id;
  get_data(link1, renderFlowers);
};

get_data(link2, renderCategories);

const renderFlowers = (data) => {
  const container = document.querySelector(".flowers");
  container.innerHTML = "";
  console.log(data);
  let categE;
  categE = data.filter((flower) => flower.kategoria_nev == categ);
  categE.forEach((flower) => {
    container.innerHTML += `
                <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <button popovertarget="popover-${flower.nev}" href="#">
                        <img class="rounded-t-lg" src="${flower.kepUrl}" alt="" />
                    </button>
                    <div     class="popoverContent" id="popover-${flower.nev}" popover>
                    <p>nev: ${flower.nev}</p>
                    <p>ar: ${flower.ar}</p>
                    <p>Keszlet: ${flower.keszlet}</p>
                    <p>Leiras: ${flower.leiras}</p>

                    </div>

                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${flower.nev}</h5>
                        </a>
                    </div>
                </div>
            `;
  });
};

const renderFlowersSearch = (data) => {
  const container = document.querySelector(".flowers");
  container.innerHTML = "";
  console.log(data);
  let categE;
  categE = data.filter((flower) =>
    flower.nev.toLowerCase().includes(searchVar.toLowerCase()),
  );

  categE.forEach((flower) => {
    container.innerHTML += `
                <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <button popovertarget="popover-${flower.nev}" href="#">
                        <img class="rounded-t-lg" src="${flower.kepUrl}" alt="" />
                    </button>
                    <div class="popoverContent" id="popover-${flower.nev}" popover>
                    <p>nev: ${flower.nev}</p>
                    <p>ar: ${flower.ar}</p>
                    <p>Keszlet: ${flower.keszlet}</p>
                    <p>Leiras: ${flower.leiras}</p>

                    </div>

                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${flower.nev}</h5>
                        </a>
                    </div>
                </div>
            `;
  });
};

const search = () => {
  const searchBar = document.getElementById("searchBar");
  searchVar = searchBar.value;
  get_data(link1, renderFlowersSearch);
};
