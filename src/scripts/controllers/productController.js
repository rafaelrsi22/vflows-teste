const productList = $("#product-list");

function createProductElement(productId) {
    return `
            <li id="${productId}" class="list-group-item fs-display-flex fs-justify-content-space-between fs-align-items-center">
                <button type="button" class="delete-button icon-btn btn btn-danger">
                    <img src="../assets/trash.png" alt="">
                </button>
                <div class="fs-full-width">
                    <h3 class="">Produto ${getProductLength()}</h3>
                    <div class="card card-horizontal">
                        <div class="card-thumb">
                            <i class="illustration illustration-layout-group illustration-md" aria-hidden="true" ></i>
                        </div>
                        <div class="card-body">
                            <div class="row fs-full-width">
                                <div class="form-group col-md-12">
                                    <label for="product-name">Produto</label>
                                    <input name="productName" type="text" class="form-control" id="product-name" required>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="measure-unit">UND. Medida</label>
                                    <select name="measureUnit" id="measure-unit" class="form-control" required>
                                        <option value="teste">teste</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="measure-quantity">QTDE. em Estoque</label>
                                    <input name="measureQuantity" type="number" class="form-control" id="measure-quantity" min="0" value="0" required>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="unit-value">Valor Unitário</label>
                                    <input name="unitValue" type="number" class="form-control" id="unit-value" min="0" value="0" required>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="total-value">Valor Total</label>
                                    <input name="totalValue" type="number" class="form-control" id="total-value" min="0" value="0" required disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
    `;
}

function updateProductListTitles() {
    let i = 0;

    for (const child of productList.children()) {
        i++;
        const product = $(child);
        const productTitle = $($(product.children("div")[0]).children("h3")[0]);

        productTitle.text("Produto " + i);
    }
}

function insertProductIntoList(productHTML) {
    productList.append(productHTML);
}

function deleteProductFromListById(productId) {
    $(`#${productId}`).remove();
    updateProductListTitles();
}

function getProductLength() {
    return productList.children().length + 1;
}