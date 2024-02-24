function isRequiredInputsValidated() {
    const requiredInputs = $("input:required, select:required");
    let validated = true;

    for (const input of requiredInputs) {
        const inputElement = $(input);

        if (inputElement.val().replace(' ', '') === '' || inputElement.hasClass('invalid')) {
            validated = false;
            invalidateInput(inputElement);

            inputElement.on("change focusin", () => removeInputInvalidation(inputElement));
        }
    }

    return validated;
}

function isProductsLengthValid() {
    if (getRawProductLength() > 0) {
        return true;
    }

    updateModal("Invalid products", '<h3 class="center" >Por favor, crie ao menos 1 produto!</h3>');
    showModal();

    return false;
}

function isAttachmentLengthValid() {
    if (getRawAttachmentLength() > 0) {
        return true;
    }

    updateModal("Invalid products", '<h3 class="center" >Por favor, inclua ao menos 1 anexo!</h3>');
    showModal();

    return false;
}

function removeInputInvalidation(jqElement) {
    jqElement.removeClass('invalid');
}

function invalidateInput(jqElement) {
    jqElement.addClass('invalid');
}