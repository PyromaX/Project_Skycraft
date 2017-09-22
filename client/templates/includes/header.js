Template.header.helpers({
    //add you helpers here
});

Template.header.events({
    //add your events here
});

Template.header.onCreated(function () {
    //add your statement here
});

Template.header.onRendered(function () {
    //add your statement here
    // $(document).ready(function(){
    //     /* affix the navbar after scroll below header */
    //     $(".navbar").affix({offset: {top: $("header").outerHeight(true)} });
    // });

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens,
    });

    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: false, // Displays dropdown below the button
            alignment: 'left', // Displays dropdown with edge aligned to the left of button
            stopPropagation: false // Stops event propagation
        }
    );

    $(document).ready(function(){
        $('.target').pushpin({
            top: 200
        });
    });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    setInterval(function(){
        $('.carousel').carousel('next');
    }, 5000);

});

Template.header.onDestroyed(function () {
    //add your statement here
});

