const cepInput = $("#cep");
const addressStreetInput = $("#address-street");
const cityInput = $("#city");
const stateInput = $("#state");

cepInput.on("focusout", async () => {
    const cep = cepInput.val();

    try {
        const addressInfo = await getCEPInfo(cep);
        if (!addressInfo.city) {
            throw new Error('Invalid CEP');
        }

        addressStreetInput.val(addressInfo.address);
        cityInput.val(addressInfo.city);
        stateInput.val(addressInfo.state);

        removeInputInvalidation(cepInput);
    } catch(e) {
        if (cep.replace(' ', '') === '') {
            return;
        }

        invalidateInput(cepInput);
        console.log("Cep invalido!");
    }
});