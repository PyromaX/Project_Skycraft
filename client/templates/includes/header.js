Template.header.helpers({

});

$(document).ready(function(){
    /* affix the navbar after scroll below header */
    $(".navbar").affix({offset: {top: $("header").outerHeight(true)} });
});