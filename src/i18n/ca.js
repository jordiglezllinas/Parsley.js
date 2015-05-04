// ParsleyConfig definition if not already set
window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};

window.ParsleyConfig.i18n.ca = jQuery.extend(window.ParsleyConfig.i18n.ca || {}, {
    defaultMessage: "Aquest valor sembla ser invàlid.",
    type: {
        email:        "Aquest valor ha de ser un correu vàlid.",
        url:          "Aquest valor ha de ser un URL vàlid.",
        number:       "Aquest valor ha de ser un nombre vàlid.",
        integer:      "Aquest valor ha de ser un nombre sencer vàlid.",
        digits:       "Aquest valor ha de ser un dígit vàlid.",
        alphanum:     "Aquest valor ha de ser un alfanumèric."
    },
    notblank:       "Aquest valor no ha d'estar en blanc.",
    required:       "Aquest valor és necessari.",
    pattern:        "Aquest valor és incorrecte.",
    min:            "Aquest valor no ha de ser menor que %s.",
    max:            "Aquest valor no ha de ser major que %s.",
    range:          "Aquest valor ha d'estar entre %s i %s.",
    minlength:      "Aquest valor és molt curt. La longitud mínima és de %s caràcters.",
    maxlength:      "Aquest valor és molt llarg. La longitud màxima és de %s caràcters.",
    length:         "La longitud d'aquest valor ha d'estar entre %s i %s caràcters.",
    mincheck:       "Ha de seleccionar almenys %s opcions.",
    maxcheck:       "Ha de seleccionar %s opcions o menys.",
    check:          "Ha de seleccionar entre %s i %s opcions.",
    equalto:        "Aquest valor ha de ser idèntic."

});

// If file is loaded after Parsley main file, auto-load locale
if ('undefined' !== typeof window.ParsleyValidator)
    window.ParsleyValidator.addCatalog('ca', window.ParsleyConfig.i18n.ca, true);
