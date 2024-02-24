const cepInput = $("#cep");
const addressStreetInput = $("#address-street");
const cityInput = $("#city");
const stateInput = $("#state");

cepInput.on("focusout", async () => {
    const cep = cepInput.val();

    try {
        const addressInfo = await getCEPInfo(cep);
        
        addressStreetInput.val(addressInfo.address);
        cityInput.val(addressInfo.city);
        stateInput.val(addressInfo.state);
    } catch(e) {
        if (cep.replace(' ', '') === '') {
            return;
        }

        console.log("Cep invalido!");
    }
});