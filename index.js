document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#remove').addEventListener('click', function() {
        document.querySelectorAll('.boring').forEach((e) => e.remove());
    });
    
    document.querySelector('#read').addEventListener('click', function() {
        readValues();
    });

});


function readValues() {

    const isChecked = document.querySelector('#myCheckbox').checked;
    if (isChecked) {
        alert(document.querySelector('#myTextField').value);
    }

}