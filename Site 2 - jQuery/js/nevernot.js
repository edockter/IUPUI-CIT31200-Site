$( document ).ready(function() {
    // grab all elements with a quantity
    var quantityElements = $('*[data-quantity]');    

    // check each quantity and update appropriately
    $(quantityElements).each(function(index, element) {
        if ($(element).data('quantity') < 20) {
            $(element).addClass('inventory_low');            
        }
    });

    // checkbox variables
    var $allCheck = $('input[type="checkbox"][value="all"]');
    var $accessoryCheck = $('input[type="checkbox"][value="accessory"]');
    var $hardwareCheck = $('input[type="checkbox"][value="hardware"]');
    var $mobileCheck = $('input[type="checkbox"][value="mobile"]');
    var $softwareCheck = $('input[type="checkbox"][value="software"]');

    // element group variables
    var $allElements = $('.product_listing');
    var $accessoryElements = $('*[data-category="accessory"]');
    var $hardwareElements = $('*[data-category="hardware"]');
    var $mobileElements = $('*[data-category="mobile"]');; 
    var $softwareElements = $('*[data-category="software"]');;

    // when we check the "All" box, uncheck all others    
    $($allCheck).change(function(event) {         
        if($(this).is(":checked")) {
            $($accessoryCheck).prop('checked', false);
            $($hardwareCheck).prop('checked', false);
            $($softwareCheck).prop('checked', false);
            $($mobileCheck).prop('checked', false);
            $allElements.fadeIn();
        }
        else {
            $allElements.fadeOut();
        }
    });

    // Events for sub-selection checkboxes
    $($accessoryCheck).change(function(event) {
        ChangeInput(this, $accessoryElements);
    });
    $($hardwareCheck).change(function(event) {
        ChangeInput(this, $hardwareElements);
    });
    $($mobileCheck).change(function(event) {
        ChangeInput(this, $mobileElements);
    });
    $($softwareCheck).change(function(event) {
        ChangeInput(this, $softwareElements);
    });

    // Handle checkbox click logic (Stay DRY)
    function ChangeInput($clickedCheckbox, $elementsGroup) {
        if($($clickedCheckbox).is(":checked")) {            
            if ($allCheck.is(":checked")) {
                $allElements.fadeOut();
                $($allCheck).prop('checked', false);
            }
            $($elementsGroup).fadeIn();            
        }
        else {
            $($elementsGroup).fadeOut();
        }  
    }
});