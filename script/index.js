const modalFunc = () => {
  const modal = document.querySelector(".card-modal__overlay");
  const cardBtn = document.querySelector("#card-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cardBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("card-modal__overlay") ||
      event.target.closest(".card-modal__header--close")
    ) {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца Плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-1.jpg",
    },
    {
      id: 1,
      title: "Тануки",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-2.jpg",
    },
    {
      id: 2,
      title: "Foodband",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка...</p>';
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="./images/rests/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h4 class="products-card__description--title">${card.title}</h4>
                                    <div class="products-card__description--badge">${card.time} мин</div>
                                </div>
                                <div class="products-card__description--row">
                                    <div class="products-card__description-info">
                                        <div class="products-card__description-info--raiting">
                                            <img src="./images/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="products-card__description-info--price">
                                            от ${card.price}
                                        </div>
                                        <div class="products-card__description-info--group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
        `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector("#goods-container");

  const restArray = [
    {
      id: 0,
      title: "Окинава стандарт",
      price: 250,
      description:
        " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий.",
      image: "good-1.jpg",
    },
    {
      id: 1,
      title: "Калифорния лосось стандарт",
      price: 395,
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      image: "good-2.jpg",
    },
    {
      id: 2,
      title: "Цезарь маки хl",
      price: 250,
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь.",
      image: "good-3.jpg",
    },
    {
      id: 3,
      title: "Ясай маки стандарт 185 г",
      price: 250,
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг.",
      image: "good-4.jpg",
    },
    {
      id: 4,
      title: "Ролл с креветкой стандарт",
      price: 250,
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы.",
      image: "good-5.jpg",
    },
    {
      id: 5,
      title: "Ролл угорь стандарт",
      price: 250,
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      image: "good-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка...</p>';
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
             <div class="products-card">
                            <div class="products-card__image">
                                <img src="./images/goods/${card.image}" alt="${card.image}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h5 class="products-card__description--name">
                                        ${card.title}
                                    </h5>
                                </div>
                                <div class="products-card__description--row">
                                    <p class="products-card__description--text">
                                       ${card.description}
                                    </p>
                                </div>
                                <div class=" products-card__description--row">
                                    <div class="products-card__description--controls">
                                        <button class="btn btn-primary">
                                            В корзину
                                            <img src="./images/icons/shopping-card-white.svg" alt="shopping-card-white">
                                        </button>

                                        <span class="products-card__description-controls--price">
                                            ${card.price} $
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
