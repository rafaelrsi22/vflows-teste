const saveSupplierBtn = $("#save-supplier");
const addProductBtn = $("#add-product");
const addAttachmentBtn = $("#add-attachment");

addProductBtn.click(() => {
    const productId = getProductLength();
    const newProductHTML = createProductElement(productId);

    insertProductIntoList(newProductHTML);

    const deleteButton = $($(`#${productId}`).children(".delete-button")[0]);
    deleteButton.click(() => deleteProductFromListById(productId));
});

addAttachmentBtn.click(() => {
    updateModal('Incluir anexo', `
        <div id="modal-attachment-container" class="form-group fs-display-flex fs-flex-direction-column fs-justify-content-center fs-align-items-center">
            <label for="exampleInputFile">Anexo</label>
            <input id="modal-file-attachment-input" type="file" id="exampleInputFile">
            <p class="help-block">Clique em procurar e selecione o anexo desejado.</p>
            <button id="modal-add-attachment-button" type="success" class="btn btn-success fs-font-bold">Adicionar anexo</button>
        </div>
    `);
    showModal();
    
    const container = getModalBodyElementById("modal-attachment-container");
    const addButton = $(container.children("#modal-add-attachment-button"));
    const attachmentFileInput = $(container.children("#modal-file-attachment-input"));
    
    addButton.click(() => {
        const file = attachmentFileInput.prop('files')[0];
        const reader = new FileReader();

        reader.onload = function(base64) {
            buildAttachmentInfo({
                fileString: base64.target.result,
                fileName: file.name
            });

            clearModal();
            hideModal();

            const attachmentId = "att-" + getAttachmentLength();
            const newAttachmentItem = createAttachmentElement(attachmentId);
            insertAttachmentIntoList(newAttachmentItem);

            const deleteButton = $($(`#${attachmentId}`).children(".delete-button")[0]);
            const viewButton = $($(`#${attachmentId}`).children(".view-button")[0]);

            deleteButton.click(() => deleteAttachmentFromList(attachmentId));
            viewButton.click(() => {
                const downloadAnchor = document.createElement('a');
                downloadAnchor.download = file.name;
                downloadAnchor.href = reader.result;
                downloadAnchor.click();
            });
        }
        reader.readAsDataURL(file);
    });
});

saveSupplierBtn.click(() => {
    if (!isRequiredInputsValidated() || !isProductsLengthValid() || !isAttachmentLengthValid()) {
        console.log('inputs not validated')
        return;
    }

    buildSupplierInfo({
        socialReason: $("#social-reason").val(),
        cnpj: $("#cnpj").val(),
        commercialName: $("#commercial-name").val(),
        stateRegistration: $("#state-registration").val(),
        contactName: $("#contact-name").val(),
        telephone: $("#telephone").val(),
        email: $("#email").val()
    });

    clearDataProducts();

    for (const productElement of $(".product-element")) {
        const productName = productElement.getElementsByClassName("product-name")[0].value;
        const measureUnit = productElement.getElementsByClassName("measure-unit")[0].value;
        const measureQuantity = productElement.getElementsByClassName("measure-quantity")[0].value;
        const unitValue = productElement.getElementsByClassName("unit-value")[0].value;
        const totalValue = productElement.getElementsByClassName("total-value")[0].value;

        buildProductInfo({productName, measureUnit, measureQuantity, unitValue, totalValue})
    }

    startLoadingModal();

    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = window.URL.createObjectURL(new Blob([buildJSON()]));
    downloadAnchor.download = 'result.json';
    downloadAnchor.click();

    setTimeout(() => {
        stopLoadingModal();
    }, 1000);
});